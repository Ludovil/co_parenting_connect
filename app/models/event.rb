class Event < ApplicationRecord
  belongs_to :child
  belongs_to :user
  belongs_to :receiver, class_name: 'User', foreign_key: 'user_receiver_id'
  has_many :notifications
end
