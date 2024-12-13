require "faker"

puts "Seed started"


# Create family
family = Family.create!(
  name: Faker::Name.last_name
)

# Create child
5.times do
  child = Child.create!(
    family: family,
    first_name: Faker::Name.first_name,
    last_name: family.name,
    birth_date: Faker::Date.between(from: '2024-11-10', to: '2024-12-10')
  )
end

# Create expenses
categories_expenses = [
  "Nourriture",
  "Vêtements",
  "Santé",
  "Éducation",
  "Loisirs"
]

rand(3..5) do
  Expense.create!(
    child: child,
    amount: Faker::Number.decimal(l_digits: 2),
    description: categories_expenses.sample,
    date: Faker::Date.between(from: '2024-11-10', to: '2024-12-10')
  )
end
puts "Seed ended"
