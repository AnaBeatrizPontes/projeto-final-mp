class CreateForms < ActiveRecord::Migration[6.0]
  def change
    create_table :forms do |t|
      t.string :title
      t.text :description
      t.string :link

      t.timestamps
    end
  end
end
