# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  poster_id  :bigint           not null
#  postee_id  :bigint           not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord
    belongs_to :poster,
        primary_key: :id,
        foreign_key: :poster_id,
        class_name: :User,
        inverse_of: :sent_posts

    belongs_to :postee,
        primary_key: :id,
        foreign_key: :postee_id,
        class_name: :User,
        inverse_of: :rcvd_posts
end
