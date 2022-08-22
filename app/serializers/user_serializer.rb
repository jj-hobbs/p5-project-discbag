class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username, :password_digest

  has_many :comments
  has_many :discs
  has_many :bags
  has_many :bag_discs, through: :bags
end
