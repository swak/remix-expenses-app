import { redirect } from '@remix-run/node'; 
import { useNavigate } from '@remix-run/react';
import ExpenseForm from '../components/expenses/ExpenseForm';
import Modal from '../components/util/Modal';
import { updateExpense } from '../data/expenses.server';
// import { validateExpenseInput } from '../data/validation.server';
// import { getExpense } from '../data/expenses.server';

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

// export async function loader({params}) {
//   console.log('Params: ', params);
//   const expenseId = params.id;
//   const expense = await getExpense(expenseId);
//   return expense;
// }

export async function action({ params, request }) {
  const expenseId = params.id;
  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData);

  updateExpense(expenseId, expenseData);
  return redirect('/expenses');
}