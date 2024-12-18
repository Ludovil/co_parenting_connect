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
    @children.each do |child|
      @guards = child.guards

     # @guard_user = child.guards.where(user_id: current_user.id)

      @selected_days = []
      @days_and_guards = []
      @guards.each do |guard|

       # @selected_days << guard.attributes.select { |key, value| value == true }.keys
       # @days_and_guards << {days: @selected_days.flatten, user: guard.user.first_name}
        active_days = guard.attributes.select { |key, value| value == true }.keys
        @days_and_guards << { days: active_days, user: guard.user.first_name }
      end

      # @selected_days_upcased = @selected_days.flatten.map(&:capitalize)

    end

      # @guards_user.each do |guard|
      #   @selected_days << guard.attributes.select { |key, value| value == true }.keys
      #   @days_and_guards << {days: @selected_days.flatten, user: guard.user.first_name}
      # end



    end
  end
