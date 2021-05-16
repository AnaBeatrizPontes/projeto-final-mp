class Form < ApplicationRecord
	has_many :questions, dependent: :destroy
	has_many :feedbacks, dependent: :destroy
	has_many :answers, dependent: :destroy
	has_many :assignments, dependent: :destroy
	belongs_to :user
end
