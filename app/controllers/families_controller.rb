class FamiliesController < ApplicationController
  def new
    @family = Family.new
  end

  def create
    @family = Family.new(family_params)
    if @family.save
      @family.family_members.create(
        user_id: current_user.id,
        family: @family,
        creator: true,
        is_parent: true
      )
      redirect_to dashboard_path, notice: 'Family was successfully created.'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def show
    @family = Family.find(params[:id])
  end

  private

  def family_params
    params.require(:family).permit(:name)
  end

end
