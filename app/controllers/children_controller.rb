class ChildrenController < ApplicationController
  before_action :authenticate_user!
  before_action :set_child, only: [:edit, :update, :destroy, :show]


  def show
  end

  def new
    @family = current_user.family
    @child = @family.children.new

  end

  def create
    if current_user.family&.family_members&.exists?(user_id: current_user.id, creator: true)
      @child = current_user.family.children.new(child_params)
      if @child.save
        redirect_to dashboard_path, notice: "Child successfully added."
      else
        render :new, alert: "Error adding child."
      end
    else
      redirect_to dashboard_path, alert: "You are not authorized to add a child to this family."
    end
  end

  def edit
    @child
  end

  def update
    if @child.update(child_params)
      redirect_to dashboard_path, notice: "Child successfully updated."
    else
      render :edit, alert: "Error updating child."
    end
  end

  def destroy
    if @child.destroy
      redirect_to dashboard_path, notice: 'Child was successfully removed.'
    else
      redirect_to dashboard_path, alert: 'Failed to remove child.'
    end
  end

  private


  def event_params
    params.require(:event).permit(:title, :start_date, :end_date, :notes, user_ids: [], child_ids: [])
  end
  
  def set_child
    @child = current_user.family.children.find(params[:id])
  end

  def child_params
    params.require(:child).permit(:first_name, :last_name, :birth_date)
  end
end
