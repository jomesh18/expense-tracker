import { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aa", amount: 10, category: "Utilities" },
    { id: 2, description: "b", amount: 10, category: "Grocery" },
    { id: 3, description: "c", amount: 10, category: "Utilities" },
    { id: 4, description: "d", amount: 10, category: "Utilities" },
  ]);

  const [data, setData] = useState([
    {
      description: "",
      amount: 0,
      category: "grocery",
    },
  ]);

  return (
    <>
      <Form
        sentData={(d) => {
          setData([...data, d]);
          console.log(data);
        }}
      />
      <br />
      <br />
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
};

export default App;
