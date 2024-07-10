import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aa", amount: 10, category: "Utilities" },
    { id: 2, description: "b", amount: 10, category: "Groceries" },
    { id: 3, description: "c", amount: 10, category: "Utilities" },
    { id: 4, description: "d", amount: 10, category: "Utilities" },
    { id: 5, description: "d", amount: 10, category: "Entertainment" },
  ]);

  const [category, setCategory] = useState("");
  const visibleExpenses = category
    ? category === "All categories"
      ? expenses
      : expenses.filter((e) => e.category === category)
    : expenses;
  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(c) => setCategory(c)} />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
};

export default App;
