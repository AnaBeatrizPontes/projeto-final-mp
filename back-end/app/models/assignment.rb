class Assignment < ApplicationRecord
  belongs_to :user
  belongs_to :form
	has_many :forms
end
