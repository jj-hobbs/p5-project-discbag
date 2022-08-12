class User < ApplicationRecord
    has_many :bags
    has_many :discs, through: :bags
end
