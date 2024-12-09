class CreateExpenses < ActiveRecord::Migration[7.1]
  def change
    create_table :expenses do |t|
      t.references :child, null: false, foreign_key: true

      t.timestamps
    end
  end
end
