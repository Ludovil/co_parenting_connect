class InvitationsController < ApplicationController
  before_action :set_invitation, only: [:accept, :reject]

  def create
    @invitation = Invitation.new

    recipient = User.find_by(email: invitation_params[:recipient_email])

    if recipient
      @invitation.user = current_user  # L'utilisateur qui envoie l'invitation
      @invitation.recipient = recipient  # L'utilisateur destinataire de l'invitation
      @invitation.family = current_user.family  # La famille de l'utilisateur
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
    # Ajouter le membre à la famille, par exemple :
    FamilyMember.create(user: @invitation.recipient, family: @invitation.family, creator: false)
    redirect_to dashboard_show_path, notice: 'Invitation accepted!'
  end

  def reject
     @invitation.update(status: 'rejected')
    redirect_to dashboard_show_path, notice: 'Invitation rejected!'
  end

  private

  def set_invitation
    @invitation = Invitation.find(params[:id])
  end

  def invitation_params
    params.require(:invitation).permit(:recipient_email)
  end

end
