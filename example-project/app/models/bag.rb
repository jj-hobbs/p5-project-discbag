class Bag < ApplicationRecord
    belongs_to :bag_user, foreign_key: :bag_user_id, class_name: "User"
    belongs_to :bag_disc, foreign_key: :bag_disc_id, class_name: "Disc"
end
