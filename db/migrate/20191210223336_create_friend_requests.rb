class CreateFriendRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :friend_requests do |t|
      t.integer :user, null: false
      t.integer :friend, null: false

      t.timestamps
    end
    add_index :friend_requests, [:user, :friend], unique: true
    add_index :friend_requests, [:friend, :user], unique: true
  end
end
