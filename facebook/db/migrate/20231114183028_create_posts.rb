class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.references :poster, foreign_key: {to_table: :users}, null: false
      t.references :postee, foreign_key: {to_table: :users}, null: false
      t.text :body, null: false
      t.timestamps
    end
  end
end
