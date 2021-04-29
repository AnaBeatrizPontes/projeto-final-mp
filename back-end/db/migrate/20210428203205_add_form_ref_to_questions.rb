class AddFormRefToQuestions < ActiveRecord::Migration[6.0]
  def change
	    add_reference :questions, :form, foreign_key: true
  end
end
