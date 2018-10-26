class Item < ApplicationRecord
  belongs_to :fridge, optional: true
  belongs_to :pantry, optional: true
  belongs_to :meal, optional: true
end
