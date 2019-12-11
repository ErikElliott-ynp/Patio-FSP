# == Schema Information
#
# Table name: friend_requests
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class FriendRequest < ApplicationRecord

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :friend,
    foreign_key: :friend_id,  
    class_name: :User

  def accept
    user.friends << friend
    destroy
  end
  
end
