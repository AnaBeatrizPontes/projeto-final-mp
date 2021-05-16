class AddFormRefToAnswer < ActiveRecord::Migration[6.0]
  def change
		add_reference :answers, :form, foreign_key: true
  end
end
