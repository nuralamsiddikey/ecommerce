"use client";

import { Trash2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";

export default function OrderProductDeleteModal() {
  // Local State
  const [open, setOpen] = useState(false);

  /**
   * HANDLERS
   */
  const deleteProductHandler = () => {
    toast.success("Product Deleted");
    setOpen(false);
    console.log("Product Deleted");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button type="button" variant="none" className="p-0 m-0">
          <Trash2 size={19} color="#FF0000" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[446px] p-[27px]">
        <div className="">
          <h2 className="text-[23px] text-orange font-normal">
            Are you sure to Delete Product?
          </h2>

          <div className="flex items-center gap-[10px] pt-[26px]">
            <DialogClose className="bg-[#D9D9D9] w-full rounded-[4px]">
              <Button className="bg-[#D9D9D9] text-primary-gray h-[42px]">
                Cancel
              </Button>
            </DialogClose>

            <Button
              onClick={deleteProductHandler}
              className="bg-[#C10101] w-full h-[42px]"
            >
              Yes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
