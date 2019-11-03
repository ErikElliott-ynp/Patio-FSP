class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :sex
      t.date :date_of_birth
      t.string :email
      t.string :work
      t.string :education
      t.string :about_me
      t.string :password_digest
      t.string :session_token

      t.timestamps
    end
    add_index :users, :email
    add_index :users, :session_token
  end
end
