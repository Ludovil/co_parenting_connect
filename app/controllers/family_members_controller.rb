class FamilyMembersController < ApplicationController

  def new
    @familymember = FamilyMember.new
  end

  def create
    @familymember = FamilyMember.new(familymember_params)
    @familymember.user = current_user

    if @familymember.save
      redirect_to @familymember, notice: 'Family member was successfully added.'
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def family_member_params
    params.require(:family_member).permit(:user_id, :family_id, :creator)
  end
end
