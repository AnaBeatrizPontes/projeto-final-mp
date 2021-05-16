class Form < ApplicationRecord
	has_many :questions, dependent: :destroy
	has_many :feedbacks, dependent: :destroy
	belongs_to :user
end
