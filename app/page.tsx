'use client';

import Button from "@/components/Button";
import TotalExpenses from "@/components/TotalExpenses";
import { useState } from "react";
import { Expenses } from "@/interfaces/Expenses";
import RemainingAmount from "@/components/RemainingAmount";

export default function Home() {


  const [budget, setBudget] = useState<number>(0);
  const [expenseName, setExpenseName] = useState<string>('');
  const [costOfExpense, setCostOfExpense] = useState<number>(0);
  const [expensesList, setExpensesList] = useState<Expenses[]>([]);

  const addExpenses = () => {
    setExpensesList([...expensesList, {costOfExpense: costOfExpense, expenseName: expenseName, id: expensesList.length-1}]);
    setCostOfExpense(0);
    setExpenseName('');
  }



  return (
    <main className="w-full h-full">
      <h1>budget:{budget}</h1>
      <TotalExpenses expensesList = { expensesList } costOfExpense = { costOfExpense } />
      <RemainingAmount budget = { budget } expensesList = { expensesList }/>
      <input type="text" placeholder="enter budget" onChange={(event) => setBudget(Number(event?.target.value))}/>
      <input type="text" placeholder="enter cost" value={costOfExpense} onChange={(event) => setCostOfExpense(Number(event.target.value))}/>
      <input type="text" placeholder="enter expense name" value={expenseName} onChange={(event) => setExpenseName(event.target.value)}/>
      <Button title = "add expense" addExpenses = { addExpenses }/>
      { expensesList.map((expense) => {
        return <div key={expense.id}>
          <h1>{ expense.expenseName } GHS: {expense.costOfExpense}</h1>
        </div>
      })}
    </main>
  )
}
