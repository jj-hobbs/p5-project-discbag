class User < ApplicationRecord
    has_many :discs, dependent: :destroy
    has_many :comments, foreign_key: :commenter_id, dependent: :destroy
    has_many :commented_discs, through: :comments
    has_many :bags, foreign_key: :bag_user_id, dependent: :destroy
    has_many :bag_discs, through: :bags
    
    
    has_secure_password

    validates :name, presence: true
    validates :email, presence: true
    validates :email, uniqueness: true
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :password, presence: true
    validates :password, length: { minimum: 6 }
end
