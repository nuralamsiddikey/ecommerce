import MobileAppBar from "@/components/mobile-app-bar/mobile-app-bar";
import ProductCard from "@/components/product-card/product-card";
import SectionTitle from "@/components/section-title";
import { buttonVariants } from "@/components/ui/button";
import { productList } from "@/fake-data/product-list";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="custom-container h-full w-full lg:pb-[40px] pb-[100px]">
      {/* Mobile App bar */}
      <MobileAppBar title="Not found" />

      {/*  */}
      <div className="w-full flex flex-col items-center justify-center h-[397px] bg-white rounded-[4px] lg:mt-[31px]">
        <Image
          src="/assets/images/error.svg"
          height={171}
          width={240}
          alt="Not Found"
        />
        <h2 className="lg:text-[32px] text-[21px] font-semibold text-orange leading-[21px]">
          We’re Sorry, an error has occurred
        </h2>
        <p className="lg:text-[20px] text-[14px] text-center leading-[21px] font-semibold text-[#4C4C4C] mt-4">
          We seem to have lost this page but we don’t want to lose you.
        </p>
        <Link
          href="/"
          className={`w-[229px] h-[40px] rounded-[4px] text-base font-semibold mt-[34px] ${cn(
            buttonVariants({})
          )}`}
        >
          BACK TO HOMEPAGE
        </Link>
      </div>

      {/*  */}
      <SectionTitle title="Just For You" className="pt-[25px] pb-[11px]" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-[7px] gap-y-[12px]">
        {productList?.map((data) => {
          return (
            <ProductCard
              key={data.id}
              productName={data.product_name}
              slug={data.slug}
              price={data.price}
              discountPrice={data.discount_price}
              discount={data.discount}
              totalSell={data.total_sell}
              freeDelivery={data.free_delivery}
              img={data.img}
            />
          );
        })}
      </div>
    </div>
  );
}
