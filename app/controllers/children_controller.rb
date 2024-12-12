class ChildrenController < ApplicationController
  before_action :authenticate_user!

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

  private

  def child_params
    params.require(:child).permit(:first_name, :last_name, :birth_date)
  end

end
