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

    if @children
      valid = true
      @children.each do |child|
        params_to_create = event_params
        params_to_create.delete(:child_ids)
        user_id = params_to_create.delete(:user_ids)

        @event = Event.new(params_to_create)
        @event.child = child
        @event.user = current_user
        @event.user_receiver_id = user_id[0]
        valid = @events.save
      end
      if valid
        redirect_to child_events_path(@child), notice: 'Event was successfully created.'
      else
        render :new
      end
    else
      @event = Event.new(event_params)
      @event.child = @child
      if @event.save
        redirect_to @event, notice: 'Event was successfully created.'
      else
        render :new
      end
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
    @event.destroy
    redirect_to child_events_path(@event.child), notice: 'Event was successfully deleted.'
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
