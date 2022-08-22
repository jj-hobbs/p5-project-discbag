class Comment < ApplicationRecord
    belongs_to :commented_disc, foreign_key: :commented_disc_id, class_name: "Disc"
    belongs_to :commenter, foreign_key: :commenter_id, class_name: "User"

    validates :content, presence: true
end
