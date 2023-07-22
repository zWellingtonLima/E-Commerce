"use client";

import { FC } from "react";
import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react";

import { BillboardColumn } from "./columns";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { toast } from "react-hot-toast";

interface CellActionProps {
  data: BillboardColumn;
}

const CellAction: FC<CellActionProps> = ({ data }) => {
  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id)
    toast.success("Billboard Id copied to the clipboard.")
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          Actions
        </DropdownMenuLabel>
        <DropdownMenuItem>
          <Copy className='w-4 h-4 mr-2' onClick={() => onCopy(data.id)}/>
          Copy Id
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Edit className='w-4 h-4 mr-2'/>
          Update
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Trash className='w-4 h-4 mr-2'/>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CellAction;
