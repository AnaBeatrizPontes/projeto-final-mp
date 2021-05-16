Rails.application.routes.draw do
  resources :answers
  resources :users,  params: :_user
  post '/auth/login', to: 'authentication#login'
#   get '/*a', to: 'application#not_found'
  resources :forms
  get '/forms-per-user/:user_id', to: 'forms#form_per_user'
  resources :questions
  resources :feedbacks
  get '/feedback-per-user-and-form/:user_id/:form_id', to: 'feedbacks#feedback_per_form_and_user'
  get '/feedbacks-per-form', to: 'feedbacks#feedbacks_per_form'
	resources :assignments
	get '/form-assign-to-user/:user_id', to: 'assignments#assignment_per_user'
end
