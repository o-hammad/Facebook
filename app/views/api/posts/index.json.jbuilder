posts = @user.sent_posts.includes(:poster, :postee) + @user.rcvd_posts.includes(:poster, :postee)

posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :poster_id, :postee_id, :body, :created_at, :updated_at
    json.poster post.poster
    json.postee post.postee
  end
end
