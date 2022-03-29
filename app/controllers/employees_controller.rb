class EmployeesController < ApplicationController
    skip_before_action :authorize

    def index
        employees = Employee.all
        render json: employees
    end

    def create
        employee = Employee.create(employee_params)
        render json: employee
    end

    def update
        employee = Employee.find(params[:id])
        if @current_user.id == employee.user.id
         employee.update(employee_params)
         render json: employee
        else

         render json: {errors: ["Employee(s) cant be accessed"]}, status: :unauthorized
        end

    end

    def destroy
        employee = Employee.find(params[:id])
        employee.destroy
    end

    def show
        employee = Employee.find(params[:id])
        render json: employee

    end

        private

        def employee_params
            params.require(:employee).permit(:name, :age, :status, :gender, :user_id )

        end



end
