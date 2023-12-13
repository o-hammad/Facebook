class Friend < ApplicationRecord
    validates :friender_id, uniqueness: { scope: :friendee_id, message: "already friends" }
    validates :friendee_id, uniqueness: { scope: :friender_id, message: "already friends" }

    belongs_to :friender,
        primary_key: :id,
        foreign_key: :friendee_id,
        class_name: :User
end