import ExpenseStatistics from '../components/expenses/ExpenseStatistics';
import Chart from '../components/expenses/Chart';

export default function ExpenseAnalysisPage() {
  return (
    <main>
      <ExpenseStatistics expenses={DUMMY_EXPENSES} />
      <Chart expenses={DUMMY_EXPENSES} />
    </main>
  );
}


const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date('2021-07-01') },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date('2022-01-05') },
];
