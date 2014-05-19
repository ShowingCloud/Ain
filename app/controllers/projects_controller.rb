class ProjectsController < ApplicationController

	respond_to :json, :xml, :html
	respond_to :csv, :only => [:index]

	before_filter :checkadmin, :except => [:create, :new]
	before_filter :checkcaptcha, :only => [:create]


	# GET /projects
	def index
		@projects = Project.all
		respond_with @projects do |format|
			format.csv { send_data Project.to_csv }
		end
	end


	# GET /projects/1
	def show
		@project = Project.find params[:uuid]
		respond_with @project
	end


	# GET /projects/new
	def new
		@project = Project.new
		respond_with @project
	end


	# GET /projects/1/edit
	def edit
		@project = Project.find params[:uuid]
	end


	# POST /projects
	def create
		@project = Project.new params[:project]
		@project.save
		respond_with @project
	end


	# PUT /projects/1
	def update
		@project = Project.find params[:uuid]
		@project.update_attributes params[:project]
		respond_with @project
	end


	# DELETE /projects/1
	def destroy
		@project = Project.find params[:uuid]
		@project.destroy
		respond_with @project
	end


	private

	def checkadmin
		if not refinery_user?
			respond_with ret = { :status => 0 }, :location => nil, :status => :unauthorized and return
		end
	end


	def checkcaptcha
		if not simple_captcha_valid?
			respond_with ret = { :status => 2 }, :location => nil, :status => :forbidden and return
		end
	end

end
