class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_one :family_member, dependent: :destroy
  has_one :family, through: :family_member
  has_many :events, dependent: :destroy
  has_many :guards, dependent: :destroy
 # has_many :messages, dependent: :destroy
  has_many :invitations, dependent: :destroy
  has_many :documents, dependent: :destroy
  has_many :expenses, dependent: :destroy

end
