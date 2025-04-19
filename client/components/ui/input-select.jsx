/**
 * InputSelect component
 * @param {string} placeholder - Placeholder text for the input
 * @param {function} onChange - Function to be called when input value changes
 * @param {string} value - Value of the input
 * @param {array} options - Array of options to be shown in the select dropdown 
 * const options = [
 *  {
      value: "value",
      label: "label",
    },
    {
      value: "value",
      label: "label",
    }
  ]
*/

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function InputSelect({
  placeholder = "Select an option",
  onChange,
  value,
  options = [],
  err,
  className,
  status = "",
}) {
  console.log("options", options);
  return (
    <>
      <Select onValueChange={onChange} defaultValue={value}>
        <SelectTrigger
          className={`text-[11px] text-fifth-gray ${className} ${
            err && "border-red-600"
          } ${status === "edit" && "border-orange"}`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="divide-y rounded-[4px]">
            {options?.length > 0 ? (
              options.map((option, key) => (
                <SelectItem
                  key={key}
                  value={option.value}
                  className="hover:bg-orange hover:text-white transition text-[#4A4A4A] text-sm px-2 py-[7px] font-medium rounded-none rounded-t-[5px] cursor-pointer"
                >
                  {option.label}
                </SelectItem>
              ))
            ) : (
              <div className="text-sm text-medium-black min-h-44 flex items-center justify-center">
                No options available
              </div>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}
