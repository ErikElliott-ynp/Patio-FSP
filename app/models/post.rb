class Post < ApplicationRecord

    validate :ensure_photo_or_body

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :profile,
        foreign_key: :profile_id,
        class_name: :User

    has_many :comments

    has_one_attached :photo

    has_many :likes, as: :likeable

    def ensure_photo_or_body
        unless self.photo.attached? || self.body.length > 0
            errors[:post] << "Please Add a Photo or a Status"
        end
    end


end
