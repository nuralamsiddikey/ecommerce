"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function Avatar({ size = "md", src }) {
  // Local State
  const [source, setSource] = useState(src);
  const filePickerRef = useRef(null);

  /**
   * Style for Avatar
   */
  const heightWidth = size === "lg" ? 89 : size === "md" ? 72 : 48;

  /**
   * HANDLERS
   */
  const fileChangeHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSource(URL.createObjectURL(file));
    }
  };

  const uploadFileHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div
      className="relative rounded-full"
      style={{
        height: heightWidth,
        width: heightWidth,
      }}
    >
      <Image
        src={source}
        height={heightWidth}
        width={heightWidth}
        className="rounded-full"
        style={{
          height: heightWidth,
          width: heightWidth,
        }}
        alt="avatar"
      />
      <input
        type="file"
        accept="image/*"
        hidden
        ref={filePickerRef}
        onChange={fileChangeHandler}
      />
      <button
        onClick={uploadFileHandler}
        className="w-[20px] h-[20px] rounded-full border broder-[#C4C4C4] bg-white flex items-center justify-center absolute bottom-[0px] right-[0px] lg:bottom-[2px] lg:right-[3px]"
      >
        <Image
          src="/assets/icons/upload-icon.svg"
          height={10}
          width={10}
          className="w-[10px] h-[10px]"
          alt="upload-icon"
        />
      </button>
    </div>
  );
}
