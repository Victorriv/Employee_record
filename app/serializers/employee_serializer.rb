class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :status, :gender, :user_id
end
