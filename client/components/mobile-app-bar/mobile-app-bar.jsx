"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MobileAppBar({
  title,
  disableBottomGap = false,
  titleElement,
  onGoBack = null,
}) {
  // Hooks
  const router = useRouter();

  /**
   * HANDLERS
   */
  const handleBack = () => {
    router.back();
  };

  return (
    <div
      className={`lg:hidden block p-4 py-5 ps-0 ${disableBottomGap && "pb-0"}`}
    >
      <div className="flex items-center">
        <div className="flex items-center justify-center">
          <button
            onClick={onGoBack ? onGoBack : handleBack}
            className="border-none outline-none focus:outline-none ring-0 focus:ring-0"
          >
            <ChevronLeft />
          </button>
        </div>
        {title && (
          <div className="flex-1 text-center">
            <h2 className="text-base text-primary-gray font-semibold">
              {title}
            </h2>
          </div>
        )}
        {titleElement && titleElement}
      </div>
    </div>
  );
}
