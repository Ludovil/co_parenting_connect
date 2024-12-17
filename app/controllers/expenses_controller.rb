class ExpensesController < ApplicationController
  def index
    @child = Child.find(params[:child_id])
    @expenses = @child.expenses.order(date: :desc)
  end

  def new
    @child = Child.find(params[:child_id])
    @expense = @child.expenses.new
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

  def destroy
    @expense = Expense.find(params[:id])
    @child = @expense.child
    if @expense.destroy
      redirect_to child_expenses_path(@child), notice: 'Expense was successfully deleted.'
    else
      redirect_to child_expenses_path(@child), alert: 'Could not delete expense.'
    end
  end

  def edit
    @expense = Expense.find(params[:id])
  end

  def show
    @expenses = Expense.find(params[:id])
    @child = @expenses.child
  end

  def update
    @expense = Expense.find(params[:id])
    @child = @expense.child
    if @expense.update(expense_params)
      redirect_to child_expenses_path(@child), notice: 'Expense was successfully updated.'
    else
      render :edit
    end
  end

  def pay
    @child = Child.find(params[:child_id])
    @child.expenses.destroy_all
    redirect_to child_expenses_path(@child), notice: "All expenses have been paid!"
  end

  private

  def expense_params
    params.require(:expense).permit(:child_id, :amount, :description, :user_id, :date)
  end

end
