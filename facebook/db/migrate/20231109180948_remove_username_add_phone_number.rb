class RemoveUsernameAddPhoneNumber < ActiveRecord::Migration[7.0]
  def change
      remove_column :users, :username
      add_column :users, :phone, :string
      add_index :users, :phone, unique: true 
  end
end
