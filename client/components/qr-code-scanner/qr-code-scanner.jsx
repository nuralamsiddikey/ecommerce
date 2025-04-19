"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import QrScanner from "qr-scanner";
import { useEffect, useRef, useState } from "react";
import MobileAppBar from "../mobile-app-bar/mobile-app-bar";

export default function QrCodeScanner() {
  // Local State
  const [isOpen, setIsOpen] = useState(false);
  const scanner = useRef();
  const videoEl = useRef(null);
  const qrBoxEl = useRef(null);
  const [qrOn, setQrOn] = useState(true);
  console.log("QR Scanner is on: ", qrOn);
  const [scannedResult, setScannedResult] = useState("");

  console.log("Scanned Result: ", scannedResult);

  // Success
  const onScanSuccess = (result) => {
    // 🖨 Print the "result" to browser console.
    console.log(result);
    // ✅ Handle success.
    // 😎 You can do whatever you want with the scanned result.
    setScannedResult(result?.data);
  };

  // Fail
  const onScanFail = (err) => {
    // 🖨 Print the "err" to browser console.
    console.log(err);
  };

  useEffect(() => {
    if (videoEl?.current && !scanner.current) {
      // 👉 Instantiate the QR Scanner
      scanner.current = new QrScanner(videoEl?.current, onScanSuccess, {
        onDecodeError: onScanFail,
        // 📷 This is the camera facing mode. In mobile devices, "environment" means back camera and "user" means front camera.
        preferredCamera: "environment",
        // 🖼 This will help us position our "QrFrame.svg" so that user can only scan when qr code is put in between our QrFrame.svg.
        highlightScanRegion: true,
        // 🔥 This will produce a yellow (default color) outline around the qr code that we scan, showing a proof that our qr-scanner is scanning that qr code.
        highlightCodeOutline: true,
        // 📦 A custom div which will pair with "highlightScanRegion" option above 👆. This gives us full control over our scan region.
        overlay: qrBoxEl?.current || undefined,
      });

      // 🚀 Start QR Scanner
      scanner?.current
        ?.start()
        .then(() => setQrOn(true))
        .catch((err) => {
          if (err) setQrOn(false);
        });
    }

    // 🧹 Clean up on unmount.
    // 🚨 This removes the QR Scanner from rendering and using camera when it is closed or removed from the UI.
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (!videoEl?.current) {
        scanner?.current?.stop();
      }
    };
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="border-none outline-none focus:border-none focus:outline-none flex flex-col items-center"
      >
        <Image
          src="/assets/icons/scan.svg"
          height={18}
          width={18}
          alt="Scan Icon"
        />
        <span className="text-[10px] font-normal">Scan</span>
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="h-full z-[1000]">
          <MobileAppBar
            title="QR Code Scanner"
            onGoBack={() => {
              setIsOpen(false);
            }}
          />

          <div>
            <div className="qr-reader">
              {/* QR */}
              <video ref={videoEl}></video>
              <div ref={qrBoxEl} className="qr-box">
                <Image
                  src="/assets/images/user.svg"
                  alt="Qr Frame"
                  width={256}
                  height={256}
                  className="qr-frame"
                />
              </div>

              {/* Show Data Result if scan is success */}
              {scannedResult && (
                <p
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 99999,
                    color: "white",
                  }}
                >
                  Scanned Result: {scannedResult}
                </p>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
