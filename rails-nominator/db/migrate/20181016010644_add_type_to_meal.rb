class AddTypeToMeal < ActiveRecord::Migration[5.1]
  def change
    add_column :meals, :type, :string
  end
end
