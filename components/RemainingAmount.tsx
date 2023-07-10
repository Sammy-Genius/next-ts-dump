import { Expenses } from '@/interfaces/Expenses';

type RemainingAmount = {
    expensesList : Expenses[],
    budget: number
}

const RemainingAmount = ( {budget, expensesList}: RemainingAmount) => {
    const totalCostOfExpenses = expensesList.reduce((total, cost) => {
        return total + cost.costOfExpense;
    }, 0)

    const remainingAmount = budget - totalCostOfExpenses;
    return ( 
        <div>Remaining Amount:GHS { remainingAmount } </div>
     );
}
 
export default RemainingAmount;