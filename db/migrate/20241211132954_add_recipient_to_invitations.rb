class AddRecipientToInvitations < ActiveRecord::Migration[7.1]
  def change
    add_column :invitations, :recipient_id, :integer
  end
end
