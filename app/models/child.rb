class Child < ApplicationRecord
  belongs_to :family
  has_many :events
  has_many :guards
  has_many :expenses

  def full_name
    "#{first_name} #{last_name}"
  end

end
