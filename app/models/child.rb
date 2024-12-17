class Child < ApplicationRecord
  belongs_to :family

  def full_name
    "#{first_name} #{last_name}"
  end


  has_many :events, dependent: :destroy
  has_many :guards, dependent: :destroy
  has_many :expenses, dependent: :destroy

end
