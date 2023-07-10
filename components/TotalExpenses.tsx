import { Expenses } from '@/interfaces/Expenses';

type ListOfExpenses = {
    expensesList : Expenses[],
    costOfExpense: number
}


export default function TotalExpenses({ expensesList, costOfExpense }: ListOfExpenses) {
     const sumOfExpenses = expensesList.reduce((total, item) => {
        return total + item.costOfExpense
     }, 0)
  return (
    <div>Expenses:GHS{ sumOfExpenses }</div>
  )
}
