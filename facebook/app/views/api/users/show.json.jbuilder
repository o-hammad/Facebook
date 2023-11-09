json.user do
  json.extract! @user, :id, :email, :phone_num, :created_at, :updated_at
end