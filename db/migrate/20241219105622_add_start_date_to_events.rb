class AddStartDateToEvents < ActiveRecord::Migration[7.1]
  def change
    add_column :events, :start_date, :datetime
  end
end
