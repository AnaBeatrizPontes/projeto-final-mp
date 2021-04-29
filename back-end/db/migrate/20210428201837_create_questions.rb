class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.text :description
      t.references :form

      t.timestamps
    end
  end
end
