"use client";

// Import the editor styles
import "@pqina/pintura/pintura.css";

// Import the editor default configuration

// Import the editor component from `react-pintura`
import { PinturaEditor } from "@pqina/react-pintura";

// Import the editor default configuration
import MobileAppBar from "@/components/mobile-app-bar/mobile-app-bar";
import { getEditorDefaults } from "@pqina/pintura";
import Image from "next/image";
import { useState } from "react";

// get default properties
const editorConfig = getEditorDefaults();

export default function EditPage() {
  // Local State
  const [file, setFile] = useState(null);
  const [editedPhoto, setEditedPhoto] = useState(null);

  /**
   * HANDLERS
   */
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const processHandler = ({ dest }) => {
    setEditedPhoto(dest);
  };

  return (
    <div className="custom-container">
      <MobileAppBar title="Edit photo" />
      {file ? (
        editedPhoto ? (
          <Image
            src={URL.createObjectURL(editedPhoto)}
            width={500}
            height={500}
            alt="edited photo"
          />
        ) : (
          <div className="App" style={{ height: "600px" }}>
            <PinturaEditor
              {...editorConfig}
              src={file}
              imageCropAspectRatio={1}
              onProcess={processHandler}
            />
          </div>
        )
      ) : (
        <div>
          <label
            for="uploadFile1"
            class="bg-white text-gray-500 font-semibold text-base rounded max-w-md h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-11 mb-2 fill-gray-500"
              viewBox="0 0 32 32"
            >
              <path
                d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                data-original="#000000"
              />
              <path
                d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                data-original="#000000"
              />
            </svg>
            Upload file
            <input
              type="file"
              id="uploadFile1"
              class="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
            <p class="text-xs font-medium text-gray-400 mt-2">
              PNG, JPG SVG, WEBP, and GIF are Allowed.
            </p>
          </label>
        </div>
      )}
    </div>
  );
}
