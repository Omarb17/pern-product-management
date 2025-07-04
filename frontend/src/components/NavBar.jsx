import { ShoppingCartIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="sticky top-0 z-50 bg-orange-200 border-b backdrop-blur-bg border-base-conten/10">
      <div className="mx-auto max-w-7xl">
        <div className="navbar px-4 min-h-[4rm] justify-between">
          <div className="flex-1 lg:flex-none">
            <Link to="/" className="hover:opacity-80 translate-opacity">
              <div className="flex items-center gap-2">
                <ShoppingCartIcon className="text-orange-700 size-9" />
                <span className="font-mono text-2xl font-semibold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-orange-400">
                  Prdocut Managmenet
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
