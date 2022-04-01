class EmployeesController < ApplicationController
    skip_before_action :authorize

    def organize
        @current_user = custom_paths
        employees = @current_user.employees.by_ages
        render json: employees
    end

    def list
        @current_user = custom_paths
        employees = @current_user.employees.by_names
        render json: employees

    end

    def index
        employees = Employee.all
        render json: employees
    end

    def create
        employee = Employee.create(employee_params)
        if employee.valid? 
        render json: employee
        else 
            render json: { errors: ["Please fill out the blanks"] }, status: :unauthorized
        end
    end

    def update
        employee = finding_employee
         employee.update(employee_params)
         render json: employee
    
    end

    def destroy
         employee = finding_employee
         employee.destroy
         head :no_content
    end

    def show
        employee = finding_employee
        render json: employee

    end


        private

        def employee_params
            params.require(:employee).permit(:name, :age, :status, :gender, :user_id )

        end

        def finding_employee
            Employee.find(params[:id])
        end


        def custom_paths
            User.find(session[:user_id])
        end
end
