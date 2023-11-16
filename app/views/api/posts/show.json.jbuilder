json.post do
  json.extract! @post, :poster_id, :postee_id, :body, :created_at, :updated_at
end