import { FC } from "react";
import { UserButton } from "@clerk/nextjs";

import { MainNav } from "@/components/main-nav";
import StoreSwitcher from "@/components/ui/store-switcher";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="border-b">
      <div className='flex items-center h-16 px-4'>
        <StoreSwitcher />
      </div>
      <MainNav className='mx-6'/>
      <div className='ml-auto flex items-center space-x-4'>
        <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
  );
};

export default Navbar;
