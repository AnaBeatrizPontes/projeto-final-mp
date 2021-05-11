class FeedbacksController < ApplicationController
	before_action :set_feedback, only: [:show, :update, :destroy]

	def index
    	@feedbacks = Feedback.all
    	render json: @feedbacks
	end

	def show
    	render json: @feedback
  end

	def create
    	@feedback = Feedback.new(feedback_params)
    	if @feedback.save
      		render json: @feedback, status: :created, location: @feedback
    	else
      		render json: @feedback.errors, status: :unprocessable_entity
    	end
  end

	def update
    	if @feedback.update(feedback_params)
      		render json: @feedback
    	else
      		render json: @feedback.errors, status: :unprocessable_entity
    	end
  end

	def destroy
    	@feedback.destroy
  end

	def feedback_per_form_and_user
		@feedback = Feedback.where(user_id: params[:user_id], form_id: params[:form_id])
		render json: @feedback
	end

	def feedbacks_per_form
		@feedbacks = Feedback.where(form_id: params[:form_id])
		render json: @feedbacks
	end

	private

    def set_feedback
      @feedback = Feedback.find(params[:id])
    end

    def feedback_params
      params.require(:feedback).permit(:description, :form_id, :user_id)
    end
end
