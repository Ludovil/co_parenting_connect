class CreateEventAssignees < ActiveRecord::Migration[7.1]
  def change
    create_table :event_assignees do |t|
      t.bigint :event_id
      t.bigint :user_id

      t.timestamps
    end
  end
end
