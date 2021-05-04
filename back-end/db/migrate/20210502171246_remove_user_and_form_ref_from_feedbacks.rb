class RemoveUserAndFormRefFromFeedbacks < ActiveRecord::Migration[6.0]
  def change
	remove_reference :feedbacks, :user
	remove_reference :feedbacks, :form
  end
end
