import { Outlet } from "@remix-run/react";

export default function ExpensePage() {
    return <div>
      <h1>Expenses Section</h1>
      <Outlet />
    </div>;
  }
  