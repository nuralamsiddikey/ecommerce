import ShippingAddress from "@/components/adddress-sidebar";
import MobileAppBar from "@/components/mobile-app-bar/mobile-app-bar";
import { dbAddress } from "@/fake-data/address";
import Image from "next/image";
import AddressItemDashboard from "../components/address-items-dashbaord";
import EditPersonalProfile from "../components/edit-personal-profile";
import MobileAddress from "./components/mobile-address";

export default function MyAddressPage() {
  return (
    <div className="h-full">
      <MobileAppBar title="My Address" />

      {/* My Account page for mobile */}
      <MobileAddress />

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
                  Umme Honey
                </p>
                <p className="text-base font-semibold text-primary-gray">
                  0163898932849
                </p>
              </div>
            </div>

            {/* Profile Image */}
            <div className="pt-[5px]">
              <Image
                src="/assets/images/user.svg"
                width={89}
                height={89}
                alt="User Image"
              />
            </div>
          </div>

          {/* My Address Info */}
          <div className="flex-1 bg-white rounded-[4px] min-h-[206px] px-[30px] pt-[13px] pb-[34px] lg:mt-0 ">
            <div className="flex items-center divide-x divide-black h-[38px]">
              <h2 className="text-base font-semibold text-primary-gray pe-[16px]">
                Address Book
              </h2>
              {dbAddress?.length > 0 ? (
                <ShippingAddress
                  customTriggerButton={
                    <button className="text-orange ps-[16px] text-sm font-medium">
                      Edit
                    </button>
                  }
                />
              ) : (
                <button className="text-orange ps-[16px] text-sm font-medium">
                  Add address
                </button>
              )}
            </div>

            <AddressItemDashboard />
          </div>
        </div>
      </div>
    </div>
  );
}
