class CreateEvents < ActiveRecord::Migration[7.1]
  def change
    create_table :events do |t|
      t.references :child, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.integer :user_receiver_id
      t.text :notes
      t.boolean :status
      t.date :date

      t.timestamps
    end
  end
end
