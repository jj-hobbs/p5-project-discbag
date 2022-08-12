class Bag < ApplicationRecord
    belongs_to :user
    belongs_to :disc
    has_many :discs
end
