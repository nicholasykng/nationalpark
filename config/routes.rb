Rails.application.routes.draw do
  resources :parks do
    resources :comments
  end
end
