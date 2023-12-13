# json.set! @friend.id do
#     json.extract! @friend, :id, :email, :first_name, :last_name, :birthday, :profile_image, :cover_photo, :gender, :created_at, :updated_at
# end

json.friends do
    json.set! @friendship.id do
        json.extract! @friendship, :id, :friender_id, :friendee_id, :created_at, :updated_at
    end
    json.set! @friendship_backwards.id do
        json.extract! @friendship_backwards, :id, :friender_id, :friendee_id, :created_at, :updated_at
    end
end