"use client";

import Heading from "@/components/ui/heading";
import { Store } from "@prisma/client";
import { FC } from "react";

interface SettingsFormProps {
  initialData: Store;
}

const SettingsForm: FC<SettingsFormProps> = ({ initialData }) => {
  return (
    <div className="flex items-center justify-between">
      <Heading title="Settings" description="Manage store preferences" />
    </div>
  );
};

export default SettingsForm;
