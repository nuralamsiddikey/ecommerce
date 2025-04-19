"use client";

import OrderPackages from "@/components/order-packages";
import OrderSummary from "@/components/order-summary";
import { Button, buttonVariants } from "@/components/ui/button";
import { orderInfoData, orderProducts } from "@/fake-data/order";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import DeliveryInfoForm from "./delivery-info-form";
import { useOrderContext } from "@/context/orderContext";
import toast from "react-hot-toast";
import { baseUrl } from "@/lib/baseUrl";
import { useAuth } from "@/context/authContext";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

const dbAddress = null;

export default function Checkout() {
  const { getToken, isAuthenticated } = useAuth();
  const { order } = useOrderContext();
  const router = useRouter();

  const searchParams = useSearchParams();
  const isCart = searchParams.get("cart") === "true";
  const token = getToken();

  const fetcherWithToken = async (url) => {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    return res.json();
  };

  const { data, error, isLoading } = useSWR(
    `${baseUrl}/api/carts`,
    fetcherWithToken
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const placeOrderHandler = async () => {
    if (!isAuthenticated()) {
      toast.error("Please login to place an order");
      router.push("/login");
      return;
    }

    const token = getToken();

    if (
      order.full_name === "" ||
      order.phone === "" ||
      order.division === "" ||
      order.city === "" ||
      order.police_station === "" ||
      order.address_line === ""
    ) {
      toast.error("Please fill up the delivery form");
      return;
    }

    if (isCart) {
      const result = data.data.map((cart) => {
        return {
          full_name: order.full_name,
          phone: order.phone,
          division: order.division,
          city: order.city,
          police_station: order.police_station,
          address_line: order.address_line,
          cart_id: cart.cart_id,
          product_id: cart.product_id,
          quantity: cart.quantity,
        };
      });

      try {
        const res = await fetch(`${baseUrl}/api/orders/carts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `${token}`,
          },
          body: JSON.stringify({data: result}),
        });

       // const result = await res.json();

        if (res.ok) {
          router.push("/account/my-orders");
          toast.success("Order placed successfully");
        } else {
          toast.error("Failed to place order");
        }
      } catch (err) {
        console.error("Register error:", err.message);
        toast.error("Failed to place order");
      }
      


    } else {
      try {
        const res = await fetch(`${baseUrl}/api/orders`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `${token}`,
          },
          body: JSON.stringify(order),
        });

        const result = await res.json();

        if (res.ok) {
          router.push("/account/my-orders");
          toast.success("Order placed successfully");
        } else {
          toast.error("Failed to place order");
        }
      } catch (err) {
        console.error("Register error:", err.message);
        toast.error("Failed to place order");
      }
    }
  };

  return (
    <div className="flex gap-[20px] lg:flex-nowrap md:flex-wrap flex-wrap">
      <div className="lg:w-[750px] md:w-full w-full space-y-[20px]">
        <DeliveryInfoForm />
        <Link href="/" className={`${cn(buttonVariants({}))} px-[55px]`}>
          Continue Shopping
        </Link>

        {isCart && (
          <OrderPackages
            title="Carts"
            orderItems={data?.data}
            updateCart={true}
            isAbleToDeleteProduct={true}
          />
        )}
      </div>
      <div className="lg:w-[419px]  md:w-full w-full">
        <OrderSummary
          showDiscount
          orderInfo={orderInfoData}
          invoiceEditAccess={dbAddress?.length > 0}
          // invoiceEditAccess={true}

          bottomActionElement={
            <div className="mt-[38px]">
              <div className="lg:static fixed bottom-0 left-1/2 translate-x-[-50%] lg:translate-x-0 bg-white w-full lg:w-auto flex items-center justify-center lg:justify-end min-sm-flex-col-reverse gap-2 lg:p-0 p-4 lg:m-0 mb-[64px] lg:shadow-none shadow-custom">
                <div className="w-full lg:block hidden">
                  <Button onClick={placeOrderHandler} className="w-full">
                    Place order
                  </Button>
                </div>
                <div className="w-full lg:hidden block">
                  <div className="w-full flex items-center justify-between">
                    <div>
                      <h2 className="text-[13px] text-primary-gray font-medium">
                        Total:{" "}
                        <span className="text-[20px] text-orange">৳ 2000</span>
                      </h2>
                    </div>
                    <Button
                      onClick={placeOrderHandler}
                      className="w-[97px] h-[34px]"
                    >
                      Place order
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
