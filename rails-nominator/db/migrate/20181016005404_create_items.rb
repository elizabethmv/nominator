class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :pantry_id
      t.integer :fridge_id
      t.integer :meal_id
      t.datetime :expiration

      t.timestamps
    end
  end
end
