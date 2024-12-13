class CalendarsController < ApplicationController

  def index
    @date = params[:date] ? Date.parse(params[:date]) : Date.today
    @first_day_of_month = @date.beginning_of_month
    @last_day_of_month = @date.end_of_month
    @previous_month = @date.last_month
    @next_month = @date.next_month
    # Get the next and previous months
    @previous_month = @date.prev_month
    @next_month = @date.next_month
    # Get events for the current month
    @events = Event.where(date: @date .beginning_of_month..@date.end_of_month)
    @events ||= []
  end
  def show
    # @children = current_user.family.children
   # @guards = Guard.where(child_id: params[:child_id])
  end
end
