require "faker"

# Create family
family = Family.create!(
  name: "Ronchon"
)

# Create child
  child = Child.create!(
    family: family,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    birth_date: Faker::Date.between(from: '2024-11-10', to: '2024-12-10')
  )

# Create expenses
categories_expenses = [
  "Nourriture",
  "Vêtements",
  "Santé",
  "Éducation",
  "Loisirs"
]

5.times do
  expense = Expense.create!(
    child: child,
    amount: Faker::Number.decimal(l_digits: 2),
    description: categories_expenses.sample,
    date: Faker::Date.between(from: '2024-11-10', to: '2024-12-10')
  )
end
