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
  end

  def create
    @child.guards.destroy_all
    @guard = @child.guards.new(guard_params)
    if @guard.save
      redirect_to child_guards_path(@child), notice: 'Guard was successfully created.'
    else
      render :new, status: :unprocessable_entity
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
