class Form < ApplicationRecord
	has_many :questions, dependent: :destroy
	belongs_to :user
end
