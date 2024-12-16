class CalendarController < ApplicationController
  def index
    @family_members = current_user.family.family_members
    @event = Event.new
  end
end
