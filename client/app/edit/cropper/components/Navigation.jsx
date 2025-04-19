"use client";

import cn from "classnames";
import { Crop, Eclipse, SunDim, SunMoon, UploadCloudIcon } from "lucide-react";
import { useRef } from "react";
import { Button } from "./Button";
import "./Navigation.css";

export const Navigation = ({
  className,
  onChange,
  onUpload,
  onDownload,
  mode,
}) => {
  const inputRef = useRef(null);

  const setMode = (newMode) => () => {
    if (onChange) {
      onChange(newMode);
    }
  };

  const onUploadButtonClick = () => {
    inputRef.current?.click();
  };

  const onLoadImage = (event) => {
    const { files } = event.target;

    if (files && files[0]) {
      if (onUpload) {
        onUpload(URL.createObjectURL(files[0]));
      }
    }

    event.target.value = ""; // Clear the event target value
  };

  return (
    <div className={cn("image-editor-navigation", className)}>
      <Button
        className={"image-editor-navigation__button"}
        onClick={onUploadButtonClick}
      >
        <UploadCloudIcon />
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={onLoadImage}
          className="image-editor-navigation__upload-input"
        />
      </Button>
      <div className="image-editor-navigation__buttons">
        <Button
          className={"image-editor-navigation__button"}
          active={mode === "crop"}
          onClick={setMode("crop")}
        >
          <Crop />
          {/* <CropIcon /> */}
        </Button>
        <Button
          className={"image-editor-navigation__button"}
          active={mode === "saturation"}
          onClick={setMode("saturation")}
        >
          <SunMoon />
          {/* <SaturationIcon /> */}
        </Button>
        <Button
          className={"image-editor-navigation__button"}
          active={mode === "brightness"}
          onClick={setMode("brightness")}
        >
          <SunDim />
          {/* <BrightnessIcon /> */}
        </Button>
        <Button
          className={"image-editor-navigation__button"}
          active={mode === "contrast"}
          onClick={setMode("contrast")}
        >
          <Eclipse />
          {/* <ContrastIcon /> */}
        </Button>
        <Button
          className={"image-editor-navigation__button"}
          active={mode === "hue"}
          onClick={setMode("hue")}
        >
          Hue
          {/* <HueIcon /> */}
        </Button>
      </div>
      <Button
        className={"image-editor-navigation__button"}
        onClick={onDownload}
      >
        Download
        {/* <DownloadIcon /> */}
      </Button>
    </div>
  );
};
