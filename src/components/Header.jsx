import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Menu } from "@headlessui/react";
import DropDownLink from "./DropDownLink";

function Header() {
  const { status, data: session } = useSession();
  const signOutHandeler = () => {
    signOut({ callbackUrl: "/" });
  };
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
            <Menu as="div" className="relative inline-block p-2">
              <Menu.Button>{session.user.name}</Menu.Button>
              <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white shadow-lg">
                <Menu.Item>
                  <DropDownLink className="dropdown-link" href="/profile">
                    Profile
                  </DropDownLink>
                </Menu.Item>
                <Menu.Item>
                  <DropDownLink className="dropdown-link" href="/order-history">
                    Order History
                  </DropDownLink>
                </Menu.Item>
                <Menu.Item>
                  <a
                    href="#"
                    className="dropdown-link"
                    onClick={signOutHandeler}
                  >
                    Logout
                  </a>
                </Menu.Item>
              </Menu.Items>
            </Menu>
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
