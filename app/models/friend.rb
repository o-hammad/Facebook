class Friend < ApplicationRecord
    validates :friender_id, uniqueness: { scope: :friendee_id, message: "already friends" }
    validates :friendee_id, uniqueness: { scope: :friender_id, message: "already friends" }

    
end