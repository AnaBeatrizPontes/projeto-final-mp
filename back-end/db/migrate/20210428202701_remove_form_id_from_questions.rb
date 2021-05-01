class RemoveFormIdFromQuestions < ActiveRecord::Migration[6.0]
  def change
	remove_column :questions, :form_id_id
  end
end
