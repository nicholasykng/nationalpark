class CommentSerializer
  include FastJsonapi::ObjectSerializer
  belongs_to :park
  attributes :id, :content, :commenter, :park_id
end
