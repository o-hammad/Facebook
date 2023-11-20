json.set! @friend.id do
    json.extract! @friend, :id, :email, :first_name, :last_name, :birthday, :profile_image, :cover_photo, :gender, :created_at, :updated_at
end