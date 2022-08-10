class DiscSerializer < ActiveModel::Serializer
  attributes :id, :brand, :mold, :image, :speed, :glide, :turn, :fade, :description
end
