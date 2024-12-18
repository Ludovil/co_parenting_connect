class DashboardsController < ApplicationController
  before_action :authenticate_user!

  def index
    # Scope your query to the dates being shown:
    start_date = params.fetch(:start_date, Date.today).to_date

    # For a monthly view:
    @events = Event.where(start_date: start_date.beginning_of_month.beginning_of_week..start_date.end_of_month.end_of_week)

    # Or, for a weekly view:
    # @events = Event.where(start_date: start_date.beginning_of_week..start_date.end_of_week)
  end

  def show
    start_date = params.fetch(:start_date, Date.today).to_date

    @events =
    if current_user.family.present? == false
       @event = nil
    else
        Event.joins(child: { family: { family_members: :user } })
                .where(
                  start_date: start_date.beginning_of_month..start_date.end_of_month,
                  family_members: { family_id: current_user.family.id }
                ).distinct
      end

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
