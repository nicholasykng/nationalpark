class ParkSerializer
  include FastJsonapi::ObjectSerializer
  has_many :comments
  attributes :id, :name, :description, :activities, :directions, :images
end
