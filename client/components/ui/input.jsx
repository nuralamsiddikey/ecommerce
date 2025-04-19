import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(
  ({ className, type, status, err, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `flex w-full text-[8px] h-[38px] rounded-[4px] border border-[#D8D8D8] bg-white px-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-fifth-gray placeholder:text-[11px] placeholder:leading-normal placeholder:font-medium focus-visible:outline-none focus-visible:ring-2disabled:cursor-not-allowed disabled:opacity-50 ${
            err && "border-red-600"
          } ${status === "edit" && "border-orange"}`,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
