class RemoveTypeToMeal < ActiveRecord::Migration[5.1]
  def change
    add_column :meals, :type_meal, :string
  end
end
