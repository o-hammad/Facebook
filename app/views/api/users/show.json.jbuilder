# json.user do
#   json.set! @user.id do
#     json.extract! @user, :id, :email, :first_name, :last_name, :birthday, :profile_image, :cover_photo, :gender, :created_at, :updated_at
#     json.photoUrl @user.photo.attached? ? @user.photo.url : nil
#   end
# end

# json.user do
#   json.extract! @user, :id, :email, :first_name, :last_name, :birthday, :profile_image, :cover_photo, :gender, :created_at, :updated_at
#   json.photoUrl @user.photo.attached? ? @user.photo.url : nil
# end

users = User.all

# json.users do
#   @user.friendships.each do |friend|
#     json.set! friend.id do
#       json.extract! friend, :id, :first_name, :last_name, :profile_image, :created_at, :updated_at
#     end
#   end
#   json.set! @user.id do
#     json.extract! @user, :id, :email, :first_name, :last_name, :birthday, :profile_image, :cover_photo, :gender, :created_at, :updated_at
#   end
# end

json.users do
  users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :first_name, :last_name, :profile_image, :cover_photo, :created_at, :updated_at
    end
  end
end

json.friends do
  @user.friends.each do |friendship|
    json.set! friendship.id do
      json.extract! friendship, :friender_id, :friendee_id, :created_at, :updated_at
    end
  end
end

user_posts = @user.rcvd_posts.includes(:poster, :postee)

json.posts do
  user_posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :poster_id, :postee_id, :body, :created_at, :updated_at
      json.poster post.poster
      json.postee post.postee
    end
  end
end