class Comment < ApplicationRecord
    belongs_to :park
    validates :content, presence: true
    validates :commenter, presence: true
    validates :park_id, presence: true
end
