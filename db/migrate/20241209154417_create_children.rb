class CreateChildren < ActiveRecord::Migration[7.1]
  def change
    create_table :children do |t|
      t.references :family, null: false, foreign_key: true
      t.string :first_name
      t.string :last_name
      t.date :birth_date

      t.timestamps
    end
  end
end
