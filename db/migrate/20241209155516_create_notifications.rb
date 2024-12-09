class CreateNotifications < ActiveRecord::Migration[7.1]
  def change
    create_table :notifications do |t|
      t.boolean :read
      t.references :event, null: true, foreign_key: true
      t.references :guard, null: true, foreign_key: true
      t.references :expense, null: true, foreign_key: true

      t.timestamps
    end
  end
end
