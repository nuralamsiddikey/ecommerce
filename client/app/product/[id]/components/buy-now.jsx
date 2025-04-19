"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function BuyNow() {
  // Hooks
  const router = useRouter();

  /**
   * HANDLERS
   */
  const buyNowHandler = () => {
    router.push("/checkout");
  };

  return (
    <Button
      onClick={buyNowHandler}
      size="lg"
      className={"w-[90%] sm:w-[190px] uppercase"}
    >
      Buy Now
    </Button>
  );
}
