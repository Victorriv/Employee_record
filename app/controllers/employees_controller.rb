class EmployeesController < ApplicationController
    skip_before_action :authorize

    def organize
        @current_user = User.find(session[:user_id])
        employees = @current_user.employees.by_ages
        render json: employees
    end

    def index
        employees = Employee.all
        render json: employees
    end

    def create
        employee = Employee.create(employee_params)
        render json: employee
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


end
