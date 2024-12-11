class ChildrenController < ApplicationController
  before_action :set_child, only: [:show, :edit, :update, :destroy]
  before_action :set_family, only: [:new, :create]

  def show
    @child
  end

  def new
    @family = Family.find(params[:family_id])
    @child = @family.children.build
  end

  def create
    @child = @family.children.build(child_params)

    if @child.save
      redirect_to family_path(@family), notice: 'Child was successfully created.'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @child
  end

  def update
    if @child.update(child_params)
      redirect_to child_path(@child), notice: 'Child was successfully updated.'
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    family = @child.family
    @child.destroy
    redirect_to family_path(family), notice: 'Child was successfully deleted.'
  end

  private

  def child_params
    params.require(:child).permit(:first_name, :last_name, :birth_date)
  end

  def set_child
    @child = Child.find(params[:id])
  end

  def set_family
    @family = Family.find(params[:family_id])
  end
end
