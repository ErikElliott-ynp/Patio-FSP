json.extract! user, :id, :first_name, :last_name, :sex, :date_of_birth, :email
json.profilePicture url_for(user.profile_picture) if user.profile_picture.attached?