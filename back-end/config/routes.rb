Rails.application.routes.draw do
  resources :answers
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, param: :_name
  post '/auth/login', to: 'authentication#login'
#   get '/*a', to: 'application#not_found'
  resources :forms
  get '/forms-per-user/:user_id', to: 'forms#form_per_user'
  resources :questions
  resources :feedbacks
	get '/feedback-per-user-and-form', to: 'feedbacks#feedback_per_form_and_user'
	get '/feedbacks-per-form', to: 'feedbacks#feedbacks_per_form'
end
