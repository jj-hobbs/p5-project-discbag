# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_08_16_184528) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bags", force: :cascade do |t|
    t.boolean "like"
    t.bigint "bag_user_id"
    t.bigint "bag_disc_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bag_disc_id"], name: "index_bags_on_bag_disc_id"
    t.index ["bag_user_id"], name: "index_bags_on_bag_user_id"
  end

  create_table "comments", force: :cascade do |t|
    t.text "content"
    t.bigint "commented_disc_id"
    t.bigint "commenter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["commented_disc_id"], name: "index_comments_on_commented_disc_id"
    t.index ["commenter_id"], name: "index_comments_on_commenter_id"
  end

  create_table "discs", force: :cascade do |t|
    t.string "brand"
    t.string "mold"
    t.string "image"
    t.integer "speed"
    t.integer "glide"
    t.integer "turn"
    t.integer "fade"
    t.string "description"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "bags", "discs", column: "bag_disc_id"
  add_foreign_key "bags", "users", column: "bag_user_id"
  add_foreign_key "comments", "discs", column: "commented_disc_id"
  add_foreign_key "comments", "users", column: "commenter_id"
end
