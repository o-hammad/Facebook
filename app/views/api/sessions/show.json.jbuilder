json.user do
  json.extract! @user, :id, :email, :first_name, :last_name, :birthday, :gender, :profile_image, :created_at, :updated_at
end