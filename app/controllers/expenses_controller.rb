class ExpensesController < ApplicationController
  def index
    @expenses = Expense.all
  end

  def new
    @expense = Expense.new
  end

  def create
    @child = Child.find(params[:child_id])
    @expense = @child.expenses.new(expense_params)
    if @expense.save
      redirect_to child_expenses_path, notice: "Expense added!"
    else
      render :new, status: :unprocessable_entity
    end
  end

  def show
    @expense = Expense.find(params[:id])
  end

  private

  def expense_params
    params.require(:expense).permit(:child_id, :amount, :description, :date)
  end

end
