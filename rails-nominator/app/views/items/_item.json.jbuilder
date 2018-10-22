json.extract! item, :id, :name, :pantry_id, :fridge_id, :meal_id, :expiration, :created_at, :updated_at
json.url item_url(item, format: :json)
