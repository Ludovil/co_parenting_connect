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
        if family_member.creator
          @members << family_member.user.first_name.upcase
        else
          @members << family_member.user.first_name
        end
      end
    end
    @children = current_user.family ? current_user.family.children : []

  end
end
