"use client";

import CategoryCard from "@/components/category/category-card";
import ProductCard from "@/components/product-card/product-card";
import SectionTitle from "@/components/section-title";
import { categories } from "@/fake-data/categories";
import { productList } from "@/fake-data/product-list";
import { baseUrl } from "@/lib/baseUrl";
import Image from "next/image";
import useSWR, { mutate } from "swr";
import { fetcher } from "@/lib/fetcher";

export default function Home() {
  const { data, error, isLoading } = useSWR(`${baseUrl}/api/products`, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="lg:pb-[50px] pb-[110px]">
      {/* Banner */}
      <div className="">
        <Image
          width={1187}
          height={374}
          src="/assets/images/banner.png"
          className="w-[1187px] mx-auto"
          alt="Banner"
        />
      </div>

      <div className="custom-container">
        {/* Categories */}
        <div className="lg:bg-transparent bg-white lg:p-0 p-[12px] mt-[10px] pt-0 lg:mt-0 rounded-[4px]">
          {/* Categories */}
          <SectionTitle title="Categories" className="lg:pt-[25px] pb-[11px]" />
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {categories?.map((category) => (
              <CategoryCard key={category?.id} category={category} />
            ))}
          </div>
        </div>

        <SectionTitle title="Just For You" className="pt-[25px] pb-[11px]" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-x-[10px] gap-y-[12px]">
          {data?.data?.result.map((item) => {
            return (
              <ProductCard
                key={item.product_id}
                id={item.product_id}
                title={item.title}
                description={item.description}
                image={item.image}
                price={item.price}
                count={item.stock_qty}
                rate={item.rating || 4}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
