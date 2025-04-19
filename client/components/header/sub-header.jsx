"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { dbCategories } from "@/fake-data/categories";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";



export default function SubHeader() {
  // Local State
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#D9D9D9] h-[40px] flex items-center">
      <div className="custom-container">
      <Button
              variant="none"
              className={`p-0 text-sm font-semibold flex items-center gap-2 ${
                open ? "text-orange" : "text-[#171717]"
              }`}
            >
              Categories{" "}
              <ChevronDown
                size={18}
                className={open ? "rotate-180" : "rotate-0"}
                color={open ? "#F95506" : "#171717"}
              />
            </Button>
      </div>
    </div>
  );
}
