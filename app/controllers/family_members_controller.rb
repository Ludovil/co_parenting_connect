class FamilyMembersController < ApplicationController

  def index
    @family_members = FamilyMember.all
    render json: { family_members: @family_members }
  end

  def new
    @event = Event.new
    @family_members = FamilyMember.all
  end

  def create
    @family = Family.find(params[:family_id])
    @family_member = FamilyMember.new(family_member_params)
    @family_member.family_id = params[:family_id]

    if @family_member.save
      redirect_to family_path(@family_member.family), notice: 'Family member was successfully added.'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def show
    @family_member = family_member.find(params[:id])
  end

  def destroy
    @family_member = FamilyMember.find(params[:id])
    @family_member.destroy
    redirect_to family_family_members_path, status: :see_other
  end

  private

  def family_member_params
    params.require(:family_member).permit(:user_id, :family_id, :creator, :is_parent)
  end
end
