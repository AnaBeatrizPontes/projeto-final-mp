class AddColumnsToQuestions < ActiveRecord::Migration[6.0]
  def change
		add_column :questions, :option_one, :string
		add_column :questions, :option_two, :string
		add_column :questions, :option_three, :string
		add_column :questions, :option_four, :string
  end
end
