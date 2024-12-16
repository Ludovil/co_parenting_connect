class FamilyMember < ApplicationRecord
  belongs_to :user
  belongs_to :family


  attr_accessor :first_name, :last_name
end
