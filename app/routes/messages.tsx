import { Link, Outlet } from "@remix-run/react";

export default function MessagesPage() {
  return (
    <main>
      <div className="flex flex-col gap-4">
        <Link to=".">Messages</Link>
        <Link to="asdf">asdf</Link>
        <Link to="test">test</Link>
      </div>
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </main>
  );
}
