"use client";

import { Check, Trash2 } from "lucide-react";

export default function AddressItem({
  address: { id, name, phone, address, isActive },
  onActive = () => {},
  border = true,
}) {
  const getBorder = () => {
    if (border) {
      if (isActive) {
        return "border border-orange";
      } else {
        return "border border-[#9A9A9A]";
      }
    } else {
      return "border-none";
    }
  };

  // className={`border bg-white rounded-[4px] p-4 space-y-[2px]
  //   ${isActive ? "border-orange" : "border-[#9A9A9A]"}
  // `}

  return (
    <div
      className={`bg-white rounded-[4px] p-4 space-y-[2px]
        ${getBorder()}
        `}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-sm text-primary-gray font-semibold  text-start">
          {name}
        </h2>
        {/* Active Address */}
        {isActive && (
          <div className="w-[20px] h-[20px] bg-orange rounded-full flex items-center justify-center">
            <Check strokeWidth={3} size={15} color="#fff" />
          </div>
        )}
      </div>

      <p className="text-xs text-primary-gray font-normal  text-start">
        {phone}
      </p>
      <p className="text-xs text-primary-gray font-normal w-2/3  text-start">
        {address}
      </p>
      <div className="flex items-center justify-end gap-[5px] -mt-3">
        {isActive ? (
          <p className="text-[11px] font-medium">Default</p>
        ) : (
          <button
            onClick={() => onActive(id)}
            className="text-[11px] font-medium text-orange"
          >
            Make default
          </button>
        )}

        <button className="focus:outline-none focus:border-none border-none">
          <Trash2 size={19} color="#FF0000" />
        </button>
      </div>
    </div>
  );
}
