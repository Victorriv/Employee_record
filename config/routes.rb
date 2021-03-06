Rails.application.routes.draw do
  
  resources :employees
  resources :users


  #log in and log out routes
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get "/me", to: "users#show"
  get "/employee/organize", to: "employees#organize"
  get "/employee/list", to: "employees#list"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
