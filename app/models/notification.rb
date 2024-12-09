class Notification < ApplicationRecord
  belongs_to :event, optional: true
  belongs_to :guard, optional: true
  belongs_to :expense, optional: true
end
