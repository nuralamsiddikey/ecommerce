import Avatar from "@/components/avatar";
import Image from "next/image";
import Link from "next/link";
import EditPersonalProfile from "./edit-personal-profile";
import LogoutButton from "./logout-button";

export default function MyAccountMobile() {
  return (
    <div className="lg:hidden block h-full pb-[83px]">
      <div className="h-full flex flex-col justify-between ">
        <div className="flex-1">
          <div className="flex  justify-between bg-white rounded-[4px] p-4">
            <div className="flex items-center gap-[13px]">
              <Avatar src="/assets/images/user.svg" size="sm" />
              <div>
                <h2 className="text-[20px] text-primary-gray font-semibold">
                  Umme Honey
                </h2>
                <p className="text-xs text-primary-gray font-normal">
                  01734782489347
                </p>
              </div>
            </div>
            <div>
              <EditPersonalProfile
                customTriggerButton={
                  <button className="text-orange ps-[16px] text-sm font-medium">
                    Edit
                  </button>
                }
              />
            </div>
          </div>

          <div className="mt-[44px] space-y-[16px]">
            <Link
              href="/account/my-address"
              className="p-4 rounded-[4px] bg-white flex items-center justify-between text-base font-normal text-primary-gray"
            >
              <span>My address</span>
              <Image
                src="/assets/icons/right-angel.svg"
                width={11}
                height={22}
                alt="arrow"
                className="h-[22px] w-[11px]"
              />
            </Link>

            <Link
              href="/account/my-orders"
              className="p-4 rounded-[4px] bg-white flex items-center justify-between text-base font-normal text-primary-gray"
            >
              <span>My Order</span>
              <Image
                src="/assets/icons/right-angel.svg"
                width={11}
                height={22}
                alt="arrow"
                className="h-[22px] w-[11px]"
              />
            </Link>
          </div>
        </div>

        {/* Logout */}
        <div className="">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
