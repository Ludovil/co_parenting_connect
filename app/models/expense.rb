class Expense < ApplicationRecord
  belongs_to :child
  has_many :notifications
end
