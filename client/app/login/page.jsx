import Auth from "@/components/auth";
import MobileAppBar from "@/components/mobile-app-bar/mobile-app-bar";
import Image from "next/image";

export default function Login() {
  return (
    <div className="custom-container h-full">
      {/* Mobile App Bar */}
      <MobileAppBar
        titleElement={
          <div className="flex items-center gap-[6px] justify-center w-full">
            {/* <Image
              src="/assets/images/logo.png"
              height={22}
              width={22}
              alt="logo"
              className="w-[22px] h-[22px]"
            /> */}
            <h2 className="text-base font-semibold text-primary-gray">
              Fashion Glory
            </h2>
          </div>
        }
      />

      <div className="lg:h-full lg:w-[600px] w-full lg:mx-auto lg:flex-col lg:flex lg:items-center lg:justify-center">
        <div className="lg:block hidden">
          <div className="flex items-center gap-[33px] justify-center">
            {/* <Image
              src="/assets/images/logo.png"
              height={75}
              width={75}
              alt="Logo"
              className="w-[75px] h-[75px]"
            /> */}
            <h2 className="text-[48px] font-semibold text-primary-gray">
              Fashion Glory
            </h2>
          </div>
        </div>

        <div className="w-full ">
          <Auth />
        </div>
      </div>
    </div>
  );
}
