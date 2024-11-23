import { Outlet } from '@remix-run/react';
import ExpensesList from '../components/expenses/ExpensesList';
import expensesStyles from '../styles/expenses.css';

export default function ExpensePage() {
  return (
    <>
    <Outlet />
    <main>
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </main>
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date('2021-07-01') },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date('2022-01-05') },
];
