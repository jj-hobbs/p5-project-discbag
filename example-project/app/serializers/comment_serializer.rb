class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :commented_disc_id, :commenter_id

  belongs_to :commented_disc

  def disc
    self.object.commented_disc
  end
end
