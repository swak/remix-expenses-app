import { redirect } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';
import ExpenseForm from '../components/expenses/ExpenseForm';
import Modal from '../components/util/Modal';
import { addExpense } from '../data/expenses.server';
import { validateExpenseInput } from '../data/validation.server';

export default function AddExpensePage() {
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

export async function action({request}) {
  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData);
  console.log(expenseData, formData);

  try {
    validateExpenseInput(expenseData);
  } catch (error) {
    return error;
  }

  await addExpense(expenseData);
  return redirect('/expenses');
}