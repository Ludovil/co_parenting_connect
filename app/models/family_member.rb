class FamilyMember < ApplicationRecord
  belongs_to :user
  belongs_to :family


  def full_name
    user.first_name + " " + user.last_name
  end


  attr_accessor :first_name, :last_name

end
