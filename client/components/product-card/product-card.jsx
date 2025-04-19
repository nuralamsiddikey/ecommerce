"use client";

import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import Link from "next/link";

const ProductCard = ({ id, title, description, image, price, count, rate }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
   <Link href={`/product/${id}`}>
      <Card className="h-full shadow-md">
      <div className="relative w-full h-44 overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className={`transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          placeholder="blur"
          blurDataURL={image}
          onLoadingComplete={() => setImageLoaded(true)}
        />
      </div>

      {/* Product Info */}
      <div className="pt-4 space-y-2 p-4">
        <h3 className="text-sm font-medium line-clamp-2">{title}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2">
          {description || "No description provided."}
        </p>
        <p className="text-base font-semibold text-primary mt-1">
          ৳{parseFloat(price).toFixed(2)}
        </p>

        {/* Rating Section */}
        <div className="flex items-center space-x-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={14}
                className={
                  index < Math.round(rate)
                    ? "fill-yellow-500 text-yellow-500"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
          <p className="text-xs text-gray-500">{count} in stock</p>
        </div>
      </div>
    </Card>
   
   </Link>
  );
};

export default ProductCard;
