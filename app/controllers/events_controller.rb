class EventsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_event, only: [:show, :edit, :update, :destroy]
  before_action :set_family


  def index
    @events = Event.all
    @child = Child.find(params[:child_id])
  end

  def show
    @child = Child.find(params[:child_id])
    @event
  end

  def new
    @event = Event.new
    @users = @family.family_members.map(&:user)
    @children = @family.children
  end



  def create
  if params[:event][:child_ids].present?
    valid = true
    child_ids = params[:event][:child_ids]
    child_ids.each do |child_id|
      # Create an event for each child
      event = Event.new(event_params.except(:child_ids, :user_ids)) # Remove non-attribute params
      event.child_id = child_id
      event.user = current_user # Assuming the event belongs to the current user
      event.user_receiver_id = params[:event][:user_ids].first # Assign the first receiver for simplicity

      valid &&= event.save
    end

    if valid
      redirect_to events_path, notice: 'Events were successfully created.'
    else
      flash.now[:alert] = 'Error creating one or more events.'
      render :new
    end
  else
    flash.now[:alert] = 'Please select at least one child.'
    render :new
  end
end



  def edit
    @event
    @children = Child.all
    @users = User.all
  end

  def update
    if @event.update(event_params)
      redirect_to event_path(@event), notice: 'Event was successfully updated.'
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @child = Child.find(params[:child_id])
    @event = @child.events.find(params[:id])
    @event.destroy
    redirect_to child_events_path(@child), notice: 'Event was successfully deleted.'
  end

  private

  def set_event
    @event = Event.find(params[:id])
  end


  def set_family
    @family = current_user.family_member.family
  end

  def event_params
      params.require(:event).permit(:status, :user_receiver_id, :title, :notes, :status, :start_date, :end_date, child_ids: [], user_ids: [])
  end
end
