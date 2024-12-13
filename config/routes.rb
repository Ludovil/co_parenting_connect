Rails.application.routes.draw do

  patch 'invitations/:id/accept', to: 'invitations#accept', as: 'accept_invitation'
  patch 'invitations/:id/reject', to: 'invitations#reject', as: 'reject_invitation'


  # get 'expenses/new'

  get 'dashboard/show'


  devise_for :users
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"

  # dashboard
  resource :dashboard, only: [:show]


  # Families
  resources :families, only: [:create, :new, :show, :edit, :update] do
    resources :children, only: [:new, :create] do

    end

    resources :family_members, only: [:new, :create]
  end

  # Children
  resources :children, only: [:show, :edit, :update, :destroy] do
    resources :events, only: [:new, :create, :index]
    resources :guards, only: [:new, :create, :index]
    resources :expenses, only: [:new, :create, :index] do
      collection do
        delete :pay
      end
    end
  end

  # Events
  resources :events, only: [:show, :edit, :update, :destroy]

  # Guards
  resources :guards, only: [:show, :edit, :update, :destroy]

  # Expenses
  resources :expenses, only: [:show, :edit, :update, :destroy]

  # Notifications
  resources :notifications, only: [:index]

  # Invitations
  resources :invitations, only: [:create] do
    member do
      delete :cancel
    end
  end


  # other routes

 get 'calendar', to: 'calendar#index'
 get 'calendar/:date', to: 'calendar#index', as: 'calendar_date'
 get 'calendar/:year/:month/:day', to: 'calendar#show_day', as: 'calendar_day'


end
