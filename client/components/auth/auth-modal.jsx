import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import Auth from "./index";

export default function AuthModal({ actionTrigger, type = "login" }) {
  // Local State
  const [isOpen, setIsOpen] = useState(false);

  /**
   * HANDLERS
   */
  const closeModalHandler = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{actionTrigger && actionTrigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[920px] px-[175px] pt-[66px] pb-[47px]">
        <div className="relative">
          <div>
            {/* Logo */}
            <div
              className="flex items-center gap-[33px] justify-center"
              onClick={closeModalHandler}
            >
              <Image
                src="/assets/images/circle-logo.svg"
                height={75}
                width={75}
                alt="Logo"
                className="w-[75px] h-[75px]"
              />
              <h2 className="text-[48px] font-semibold text-primary-gray">
                Banbox
              </h2>
            </div>

            {/* Auth Forms */}
            <Auth onCloseModal={closeModalHandler} type={type} />
          </div>

          {/* Dialog Close */}
          <div className="absolute -top-[80px] -right-[189px] w-[35px] h-[35px] bg-orange text-white rounded-full flex items-center justify-center">
            <DialogClose>
              <X strokeWidth={3} size={20} />
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
