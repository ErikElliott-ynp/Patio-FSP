class Comment < ApplicationRecord
    validates :body, :author_id, :post_id, presence: true

    belongs_to :post

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    has_many :likes, as: :likeable, dependent: :destroy

end
