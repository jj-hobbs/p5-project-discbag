class DiscSerializer < ActiveModel::Serializer
  attributes :id, :brand, :mold, :image, :speed, :glide, :turn, :fade, :description, :user_id, :comments, :disc_user

  has_many :comments
  has_many :bags
  belongs_to :user

  def comments
    self.object.comments
  end

  def disc_user
    self.object.user
  end
end
