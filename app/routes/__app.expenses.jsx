import { Link, Outlet, useLoaderData } from '@remix-run/react';
import { FaPlus, FaDownload } from 'react-icons/fa';
import ExpensesList from '../components/expenses/ExpensesList';
import { getExpenses } from '../data/expenses.server';

export default function ExpensePage() {
  const expenses = useLoaderData();
  console.log("Rendering Expenses Page");

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
      <ExpensesList expenses={expenses} />
    </main>
    </>
  );
}

export function loader() {
  console.log('EXPENSES LOADER');
  return getExpenses();
}


// const DUMMY_EXPENSES = [
//   { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date('2021-07-01') },
//   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date('2022-01-05') },
//   { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date('2021-06-15') },
//   { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date('2021-08-12') },
//   { id: 'e5', title: 'Groceries', amount: 120.75, date: new Date('2022-02-10') },
//   { id: 'e6', title: 'Laptop', amount: 999.99, date: new Date('2022-03-15') },
//   { id: 'e7', title: 'Phone Bill', amount: 50.25, date: new Date('2021-11-25') },
//   { id: 'e8', title: 'Coffee Maker', amount: 75.99, date: new Date('2022-04-04') },
//   { id: 'e9', title: 'Gym Membership', amount: 45.99, date: new Date('2021-10-10') },
//   { id: 'e10', title: 'Books', amount: 130.20, date: new Date('2022-05-21') },
//   { id: 'e11', title: 'Headphones', amount: 85.49, date: new Date('2021-09-14') },
//   { id: 'e12', title: 'Clothes', amount: 210.35, date: new Date('2022-06-18') },
//   { id: 'e13', title: 'Electricity Bill', amount: 89.65, date: new Date('2021-12-01') },
//   { id: 'e14', title: 'Water Heater Repair', amount: 350.00, date: new Date('2021-05-25') },
//   { id: 'e15', title: 'Dog Food', amount: 67.50, date: new Date('2022-07-02') },
//   { id: 'e16', title: 'Shoes', amount: 119.95, date: new Date('2021-08-05') },
//   { id: 'e17', title: 'Tablet', amount: 249.99, date: new Date('2022-03-22') },
//   { id: 'e18', title: 'Car Repair', amount: 679.00, date: new Date('2021-09-19') },
//   { id: 'e19', title: 'Dinner', amount: 80.45, date: new Date('2021-11-02') },
//   { id: 'e20', title: 'Home Decor', amount: 158.99, date: new Date('2022-04-15') },
//   { id: 'e21', title: 'Air Conditioner', amount: 1299.49, date: new Date('2021-06-20') },
//   { id: 'e22', title: 'Online Course', amount: 49.99, date: new Date('2022-05-30') },
//   { id: 'e23', title: 'Garden Tools', amount: 134.25, date: new Date('2021-10-08') },
//   { id: 'e24', title: 'Baby Supplies', amount: 240.50, date: new Date('2021-07-25') },
//   { id: 'e25', title: 'Painting Supplies', amount: 78.75, date: new Date('2022-06-03') },
//   { id: 'e26', title: 'Bike Repair', amount: 199.99, date: new Date('2022-03-29') },
//   { id: 'e27', title: 'Sofa', amount: 699.00, date: new Date('2021-09-13') },
//   { id: 'e28', title: 'Piano Lessons', amount: 150.00, date: new Date('2022-07-11') },
//   { id: 'e29', title: 'Subscription Service', amount: 12.99, date: new Date('2022-02-14') },
//   { id: 'e30', title: 'New Glasses', amount: 250.00, date: new Date('2022-01-17') }
// ];
