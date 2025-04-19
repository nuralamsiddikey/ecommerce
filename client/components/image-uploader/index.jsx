"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function ImageUploader({
  maxFileSize = 1,
  onUpload = () => {},
  className = "",
  height = 140,
  width = null,
  err,
}) {
  // Local State
  const [file, setFile] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);
  const [error, setError] = useState(null);

  /**
   * HANDLERS
   */
  const handleDragOver = (event) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setError(null);
    setDragOver(false);

    const file = event.dataTransfer.files[0];
    handleFile(file);
  };

  const handleInputChange = (event) => {
    setError(null);
    const file = event.target.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (!file) return;

    const fileSize = file.size / 1024 / 1024;
    const fileType = file.type.split("/")[0];

    // Check if the file is an image
    if (fileType !== "image") {
      setError("Invalid file type. Please upload an image.");
      return;
    }

    // Check file size
    if (fileSize > maxFileSize) {
      setError(`File size should be less than ${maxFileSize}MB`);
      return;
    }
    setFile(file);
    onUpload(file);
  };

  const removeImage = () => {
    setFile(null);
    onUpload(null);
  };

  return file ? (
    <div
      style={{
        height: height,
        width: width || "100%",
        position: "relative",
      }}
    >
      <Image
        src={URL.createObjectURL(file)}
        alt="uploaded image"
        width={width || "74"}
        height={height}
        className="w-full h-full object-cover rounded-[4px]"
      />
      <div
        onClick={removeImage}
        className="bg-white h-6 w-6 flex items-center justify-center rounded-full absolute top-2 right-2 cursor-pointer"
      >
        <X size={15} />
      </div>
    </div>
  ) : (
    <div
      style={{
        height: height,
        width: width || "100%",
      }}
      className={`relative rounded-lg flex items-center justify-center border-2 border-dashed ${
        dragOver
          ? "border-primary"
          : err
          ? "border-red-500"
          : "border-[#EAECF0]"
      } ${className}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*" // Allows only image files
          onChange={handleInputChange}
          className="absolute left-0 top-0 z-10 h-full w-full opacity-0 cursor-pointer"
        />
        <div className="flex flex-col items-center justify-center">
          <Image
            className="w-[74px] h-[74px]"
            src="/assets/icons/image-upload.svg"
            alt="file upload icon"
            width="74"
            height="74"
          />
          <h2 className="text-[12px] font-normal">
            Drop your image here, or{" "}
            <span
              className="text-orange cursor-pointer"
              onClick={() => fileInputRef.current.click()}
            >
              browse
            </span>
          </h2>
          <p className="text-[#969DB2] text-[9px]">
            Supports: PNG, JPG, JPEG, WEBP
          </p>
        </div>
      </div>
    </div>
  );
}
