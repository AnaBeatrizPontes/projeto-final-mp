class AddFormRefToQuestions < ActiveRecord::Migration[6.0]
  def change
	    add_reference :questions, :forms, foreign_key: true
      
  end
end
