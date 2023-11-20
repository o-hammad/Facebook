class User < ApplicationRecord
  has_secure_password

  validates :email, 
    uniqueness: true, 
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true
  validates :gender, inclusion: { in: ["M", "F"]}

  before_validation :ensure_session_token

  has_one_attached :photo

  has_many :sent_posts,
    primary_key: :id,
    foreign_key: :poster_id,
    class_name: :Post,
    inverse_of: :poster, 
    dependent: :destroy

  has_many :rcvd_posts,
    primary_key: :id,
    foreign_key: :postee_id,
    class_name: :Post,
    inverse_of: :postee,
    dependent: :destroy

  def friends
    friend_ids = Friend.where(friender_id: self.id).pluck(:friendee_id)

    friendships = []

    friend_ids.each do |friend_id|
      friend = User.find_by(id: friend_id);
      friendships.push(friend)  
    end

    friendships
  end


  def self.find_by_credentials(credential, password)
    field = credential =~ URI::MailTo::EMAIL_REGEXP ? :email : :email
    user = User.find_by(field => credential)
    user&.authenticate(password)
  end

  def reset_session_token!
    self.update!(session_token: generate_unique_session_token)
    self.session_token
  end

  private

  def generate_unique_session_token
    loop do
      token = SecureRandom.base64
      break token unless User.exists?(session_token: token)
    end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
end
