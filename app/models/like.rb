class Like < ApplicationRecord
    validates :user_id, presence: true

    belongs_to :likeable, polymorphic: true

    belongs_to :user
end
