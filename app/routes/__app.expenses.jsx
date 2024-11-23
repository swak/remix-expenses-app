import { Link, Outlet } from '@remix-run/react';
import { FaPlus, FaDownload } from 'react-icons/fa';
import ExpensesList from '../components/expenses/ExpensesList';

export default function ExpensePage() {
  return (
    <>
    <Outlet />
    <main>
      <section id="expenses-actions">
        <Link to="add">
          <FaPlus />
          <span>Add Expense</span>
        </Link>
        <a href="/expenses/raw">
          <FaDownload />
          <span>Load Raw Data</span>
        </a>
      </section>
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </main>
    </>
  );
}

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date('2021-07-01') },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date('2022-01-05') },
];
