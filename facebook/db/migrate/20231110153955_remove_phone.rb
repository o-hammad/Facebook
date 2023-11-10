class RemovePhone < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :phone_num, :string
  end
end
