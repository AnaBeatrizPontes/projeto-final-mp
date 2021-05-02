class RemoveUserRefFromForm < ActiveRecord::Migration[6.0]
  def change
		remove_reference :forms, :users
  end
end
