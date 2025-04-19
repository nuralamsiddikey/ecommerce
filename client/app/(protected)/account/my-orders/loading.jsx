import MobileAppBar from "@/components/mobile-app-bar/mobile-app-bar";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronRight } from "lucide-react";

export default function OrdersLoading() {
  return (
    <div className="custom-container h-full w-full">
      {/* Mobile App Bar */}
      <MobileAppBar title="My Order" />

      <Skeleton className="w-[83px] h-[24px] lg:block hidden" />
      <Skeleton className="w-full h-[22px] mt-[23px] lg:block hidden" />

      <div className="lg:mt-10">
        {Array.from(Array(3)).map((_, index) => (
          <div key={index} className="mt-[15px] first:mt-0">
            <Skeleton className="w-[90px] h-[21px]" />
            <div className="mt-[16px] space-y-[10px]">
              <div className="w-full h-[84px] lg:grid flex justify-between items-center lg:grid-cols-4 grid-cols-2 lg:px-[29px] px-[18px] py-[7px] rounded-[4px] bg-white">
                <div className="h-full w-full lg:block hidden">
                  <div className="h-full w-full flex items-start justify-center flex-col">
                    <Skeleton className="h-[24px] w-[70px] mb-2" />
                    <Skeleton className="h-[24px] w-[100px]" />
                  </div>
                </div>

                {/* Only for Tablate & Mobile */}
                <div className="lg:hidden block">
                  <div className="flex-1 flex items-start justify-center flex-col">
                    <Skeleton className="h-[24px] w-[120px] mb-2" />
                    <Skeleton className="h-[24px] w-[70px]" />
                  </div>
                </div>

                {/* Only for Desktop */}
                <div className="lg:block hidden">
                  <div className="h-full w-full flex items-start justify-center flex-col">
                    <Skeleton className="w-[170px] h-[21px] mb-2" />
                    <Skeleton className="w-[150px] h-[21px]" />
                  </div>
                </div>

                <div className="lg:block hidden">
                  <div className="h-full w-full flex items-center justify-center">
                    <Skeleton
                      className={`w-[239px] h-[41px] rounded-[4px] flex items-center justify-center`}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end lg:w-full w-[50px]">
                  <Skeleton className="w-[165px] h-[40px] lg:block hidden" />
                  <div className="lg:hidden block">
                    <ChevronRight size={20} className="" />
                  </div>
                </div>
              </div>
              <div className="w-full h-[84px] lg:grid flex justify-between items-center lg:grid-cols-4 grid-cols-2 lg:px-[29px] px-[18px] py-[7px] rounded-[4px] bg-white">
                <div className="h-full w-full lg:block hidden">
                  <div className="h-full w-full flex items-start justify-center flex-col">
                    <Skeleton className="h-[24px] w-[70px] mb-2" />
                    <Skeleton className="h-[24px] w-[100px]" />
                  </div>
                </div>

                {/* Only for Tablate & Mobile */}
                <div className="lg:hidden block">
                  <div className="flex-1 flex items-start justify-center flex-col">
                    <Skeleton className="h-[24px] w-[120px] mb-2" />
                    <Skeleton className="h-[24px] w-[70px]" />
                  </div>
                </div>

                {/* Only for Desktop */}
                <div className="lg:block hidden">
                  <div className="h-full w-full flex items-start justify-center flex-col">
                    <Skeleton className="w-[170px] h-[21px] mb-2" />
                    <Skeleton className="w-[150px] h-[21px]" />
                  </div>
                </div>

                <div className="lg:block hidden">
                  <div className="h-full w-full flex items-center justify-center">
                    <Skeleton
                      className={`w-[239px] h-[41px] rounded-[4px] flex items-center justify-center`}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end lg:w-full w-[50px]">
                  <Skeleton className="w-[165px] h-[40px] lg:block hidden" />
                  <div className="lg:hidden block">
                    <ChevronRight size={20} className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
