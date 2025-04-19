"use client"; 


import MobileAppBar from "@/components/mobile-app-bar/mobile-app-bar";
import { myOrderByDateData } from "@/fake-data/order";
import OrderCard from "./components/order-card";
import OrderFilter from "./components/order-filter";
import { baseUrl } from "@/lib/baseUrl";
import useSWR from "swr"; 
import { useAuth } from "@/context/authContext";
import { fetcher } from "@/lib/fetcher";


// export const metadata = {
//   title: "My Orders - Fashion Glory",
//   description: "My Orders - Fashion Glory",
// };


  

export default function MyOrdersPage() {
  const { getToken } = useAuth();
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
    `${baseUrl}/api/orders`,
    fetcherWithToken
  );

  if (error) return <div>failed to load</div>;
  


  return (
    <div className="lg:pt-[15px] lg:pb-10 pb-[130px]">
      {/* Mobile App Bar */}
      <MobileAppBar title="My Order" />

      <h1 className="lg:block hidden text-base text-primary-gray font-semibold">
        My Orders
      </h1>

      {/* Order Filter */}
      <OrderFilter />

      <div className="lg:mt-10">
       {data?.data?.result.map((order) => (
          <OrderCard key={order.product_id} order={order} />
        ))}
      </div>
    </div>
  );
}
