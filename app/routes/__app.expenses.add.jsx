import { useNavigate } from '@remix-run/react';
import ExpenseForm from '../components/expenses/ExpenseForm';
import Modal from '../components/util/Modal';

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
