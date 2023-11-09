class RenamePhone < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :phone, :phone_num
  end
end
