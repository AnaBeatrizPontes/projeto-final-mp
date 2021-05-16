class AssignmentsController < ApplicationController
  before_action :set_assignment, only: [:show, :update, :destroy]

  def index
    @assignments = Assignment.all
    render json: @assignments
  end

  def show
    render json: @assignment
  end

  def create
    @assignment = Assignment.new(assignment_params)
    if @assignment.save
      render json: @assignment, status: :created, location: @assignment
    else
      render json: @assignment.errors, status: :unprocessable_entity
    end
  end

  def update
    if @assignment.update(assignment_params)
      render json: @assignment
    else
      render json: @assignment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @assignment.destroy
  end

	def assignment_per_user
		@assignments = Assignment.where(user_id: params[:user_id])
		render json: @assignments, status: :ok
	end

  private

    def set_assignment
      @assignment = Assignment.find(params[:id])
    end

    def assignment_params
      params.require(:assignment).permit(:user_id, :form_id)
    end
end
