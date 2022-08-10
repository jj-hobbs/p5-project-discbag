class CreateDiscs < ActiveRecord::Migration[6.1]
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

      t.timestamps
    end
  end
end
