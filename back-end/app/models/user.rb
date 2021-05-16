class User < ApplicationRecord
  has_secure_password
	has_many :forms, dependent: :destroy
	has_many :feedbacks, dependent: :destroy
	has_many :assignments, dependent: :destroy
    validates :email, presence: true, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password,
              length: { minimum: 8,
                message: "Insira uma senha com mais de 8 caracteres" },
              if: -> { new_record? || !password.nil? }
end
