class Family < ApplicationRecord
  has_many :children, dependent: :destroy
  has_many :family_members
  has_many :users, through: :family_members
  has_many :invitations, dependent: :destroy
end
