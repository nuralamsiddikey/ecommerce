"use client";

import ShippingAddress from "@/components/adddress-sidebar";
import ShippingAddressForm from "@/components/adddress-sidebar/shipping-address-form";
import Avatar from "@/components/avatar";
import MobileAppBar from "@/components/mobile-app-bar/mobile-app-bar";
import { dbAddress } from "@/fake-data/address";
import AddressItemDashboard from "./components/address-items-dashbaord";
import EditPersonalProfile from "./components/edit-personal-profile";
import MyAccountMobile from "./components/my-account-mobile";
import { useAuth } from "@/context/authContext";
import useSWR from "swr";
import { baseUrl } from "@/lib/baseUrl";



export default function MyAccountPage() {
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
    `${baseUrl}/api/customers/profile`,
    fetcherWithToken
  );

  console.log("data", data);

  if (error) return <div>failed to load</div>;



  return (
    <div className="h-full">
      <MobileAppBar title="My Account" />

      {/* My Account page for mobile */}
      <MyAccountMobile />

      <div className="lg:block hidden">
        <h1 className="text-base text-primary-gray font-semibold lg:pt-[15px]">
          Manage My Account
        </h1>

        <div className="flex items-start lg:gap-[25px] mt-[15px] flex-wrap">
          {/* Personal Profile */}
          <div className="lg:w-[348px] w-full h-[206px] bg-white rounded-[4px] px-7 pt-[13px] flex justify-between">
            <div>
              <div className="flex items-center divide-x divide-black h-[38px]">
                <h2 className="text-base font-semibold text-primary-gray pe-[16px]">
                  Personal Profile
                </h2>
                <EditPersonalProfile
                  customTriggerButton={
                    <button className="text-orange ps-[16px] text-sm font-medium">
                      Edit
                    </button>
                  }
                />
              </div>

              <div className="space-y-[15px] mt-[20px]">
                <p className="text-base font-semibold text-primary-gray">
                {data?.data?.full_name}
                </p>
                <p className="text-base font-semibold text-primary-gray">
                {data?.data?.phone}
                </p>
              </div>
            </div>

            {/* Profile Image */}
            <div className="pt-[5px]">
              <Avatar size="lg" src="/assets/images/user.svg" />
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
}
