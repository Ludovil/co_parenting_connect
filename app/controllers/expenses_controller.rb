class ExpensesController < ApplicationController
  def index
    @child = Child.find(params[:child_id])
    @expenses = @child.expenses.order(date: :desc)

    @expense = @child.expenses.new

    total_expenses = @expenses.sum(:amount)
    users = @expenses.map(&:user).uniq
    part_per_user = total_expenses / users.count

    # Étape 2 : Calcul de la différence pour chaque utilisateur
    @user_balances = users.map do |user|
      total_paid_by_user = @expenses.where(user: user).sum(:amount)
      balance = total_paid_by_user - part_per_user
      { user: user, balance: balance }
    end
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
    params.require(:expense).permit(:child_id, :amount, :description, :category, :user_id, :date)
  end

  def set_child
    @child = Child.find(params[:child_id])
  end

  def set_expense
    @expense = Expense.find(params[:id])
    @child = @expense.child
  end

end
