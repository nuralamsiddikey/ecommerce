"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import cn from "classnames";
import ResetIcon from "./icons/ResetIcon";
import img from "./photo.jpeg";
import {
  Cropper,
  CropperPreview,
  CropperPreviewRef,
} from "react-advanced-cropper";
import AdjustableCropperBackground from "./components/AdjustableCopperBackground ";
import AdjustablePreviewBackground from "./components/AdjustablePreviewBackground";
import { Navigation } from "./components/Navigation";
import Slider from "./components/slider";
import { Button } from "./components/Button";
import "react-advanced-cropper/dist/style.css";
import "./style.css";

export default function CropperEditorPage() {
  const cropperRef = useRef(null);
  const previewRef = useRef(null);
  const [src, setSrc] = useState(img.src);
  const [mode, setMode] = useState("crop");
  const [adjustments, setAdjustments] = useState({
    brightness: 0,
    hue: 0,
    saturation: 0,
    contrast: 0,
  });

  console.log("img", img);

  const onChangeValue = (value) => {
    if (mode in adjustments) {
      setAdjustments((previousValue) => ({
        ...previousValue,
        [mode]: value,
      }));
    }
  };

  const onReset = () => {
    setMode("crop");
    setAdjustments({
      brightness: 0,
      hue: 0,
      saturation: 0,
      contrast: 0,
    });
  };

  const onUpload = (blob) => {
    onReset();
    setMode("crop");
    setSrc(blob);
  };

  const onDownload = () => {
    if (cropperRef.current) {
      const newTab = window.open();
      if (newTab) {
        newTab.document.body.innerHTML = `<img src="${cropperRef.current
          .getCanvas()
          ?.toDataURL()}"/>`;
      }
    }
  };

  const onUpdate = () => {
    previewRef.current?.refresh();
  };

  const changed = Object.values(adjustments).some((el) => Math.floor(el * 100));

  const cropperEnabled = mode === "crop";

  return (
    <div className={"image-editor"}>
      <div className="image-editor__cropper">
        <Cropper
          src={src}
          ref={cropperRef}
          stencilProps={{
            movable: cropperEnabled,
            resizable: cropperEnabled,
            lines: cropperEnabled,
            handlers: cropperEnabled,
            overlayClassName: cn(
              "image-editor__cropper-overlay",
              !cropperEnabled && "image-editor__cropper-overlay--faded"
            ),
          }}
          backgroundWrapperProps={{
            scaleImage: cropperEnabled,
            moveImage: cropperEnabled,
          }}
          backgroundComponent={AdjustableCropperBackground}
          backgroundProps={adjustments}
          onUpdate={onUpdate}
        />
        {mode !== "crop" && (
          <Slider
            className="image-editor__slider"
            value={adjustments[mode]}
            onChange={onChangeValue}
          />
        )}
        <CropperPreview
          className={"image-editor__preview"}
          ref={previewRef}
          cropper={cropperRef}
          backgroundComponent={AdjustablePreviewBackground}
          backgroundProps={adjustments}
        />
        <Button
          className={cn(
            "image-editor__reset-button",
            !changed && "image-editor__reset-button--hidden"
          )}
          onClick={onReset}
        >
          <ResetIcon />
        </Button>
      </div>
      <Navigation
        mode={mode}
        onChange={setMode}
        onUpload={onUpload}
        onDownload={onDownload}
      />
    </div>
  );
}
