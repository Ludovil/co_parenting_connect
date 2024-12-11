class Invitation < ApplicationRecord
  belongs_to :user
  belongs_to :family
  belongs_to :recipient, class_name: 'User', foreign_key: 'recipient_id'
attr_accessor :recipient_email
    # Enum for status
    enum status: { pending: 'pending', accepted: 'accepted', rejected: 'rejected' }

    # Validations
    validates :user_id, presence: true
    validates :family_id, presence: true
    validates :status, presence: true, inclusion: { in: statuses.keys }
end
