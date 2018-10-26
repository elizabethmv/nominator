Rails.application.routes.draw do
  resources :items
  resources :meals
  resources :pantries
  resources :fridges
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
