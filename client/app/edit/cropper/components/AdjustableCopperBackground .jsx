"use client";

import { getBackgroundStyle } from "advanced-cropper";
import { forwardRef } from "react";
import AdjustableImage from "./AdjustableImage";

const AdjustableCropperBackground = forwardRef(
  (
    {
      className,
      cropper,
      crossOrigin,
      brightness = 0,
      saturation = 0,
      hue = 0,
      contrast = 0,
    },
    ref
  ) => {
    const state = cropper.getState();
    const transitions = cropper.getTransitions();
    const image = cropper.getImage();
    const style =
      image && state ? getBackgroundStyle(image, state, transitions) : {};

    return (
      <AdjustableImage
        src={image?.src}
        crossOrigin={crossOrigin}
        brightness={brightness}
        saturation={saturation}
        hue={hue}
        contrast={contrast}
        ref={ref}
        className={className}
        style={style}
      />
    );
  }
);

AdjustableCropperBackground.displayName = "AdjustableCropperBackground";

export default AdjustableCropperBackground;
