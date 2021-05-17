class ChangeColunmName < ActiveRecord::Migration[6.0]
  def change
		rename_column :questions, :type, :ques_type
  end
end
