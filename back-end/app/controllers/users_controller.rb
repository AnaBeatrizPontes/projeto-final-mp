class UsersController < ApplicationController
    # before_action :authorize_request, except: %i[create update]
    before_action :find_user, except: %i[create index]
  
    # GET /users
    def index
      @users = User.all
      render json: @users, status: :ok
    end
  
    # GET /users/{username}
    def show
      render json: @user, status: :ok
    end
  
    # POST /users
    def create
      @user = User.new(user_params)
      if @user.save
        render json: @user, status: :created
      else
        render json: { errors: @user.errors.full_messages },
               status: :unprocessable_entity
      end
    end
  
    # PUT /users/{username}
    def update
      if @user.update(user_params)
        render json: @user, status: 200
      else
        render json: { errors: @user.errors.full_messages },
               status: :unprocessable_entity
      end
    end
  
    # DELETE /users/{username}
    def destroy
      @user.destroy
    end
  
    private
  
    def find_user
        @user = User.find(params[:id])
        rescue ActiveRecord::RecordNotFound
            render json: { errors: 'User not found' }, status: :not_found
    end
  
    def user_params
      params.permit(
        :name, :email, :password, :password_confirmation, :admin, :creator, :answerer
      )
    end
end
