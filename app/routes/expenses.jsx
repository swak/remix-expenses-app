import { Outlet } from "@remix-run/react";

export default function ExpensePage() {
    return <main>
      <h1>Expenses Section</h1>
      <Outlet />
    </main>;
  }
  