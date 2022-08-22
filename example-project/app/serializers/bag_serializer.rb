class BagSerializer < ActiveModel::Serializer
  attributes :id, :like, :bag_user_id, :bag_disc_id, :disc, :comments, :bag_user

  belongs_to :bag_disc
  belongs_to :bag_user
  has_many :comments, through: :bag_disc

  def disc
     self.object.bag_disc
  end

  def comments 
    self.object.bag_disc.comments
  end

  def bag_user
    self.object.bag_user
  end
end
