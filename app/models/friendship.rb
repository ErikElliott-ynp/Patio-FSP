# == Schema Information
#
# Table name: friendships
#
#  id         :bigint           not null, primary key
#  user       :integer          not null
#  friend     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Friendship < ApplicationRecord

    after_create :create_inverse_relationship
    after_destroy :destroy_inverse_relationship

    belongs_to :user
    belongs_to :friend, class_name: :User

    private

    def create_inverse_relationship
        friend.friendships.create(friend: user)
    end

    def destroy_inverse_relationship
        friendship = friend.friendships.find_by(friend: user)
        friendship.destroy if friendship
    end
    
end
