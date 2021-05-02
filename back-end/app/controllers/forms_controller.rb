class FormsController < ApplicationController
	  	before_action :set_form, only: [:show, :update, :destroy]

	def index
		@forms = Form.includes(:questions, :answers).all
        render json: @forms, include: [:questions, :answers]
	end

	def show
		@form = Form.includes(:questions, :answers).where(id: params[:id])
        render json: @form, include: [:questions, :answers], status: :ok
	end

	def create
		@form = Form.new(form_params)
		if @form.save
			@form.link = "http://localhost:3001/form/#{@form.id}"
			render json: @form, status: :created, location: @form
		else
			render json: @form.errors, status: :unprocessable_entity
		end
	end

	def destroy
		if @form.destroy
				render status: :ok
		else
				render json: { errors: 'Não foi possivel deletar o questionario' }, status: :unprocessable_entity
		end
	end

	def form_per_user
		@forms = Form.includes(:questions, :answers).where(user_id: params[:user_id])
		render json: @forms, include: [:questions, :answers], status: :ok
	end

	def copy_form
    @form = Form.find(params[:id])
    if @form.save
    	@form.link = "http://localhost:3001/form/#%7B@form.id%7D"
      render json: @form, status: :created, location: @form
    else
      render json: @form.errors, status: :unprocessable_entity
    end
  end

	private

    def set_form
      @form = Form.find(params[:id])
    end
 
    def form_params
      params.require(:form).permit(:title, :description, :link, :user_id)
    end
	
	
end