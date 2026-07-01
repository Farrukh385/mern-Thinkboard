import React from "react";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-base-300 border-b border-base-content/10 shadow-md">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
            Thinkboard
          </h1>

          <div className="flex items-center gap-4">
            <Link to={"/"} className="btn btn-primary">
              <span>Home</span>
            </Link>

            <Link to={"/about"} className="btn btn-primary">
              <span>About</span>
            </Link>

            <Link to={"/create"} className="btn btn-primary">
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
