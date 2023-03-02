import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div>
      <nav className="flex justify-between h-12 items-center px-4 bg-green-500">
        <Link href="/" className="ml-1">
          <p className="text-lg font-bold">Paryaavaran</p>
        </Link>
        <div className="flex space-x-3">
          <Link href="/cart">
            <p>Cart</p>
          </Link>
          <Link href="/login">
            <p>Login</p>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
