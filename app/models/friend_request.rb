# == Schema Information
#
# Table name: friend_requests
#
#  id         :bigint           not null, primary key
#  user       :integer          not null
#  friend     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class FriendRequest < ApplicationRecord

  belongs_to :user
  belongs_to :friend, class_name: :User

  def accept
    user.friends << friend
    destroy
  end
  
end
