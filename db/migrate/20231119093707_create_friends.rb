class CreateFriends < ActiveRecord::Migration[7.0]
  def change
    create_table :friends do |t|
      t.references :friender, foreign_key: {to_table: :users}, null: false
      t.references :friendee, foreign_key: {to_table: :users}, null: false
      t.index [:friender_id, :friendee_id], unique: true
      t.timestamps
    end
  end
end
