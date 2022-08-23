class Disc < ApplicationRecord
    belongs_to :user
    has_many :comments, foreign_key: :commented_disc_id
    has_many :commenters, through: :comments
    has_many :bags, foreign_key: :bag_disc_id
    has_many :bag_users, through: :bags

    validates :brand, presence: true
    validates :mold, presence: true
    validates :speed, numericality: { in: 1..15 }
    validates :glide, numericality: { in: 1..6 }
    validates :turn, numericality: { in: -5..1 }
    validates :fade, numericality: { in: 0..5 }
end
