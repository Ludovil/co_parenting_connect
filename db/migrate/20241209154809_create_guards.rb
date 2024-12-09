class CreateGuards < ActiveRecord::Migration[7.1]
  def change
    create_table :guards do |t|
      t.references :child, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.boolean :monday
      t.boolean :tuesday
      t.boolean :wednesday
      t.boolean :thursday
      t.boolean :friday
      t.boolean :sarturday
      t.boolean :sunday

      t.timestamps
    end
  end
end
