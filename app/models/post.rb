class Post < ApplicationRecord
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :profile,
        foreign_key: :profile_id,
        class_name: :User

    has_one_attached :photo    
end
