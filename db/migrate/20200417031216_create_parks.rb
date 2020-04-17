class CreateParks < ActiveRecord::Migration[6.0]
  def change
    create_table :parks do |t|
      t.string :name
      t.string :description
      t.string :activities
      t.string :directions
      t.string :images
      t.timestamps
    end
  end
end
