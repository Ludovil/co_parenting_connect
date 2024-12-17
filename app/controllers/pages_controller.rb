class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: :home
  def home
    @event = Event.new
    @family_members = FamilyMember.all 
  end
end
