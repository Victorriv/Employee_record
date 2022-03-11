class EmployeesController < ApplicationController

    def index
        employees = Employee.all
        render json: employees
    end

    def create
        employee = Employee.create(employee_params)
        render json: employee
    end

    def update

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
            params.permit(:name, :age, :status, :gender, :user_id )

        end



end
