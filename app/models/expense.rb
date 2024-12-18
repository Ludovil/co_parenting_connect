class Expense < ApplicationRecord
  belongs_to :child
  belongs_to :user
  has_many :notifications


  def category_icon
    return 'fa-receipt' if category.nil?
    case category.downcase
    when "food"
      "fa-ustensils"
    when "clothing"
      'fa-shirt'
    when "education"
      'fa-book'
    when "healthcare"
      'fa-notes-medical'
    when "entertainment"
      'fa-film'
    when "transportation"
      'fa-car'
    when "housing"
      'fa-house'
    else
      'fa-receipt'
    end
  end
end
