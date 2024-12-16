class InvitationsController < ApplicationController
  before_action :set_invitation, only: [:accept, :reject, :cancel]

  def create
    @invitation = Invitation.new(invitation_params)

    recipient = User.find_by(email: invitation_params[:recipient_email])

    if recipient

    if current_user.family.family_members.exists?(user_id: recipient.id)
      redirect_to dashboard_path, alert: "Cet utilisateur est déjà membre de votre famille."
      return
    end

      @invitation.user = current_user
      @invitation.recipient = recipient
      @invitation.family = current_user.family
      @invitation.status = "pending"



      if @invitation.save
        redirect_to dashboard_path, notice: "Invitation envoyée avec succès!"
      else
        render :new, alert: "Erreur lors de l'envoi de l'invitation."
      end
    else
      render :new, alert: "Aucun utilisateur trouvé avec cet email."
    end
  end


  def accept
    @invitation.update(status: 'accepted')

    is_parent = @invitation.is_parent || false

      FamilyMember.create!(
    user: @invitation.recipient,
    family: @invitation.family,
    creator: false,
    is_parent: is_parent
  )
    redirect_to dashboard_show_path, notice: 'Invitation accepted!'
  end

  def reject
     @invitation.update(status: 'rejected')
    redirect_to dashboard_show_path, notice: 'Invitation rejected!'
  end


  def cancel
    if @invitation.destroy
      redirect_to dashboard_path, notice: 'Invitation canceled'
    else
      redirect_to dashboard_path, alert: 'Something went wrong'
    end
  end

  private

  def set_invitation
    @invitation = Invitation.find(params[:id])
    redirect_to dashboard_path, alert: "Invitation introuvable." unless @invitation
  end

  def invitation_params
    params.require(:invitation).permit(:recipient_email, :is_parent)
  end

end
