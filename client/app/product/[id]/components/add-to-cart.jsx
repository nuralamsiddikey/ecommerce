"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import ProductCard from "@/components/product-card/product-card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { productList } from "@/fake-data/product-list";
import { DialogClose } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import Image from "next/image";

export default function AddToCart({handleCart}) {
  // Local State
  const [isCartComplete, setIsCartComplete] = useState(false);


  const addToCartHandler = () => {
       handleCart()
  };

  /**
   * EFFECTS
   */
  useEffect(() => {
    if (isCartComplete) {
      setTimeout(() => {
        setIsCartComplete(false);
      }, 1000);
    }
  }, [isCartComplete]);

  return (
    <>
      <Button
        onClick={addToCartHandler}
        size="lg"
        className={"w-[90%] sm:w-[190px] uppercase"}
      >
        Add To Cart
      </Button>

      {/* Cart Success Message */}
      <div className="lg:block hidden">
        <Dialog open={isCartComplete} onOpenChange={setIsCartComplete}>
          <DialogContent className="sm:max-w-[871px] p-0 pb-[45px] bg-[#F5F5F5]">
            {/* Close */}
            <div className="flex items-center justify-end px-[37px] py-[18px]">
              <DialogClose>
                <X size={20} />
              </DialogClose>
            </div>

            {/* Success Message */}
            <div className="flex items-center gap-[17px] py-[20px] px-[37px] border-t border-b border-[#D8D8D8]">
              <Image
                src="/assets/icons/blue-fill-check.svg"
                width={28}
                height={28}
                alt="check"
                className="w-[28px] h-[28px]"
              />
              <h2 className="text-base font-medium text-[#097000]">
                Added Order successfully
              </h2>
            </div>

            {/* Products */}
            <div className="lg:block hidden px-[37px]">
              <h2 className="text-[20px] text-[#434343] font-bold">
                Just For You
              </h2>

              <div className="grid grid-cols-4 gap-[10px] mt-[20px]">
                {productList?.slice(0, 4)?.map((product) => (
                  <ProductCard
                    key={product.id}
                    productName={product.product_name}
                    slug={product.slug}
                    price={product.price}
                    discountPrice={product.discount_price}
                    discount={product.discount}
                    totalSell={product.total_sell}
                    freeDelivery={product.free_delivery}
                    img={product.img}
                  />
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
