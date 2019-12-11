class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :user, null: false
      t.integer :friend, null: false

      t.timestamps
    end
    add_index :friendships, [:user, :friend], unique: true
    add_index :friendships, [:friend, :user], unique: true
  end
end
