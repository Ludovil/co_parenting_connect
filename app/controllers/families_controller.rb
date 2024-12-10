class FamiliesController < ApplicationController
  def new
    @family = Family.new
  end

  def create
    @family_member = FamilyMember.find(params[:user_id])
    @family = @family_member.families.new
    @family.user = current_user

    if @family.save
      redirect_to @family, notice: 'Family was successfully created.'
    else
      render :new, status: :unprocessable_entity
    end
  end

end
