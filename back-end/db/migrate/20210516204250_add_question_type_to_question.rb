class AddQuestionTypeToQuestion < ActiveRecord::Migration[6.0]
  def change
		add_column :questions, :type, :string
  end
end
