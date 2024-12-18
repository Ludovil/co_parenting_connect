class GuardsController < ApplicationController
  before_action :set_child
  before_action :set_guard, only: [:edit, :update, :destroy]

  def index
    @children = current_user.family.children
    @guards = @child.guards
    @selected_days = []
    @guards.each do |guard|
      @selected_days << guard.attributes.select { |key, value| value == true }.keys
    end
    @selected_days_upcased = @selected_days.flatten.map(&:capitalize)
  end

  def new
    @guard = @child.guards.new

    # display only available days //  @taken_days
    @children = current_user.family ? current_user.family.children : []
      @children.each do |child|
      @guards = child.guards
      @selected_days = []
      @days_and_guards = []
       @guards.each do |guard|
        next if guard.user == current_user

        active_days = guard.attributes.select { |key, value| value == true }.keys
        @days_and_guards << { days: active_days, user: guard.user.first_name }
      end
     end
    @taken_days = @days_and_guards.flat_map { |entry| entry[:days] }

  end

  def create

    if current_user.family_member.is_parent
    # cancel the previous guard pattern for current user
    @child.guards.where(user_id: current_user.id).destroy_all

    @guard = @child.guards.new(guard_params)

    if @guard.save
      redirect_to child_guards_path(@child), notice: 'Guard was successfully created.'
    else
      render :new, status: :unprocessable_entity
    end
    else
    redirect_to child_guards_path(@child), alert: 'You are not authorized to create a guard for this child.'
    end
  end

  def edit
  end

  def update
    if @guard.update(guard_params)
      redirect_to child_guards_path(@child), notice: 'Guard was successfully updated.'
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @guard.destroy
    redirect_to child_guards_path(@child), notice: 'Guard was successfully deleted.'
  end

  private

  def set_child
    @child = Child.find(params[:child_id])
  end

  def set_guard
    @guard = @child.guards.find(params[:id])
  end

  def guard_params
    params.require(:guard).permit(:monday, :tuesday, :wednesday, :thursday, :friday, :saturday, :sunday, :child_id, :user_id)
  end
end
