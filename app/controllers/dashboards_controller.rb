class DashboardsController < ApplicationController
  before_action :authenticate_user!

  def show
    @invitations = current_user.invitations
    @invitation = Invitation.new
    @invits = Invitation.where(recipient_id: current_user.id)
    @family = current_user.family ? current_user.family.name : "Create your family"
    @members = []
    if current_user.family
      current_user.family.family_members.each do |family_member|
        @members << family_member.user
      end
    end
  end
end
