class AddUserRefToForms < ActiveRecord::Migration[6.0]
  def change
	add_reference :forms, :users, foreign_key: true
  end
end
