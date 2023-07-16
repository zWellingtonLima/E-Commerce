"use client";

import { Store } from "@prisma/client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Store as StoreIcon } from "lucide-react";

import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { useStoreModal } from "@/hooks/use-store-modal";
import { Button } from "@/components/ui/button";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface StoreSwitcherProps extends PopoverTriggerProps {
  items: Store[];
}

export default function StoreSwitcher({
  className,
  items = [],
}: StoreSwitcherProps) {
  const storeModal = useStoreModal();
  const params = useParams();
  const router = useRouter();

  const formattedItems = items.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  const currentStore = formattedItems.find(
    (item) => item.value === params.storeId
  );

  const [open, setOpen] = useState(false)

  const onStoreSelect = (store: { value: string, label: string }) => {
    setOpen(false)
    router.push(`/${store.value}`)
  }  

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>
          <StoreIcon></StoreIcon>
        </Button>
      </PopoverTrigger>
    </Popover>
  )
}
