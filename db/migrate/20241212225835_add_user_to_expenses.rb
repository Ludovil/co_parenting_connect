class AddUserToExpenses < ActiveRecord::Migration[7.1]
  def change
    add_reference :expenses, :user, foreign_key: true
  end
end
