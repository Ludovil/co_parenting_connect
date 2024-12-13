class Expense < ApplicationRecord
  belongs_to :child
  belongs_to :user
  has_many :notifications
end
