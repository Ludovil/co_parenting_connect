class RenameSarturdayToSaturdayInGuards < ActiveRecord::Migration[7.1]
  def change
    rename_column :guards, :sarturday, :saturday
  end
end
