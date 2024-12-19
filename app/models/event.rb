class Event < ApplicationRecord
  belongs_to :child
  belongs_to :user
  belongs_to :receiver, class_name: 'User', foreign_key: 'user_receiver_id'
  has_many :notifications

  def start_time
    "#{start_date.strftime('%I:%M %p')} - #{end_date.strftime('%I:%M %p')}"
  end
  def multi_days?
    (end_date - start_date).to_i >= 1
  end
end

