class Family < ApplicationRecord
  has_many :children, dependent: :destroy
  has_many :events, through: :children
  has_many :family_members
  has_many :users, through: :family_members
end
