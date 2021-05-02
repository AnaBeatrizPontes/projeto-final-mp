class AddUserAndQuestionRefToAnswer < ActiveRecord::Migration[6.0]
  def change
		add_reference :answers, :user, foreign_key: true
		add_reference :answers, :question, foreign_key: true
  end
end
