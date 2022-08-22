class CreateDiscs < ActiveRecord::Migration[7.0]
  def change
    create_table :discs do |t|
      t.string :brand
      t.string :mold
      t.string :image
      t.integer :speed
      t.integer :glide
      t.integer :turn
      t.integer :fade
      t.string :description
      t.integer :user_id

      t.timestamps
    end
  end
end
