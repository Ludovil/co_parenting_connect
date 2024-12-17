class EventsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_event, only: [:show, :edit, :update, :destroy]
  before_action :set_child, only: [:new, :create, :index]

  @children = Child.all
  @users = User.all

  def index
    @events = Event.all
    render json: @events
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
    if params[:child_id].present?
      @child = Child.find(params[:child_id])

    else
      @child = Child.find(params["event[child_ids][]"])
    end
  end

  def event_params
    params.permit(
      "event[title]",
      "event[notes]",
      "event[start_date]",
      "event[end_date]",
      "event[child_ids][]",
      "event[user_ids][]",
      "event[date]",
      "event[status]"
    )
  end
end
