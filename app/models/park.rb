class Park < ApplicationRecord
    has_many :comments
    validates :name, presence: true
    validates :description, presence: true
    validates :activities, presence: true
    validates :directions, presence: true
    validtes :images, presence: true
end
