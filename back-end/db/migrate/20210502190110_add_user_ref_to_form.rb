class AddUserRefToForm < ActiveRecord::Migration[6.0]
  def change
		add_reference :forms, :user, foreign_key: true
  end
end
