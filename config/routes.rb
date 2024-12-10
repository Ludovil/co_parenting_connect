Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"

  # Families
  resources :families, only: [:show, :edit, :update] do
    resources :children, only: [:new, :create]
  end

  # Children
  resources :children, only: [:show, :edit, :update, :destroy] do
    resources :events, only: [:new, :create, :index]
    resources :guards, only: [:new, :create, :index]
    resources :expenses, only: [:new, :create, :index]
  end

  # Events
  resources :events, only: [:show, :edit, :update, :destroy]

  # Guards
  resources :guards, only: [:show, :edit, :update, :destroy]

  # Expenses
  resources :expenses, only: [:show, :edit, :update, :destroy]


  # Notifications
  resources :notifications, only: [:index]

  # Family members
  resources :family_members, only: [:new, :create]


  # Custom Routes
  get 'dashboard', to: 'users#dashboard'


end
