import { FC } from "react";
import { UserButton } from "@clerk/nextjs";

import { MainNav } from "@/components/main-nav";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="border-b">
      <div className='flex items-center h-16 px-4'>
        <div>This will be a store switcher</div>
      </div>
      <MainNav />
      <div className='ml-auto flex items-center space-x-4'>
        <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
  );
};

export default Navbar;
