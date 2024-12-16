class Child < ApplicationRecord
  belongs_to :family
  has_many :events, dependent: :destroy
  has_many :guards, dependent: :destroy
  has_many :expenses, dependent: :destroy
end
