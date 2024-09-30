Rails.application.routes.draw do
  namespace :api do
    resources :articles
    resources :users
    post 'users/login', to: 'authentication#login'
  end
end
