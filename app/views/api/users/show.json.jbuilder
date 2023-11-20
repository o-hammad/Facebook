json.user do
  json.set! @user.id do
    json.extract! @user, :id, :email, :first_name, :last_name, :birthday, :profile_image, :cover_photo, :gender, :created_at, :updated_at
    json.photoUrl @user.photo.attached? ? @user.photo.url : nil
  end
end

json.friends do
  @user.friends.each do |friend|
    json.set! friend.id do
      json.extract! friend, :id, :email, :first_name, :last_name, :profile_image, :birthday, :gender, :created_at, :updated_at
    end
  end
end

user_posts = @user.rcvd_posts.includes(:poster, :postee)
# user_post_ids = @user.rcvd_posts.order('created_at DESC').pluck(:id)

json.posts do
  user_posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :poster_id, :postee_id, :body, :created_at, :updated_at
      json.poster post.poster
      json.postee post.postee
    end
  end
  # json.post_ids user_post_ids
end