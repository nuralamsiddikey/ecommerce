"use client";

import CircleButton from "@/components/ui/circle-button";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import OrderProductDeleteModal from "./order-product-delete-modal";

export default function OrderPackageItem({
  product,
  isAbleToDeleteProduct = false,
  updateCart = false,
}) {
  // Local State
  // const [localQuantity, setLocalQuantity] = useState(quantity);

  /**
   * HANDLERS
   */
  const quantityChangeHandler = (type) => {
    if (type === "increment") {
      setLocalQuantity((prev) => prev + 1);
    } else {
      setLocalQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="flex items-center lg:gap-[47px] gap-[10px] lg:py-[18px] p-[10px]  bg-white rounded-[4px] lg:first:pt-0 last:pb-0">
      {/* Image */}
      <div>
        <Image
          src={product?.product?.image}
          height={78}
          width={78}
          className="w-[78px] h-[78px]"
          alt="product"
        />
      </div>
   
      <div className="flex-1 flex items-center justify-between lg:gap-[130px] gap-[10px]">
        <div className="flex-1 lg:space-y-2 space-y-1 ">
          <div>
            <h2 className="text-primary-gray text-sm font-semibold leading-[16px] lg:line-clamp-1 line-clamp-1">
              {product.product.title}
            </h2>
          </div>
          <div className="flex items-center justify-between">
            {/* Price for mobile */}
            <div className="lg:hidden md:block block">
              <p className="text-sm text-quaternary-gray">
                <span>৳ {product.price}</span>
                <span>x</span>
                <span>{product.quantity}</span>
              </p>
              <h2 className="text-base text-orange font-bold leading-normal">
                ৳ {product.price * product.quantity}
              </h2>
            </div>

            {/* Quantity Action for mobile */}
            <div className="lg:block md:hidden hidden">
              <div className="flex items-center gap-3 justify-start">
                <CircleButton
                  disabled={!updateCart || product.quantity === 1}
                  size="sm"
                  onClick={() => quantityChangeHandler("decrement")}
                >
                  <Minus size={14} color="#161616" />
                </CircleButton>
                <div className="font-semibold text-[13px] text-deep-black">
                  {product.quantity}
                </div>
                <CircleButton
                  disabled={!updateCart}
                  size="sm"
                  onClick={() => quantityChangeHandler("increment")}
                >
                  <Plus size={14} color="#161616" />
                </CircleButton>
              </div>
            </div>

            {/* Quantity & Delete */}
            <div className="flex items-center gap-[10px]">
              <p className="text-sm font-semibold text-[#333333] leading-normal lg:block md:hidden hidden">
                Qty: {product.quantity}
              </p>

              {/* For mobile */}
              <div className="lg:hidden md:block block">
                <div className="flex items-center gap-3 justify-start">
                  <CircleButton disabled size="sm">
                    <Minus size={14} color="#161616" />
                  </CircleButton>
                  <div className="font-semibold text-[13px] text-deep-black">
                    1
                  </div>
                  <CircleButton size="sm">
                    <Plus size={14} color="#161616" />
                  </CircleButton>
                </div>
              </div>

              {/* Item Delete */}
              {isAbleToDeleteProduct && <OrderProductDeleteModal />}
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="lg:block md:hidden hidden">
          <h2 className="text-base text-orange font-bold leading-normal">
            ৳ {product.product.price * product.quantity}
          </h2>
          <p className="text-sm text-quaternary-gray">
            <span>৳ {product.product.price}</span>
            <span>x</span>
            <span>{product.quantity}</span>
          </p>
          {/* <p className="text-sm text-quaternary-gray relative after:content-[''] after:absolute  after:w-full inline-block after:h-[0.1px] after:bg-light-black after:left-1/2 after:top-1/2 after:translate-x-[-50%] after:translate-y-[-50%]">
            ৳900
          </p> */}
        </div>
      </div>
    </div>
  );
}
