class AddIsParentToFamilyMembers < ActiveRecord::Migration[7.1]
  def change
    add_column :family_members, :is_parent, :boolean
  end
end
