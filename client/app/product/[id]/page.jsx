"use client";

import ProductCard from "@/components/product-card/product-card";
import SectionTitle from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { productList } from "@/fake-data/product-list";
import { Phone } from "lucide-react";
import DeliveryAddress from "./components/delivery-address";
import ProductImage from "./components/product-image";
import ProductInfo from "./components/product-info";
import { fetcher } from "@/lib/fetcher";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import AddToCart from "./components/add-to-cart";
import BuyNow from "./components/buy-now";
import useSWR from "swr";
import { baseUrl } from "@/lib/baseUrl";
import { useOrderContext } from "@/context/orderContext";
import { useAuth } from "@/context/authContext";
import toast from "react-hot-toast";


const ProductDetails = ({ params }) => {
 const {order} = useOrderContext()
 const {isAuthenticated,getToken} = useAuth()

  const { data, error, isLoading } = useSWR(
    `${baseUrl}/api/products/${params.id}`,
    fetcher
  );

  const handleCart = async() => {

    if (!isAuthenticated()) { 
      toast.error("Please login to place an order");
      router.push("/login");
      return;
    }

    const token = getToken()
    try {
      const res = await fetch(`${baseUrl}/api/carts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `${token}`,
        },
        body: JSON.stringify({product_id: params.id,quantity: order.quantity}),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Add to cart successfully");
       
      } else {
        toast.error("Failed add to cart");
      }
    } catch (err) {
      toast.error("Failed add to cart");
    }
  };

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="custom-container lg:!mb-[20px] md:mb-[150px] !mb-[241px]">
      <div className="py-3 lg:block hidden">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Fashion</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/components">Men</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div>
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="sm:bg-white w-full  rounded-t-[5px] lg:rounded-tr-[0px] lg:rounded-l-[5px] pe-0 lg:pe-8">
            <div className="flex flex-wrap lg:flex-nowrap gap-x-[7px] ">
              <div className=" w-full lg:w-[48%]">
                <ProductImage images={[data?.data?.image]} />
              </div>
              <div className="bg-white w-full lg:w-[52%] rounded-t-[5px] sm:rounded-t-[0px]">
                <ProductInfo product={data?.data} />
              </div>
            </div>
            <div className="rounded-bl-lg lg:static fixed bottom-0 left-1/2 translate-x-[-50%] lg:translate-x-0 bg-white w-full lg:w-auto flex items-center justify-center lg:justify-end min-sm-flex-col-reverse gap-2 py-3 lg:pt-4 lg:pb-12 pe-0 lg:pe-3 lg:mb-0 mb-[63px]">
              <Button
                size="lg"
                className={"bg-[#A23704] w-[90%] sm:w-[190px] uppercase"}
              >
                <Phone size={17} /> &nbsp; 0966611111
              </Button>
              <AddToCart handleCart={handleCart} />
              <BuyNow />
            </div>
          </div>
          {/* 
          <div className="w-full lg:w-[30%]">
            <DeliveryAddress />
          </div> */}
        </div>

        {/* <SectionTitle title="You May Like" className="pt-[25px] pb-[8px]" /> */}

        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-[7px] gap-y-[12px]">
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
        </div> */}
      </div>
    </div>
  );
};

export default ProductDetails;
