"use client";

import { useEffect, useState } from "react";

export default function Textarea({
  placeholder = "Type here...",
  value,
  onChange = () => {},
  maxLength = null,
  rows = 3,
  height = "",
  className,
  err,
}) {
  // Local State
  const [charCount, setCharCount] = useState(value?.length || 0);

  /**
   * EFFECTS
   */
  useEffect(() => {
    setCharCount(value?.length || 0);
  }, [value]);

  /**
   * HANDLERS
   */
  const handleChange = (event) => {
    const newValue = event.target.value;
    setCharCount(newValue.length);
    onChange(event);
  };

  return (
    <div
      className={`flex flex-col w-full rounded-[4px] border bg-white p-3 text-sm mt-1 ${
        err ? "border-red-600" : "border-[#D8D8D8]"
      }`}
    >
      <textarea
        placeholder={placeholder}
        value={value}
        rows={rows}
        onChange={handleChange}
        maxLength={maxLength}
        className={`w-full placeholder:text-fifth-gray placeholder:text-[11px] placeholder:leading-normal focus-visible:outline-none focus-visible:ring-2disabled:cursor-not-allowed disabled:opacity-50 resize-none ${
          height ? `h-[${height}px]` : ""
        } ${className}`}
      />
      {maxLength && (
        <span className="ms-auto text-[13px] text-fifth-gray font-medium leading-normal">
          {charCount}/{maxLength}
        </span>
      )}
    </div>
  );
}
