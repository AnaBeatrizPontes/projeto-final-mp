class FormsController < ApplicationController
	  	before_action :set_form, only: [:show, :update, :destroy]

	def index
		@forms = Form.all
        render json: @forms
	end

	def show
		@form = Form.find(params[:id])
        render json: @form
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

	private

    def set_form
      @form = Form.find(params[:id])
    end
 
    def form_params
      params.require(:form).permit(:title, :description, :link)
    end
	
	
end
