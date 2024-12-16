class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_one :family_member
  has_one :family, through: :family_member
  has_and_belongs_to_many :events
  has_many :guards
  has_many :messages
  has_many :invitations
  has_many :expenses
end
