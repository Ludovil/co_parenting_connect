class AddIsParentToInvitations < ActiveRecord::Migration[7.1]
  def change
    add_column :invitations, :is_parent, :boolean
  end
end
