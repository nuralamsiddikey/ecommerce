"use client";

import CircleButton from "@/components/ui/circle-button";
import IconTextLink from "@/components/ui/icon-text-link";
import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useOrderContext } from "@/context/orderContext";

const ProductInfo = ({ product }) => {
  // Local State
  const [cartOption, setCartOption] = useState({
    color: "White",
    size: "Small",
  });

  const { order, setOrder} = useOrderContext();

  const { title,description,price ,product_id} = product;

  const colors = [
    "#161616",
    "#FD651C",
    "#0085FF",
    "#0085FF",
    "#FF0000",
    "#C03BFF",
    "#465569",
    "#FFFFFF",
  ];

  const sizes = ["S", "M", "L", "XL", "XXL"];

  /**
   * HANDLERS
   */
  const handleColorChange = (color) => {
    setCartOption((prev) => ({ ...prev, color }));
  };

  const handleSizeChange = (size) => {
    setCartOption((prev) => ({ ...prev, size }));
  };

  const handleQuantityChange = (type) => {
    setOrder((prev) => {
      const quantity =
        type === "increment" ? prev.quantity + 1 : prev.quantity - 1;
      return { ...prev, quantity };
    });
  };

  useEffect(()=> {
     setOrder((prev)=> ({...prev,product_id}))
  },[product_id])

  
  return (
    <div className="py-6 lg:py-8 lg:pb-5 pe-3 px-3 lg:px-0">
      <h3 className="text-base font-semibold text-[#161616] line-clamp-2">
        {title}
      </h3>

      <h3 className="text-base mt-3 text-[#161616] line-clamp-2">
        {description}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 mt-4">
        <div className="flex items-center gap-1">
          <h6 className="text-base font-semibold text-primary-gray">Brand:</h6>
          <h6 className="text-[16px] leading-[21px] font-semibold text-orange">
            No Brand
          </h6>
        </div>
        <div className="flex items-center gap-1">
          <h6 className="text-base font-semibold text-primary-gray">
            Made In:
          </h6>
          <h6 className="text-[16px] leading-[21px] font-semibold text-orange">
            Bangladesh
          </h6>
        </div>
        <div className="flex items-center gap-1">
          <h6 className="text-base font-semibold text-primary-gray">
            Authentication:
          </h6>
          <h6 className="text-[16px] leading-[21px] font-semibold text-orange">
            Orginal
          </h6>
        </div>
      </div>

      <div className="mt-5 mb-1 flex sm:flex-col gap-2 sm:gap-0">
        <h2 className="text-4xl font-bold text-orange">৳ {price}</h2>
      </div>

      <div className="w-full h-[1px] bg-fifth-gray hidden sm:block"></div>

      <div className="flex flex-col-reverse sm:flex-col mt-4 sm:mt-2 mx-0 sm:ms-3 sm:me-6">
        <div className="sm:mb-6">
          <div className="flex items-center gap-1 mb-1">
            <h6 className="text-base font-bold text-primary-gray">Color:</h6>
            <h6 className="text-base text-deep-black">White</h6>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {colors?.map((color, index) => (
              <CircleButton
                onClick={() => handleColorChange(color)}
                key={index}
                bgColor={color}
              />
            ))}
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 mb-1">
              <h6 className="text-base font-bold text-primary-gray">Size:</h6>
              <h6 className="text-base text-deep-black">Small</h6>
            </div>
            <IconTextLink
              label="Size Chart"
              href="#"
              className={"text-[13px]"}
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {sizes?.map((size, index) => (
              <CircleButton key={index}>{size}</CircleButton>
            ))}
          </div>
        </div>
        <div className="mb-6 sm:mb-0 flex items-center justify-between">
          <h6 className="text-base font-bold text-primary-gray">Quantity:</h6>
          <div className="flex items-center gap-4 justify-start">
            <CircleButton
              onClick={() => handleQuantityChange("decrement")}
              disabled={order.quantity === 1}
            >
              <Minus size={17} color="#161616" />
            </CircleButton>
            <div className="font-semibold text-deep-black">
              {order.quantity}
            </div>
            <CircleButton onClick={() => handleQuantityChange("increment")}>
              <Plus size={17} color="#161616" />
            </CircleButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
