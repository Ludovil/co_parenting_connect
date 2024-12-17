class EventsController < ApplicationController
  before_action :set_event, only: [:show, :edit, :update, :destroy]
  before_action :set_child, only: [:new, :create, :index]

  @children = Child.all
  @users = User.all

  def index
    @events = @child.events
  end

  def show
    @event
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)
    @event.user_id = current_user.id

    if @event.save
      redirect_to events_path, notice: "Event created successfully."
    else
      render :new, :unprocessable_entity
    end
  end

  def edit
    @event
  end

  def update
    if @event.update(event_params)
      redirect_to event_path(@event), notice: 'Event was successfully updated.'
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @event.destroy
    redirect_to child_events_path(@event.child), notice: 'Event was successfully deleted.'
  end

  private

  def set_event
    @event = Event.find(params[:id])
  end

  def set_child
    @child = Child.find(params[:child_id])
  end

  def event_params
    params.require(:event).permit(:notes, :status, :date, :user_receiver_id)
  end
end
