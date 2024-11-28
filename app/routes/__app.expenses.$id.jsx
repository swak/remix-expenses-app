import { useLoaderData, useNavigate } from '@remix-run/react';
import ExpenseForm from '../components/expenses/ExpenseForm';
import Modal from '../components/util/Modal';
import { getExpense } from '../data/expenses.server';

export default function UpdateExpansesPage() {
  const navigate = useNavigate();

  function closeHandler() { 
    // navigate back
    console.log('closeHandler');
    navigate('..');
  }

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
}

export async function loader({params}) {
  console.log('EXPENSE ID LOADER');
  const expenseId = params.id;
  const expense = await getExpense(expenseId);
  return expense;
}