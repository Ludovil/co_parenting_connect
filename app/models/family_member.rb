class FamilyMember < ApplicationRecord
  belongs_to :user
  belongs_to :family

  def full_name
    user.first_name + " " + user.last_name
  end
end
