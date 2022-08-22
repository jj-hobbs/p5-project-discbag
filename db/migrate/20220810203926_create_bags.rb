class CreateBags < ActiveRecord::Migration[7.0]
  def change
    create_table :bags do |t|
      t.boolean :like
      t.references :bag_user, foreign_key: { to_table: "users"}
      t.references :bag_disc, foreign_key: { to_table: "discs"}

      t.timestamps
    end
  end
end
