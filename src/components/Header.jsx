import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

function Header() {
  const { status, data: session } = useSession();
  return (
    <div>
      <nav className="flex justify-between h-12 items-center px-4 bg-green-500">
        <Link href="/" className="ml-1">
          <p className="text-lg font-bold">Paryaavaran</p>
        </Link>
        <div className="flex space-x-3">
          <Link href="/Cart">
            <p className="p-2">Cart</p>
          </Link>
          {status === "loading" ? (
            "Loading..."
          ) : session?.user ? (
            <Link href="/">
              <p>{session.user.name}</p>
            </Link>
          ) : (
            <Link href="/login">
              <p className="p-2">Login</p>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
