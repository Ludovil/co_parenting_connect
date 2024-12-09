class AddDetailsToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :is_parent, :boolean
    add_column :users, :phone_number, :string
    add_column :users, :avatar, :string
  end
end
