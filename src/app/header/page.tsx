import Link from "next/link";

import Menu from './Menu';

export default function Header() {

  return (
    <nav className="sticky top-0 z-20 bg-repeat border-b-2">
      <div className="container max-w-5xl mx-auto px-5 lg:px-3">
        <div className="hidden md:flex flex-nowrap overflow-x-auto text-white font-semibold py-8 items-center">
          <div className="float-none mr-6 ">
            <a href="/">
              <img className="w-16" src="/image/88logo.jpg"></img>
            </a>
          </div>
          <div className="flex-none hover:text-yellow-500 active:text-yellow-500 mx-2">
            <Link className="" href="/menu/signature">
              88 Siginature & Combo
            </Link>
          </div>
          <div className=" flex-none hover:text-yellow-500 active:text-yellow-500 mx-2">
            <Link className="" href="/menu/soup">
              Soup & Noodle
            </Link>
          </div>
          <div className="flex-none hover:text-yellow-500 active:text-yellow-500 mx-2">
            <Link className="" href="/menu/dish">
              Raw & Stir Fried Dish
            </Link>
          </div>
          <div className="flex-none hover:text-yellow-500 active:text-yellow-500 mx-2">
            <Link className="" href="/menu/snack">
              Snack & Soft Drink
            </Link>
          </div>
          <div className="flex-none hover:text-yellow-500 active:text-yellow-500 mx-2">
            <Link className="" href="/menu/alcohol">
              Alcohol
            </Link>
          </div>
        </div>
        
        <div className="flex md:hidden">
          <Menu />
        </div>

      </div>
    </nav>
  );
}
