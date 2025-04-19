import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="custom-container h-full w-full">
      {/* Breadcrumb */}
      <Skeleton bg="white" className="h-[32px] w-[830px] rounded mt-[18px]" />

      <div className="flex flex-wrap lg:flex-nowrap mt-[15px]">
        <div className="sm:bg-white w-full lg:w-[70%] rounded-t-[5px] lg:rounded-tr-[0px] lg:rounded-l-[5px] pe-0 lg:pe-8">
          <div className="flex flex-wrap lg:flex-nowrap gap-x-[7px] ">
            <div className=" w-full lg:w-[48%]">
              <div className="sm:px-3 sm:pt-5 sm:pb-2 flex justify-center lg:justify-start">
                <div className="relative w-full sm:w-auto">
                  <Skeleton className="h-[330px] sm:w-[330px] w-full" />
                </div>
              </div>
              <div className="px-3 py-4 sm:py-2 w-[95%] lg:w-[90%] mx-auto flex items-center justify-center">
                <Carousel className="w-full max-w-sm">
                  <CarouselContent className="-ml-1 h-[80px]">
                    {Array.from(Array(6)).map((_, index) => (
                      <CarouselItem key={index} className="pl-1 basis-1/4">
                        <div className="py-1">
                          <Skeleton className="w-full lg:w-[76px] h-[76px] rounded-xl" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <span className="hidden sm:block">
                    <CarouselPrevious />
                    <CarouselNext />
                  </span>
                </Carousel>
              </div>
            </div>
            <div className="bg-white w-full lg:w-[52%] rounded-t-[5px] sm:rounded-t-[0px]">
              {/* <ProductInfo product={product} /> */}
              <div className="py-6 lg:pb-5 pe-3 px-3 lg:px-0">
                <Skeleton className="h-[48px] w-[404px] mb-2" />
                <div className="flex items-center justify-between">
                  <Skeleton className="h-[22px] w-[197px] mb-2" />
                  <Skeleton className="h-[22px] w-[58px] mb-2" />
                </div>

                <div className="flex items-center justify-between mt-[18px]">
                  <Skeleton className="h-[24px] w-[126px] mb-2" />
                  <Skeleton className="h-[24px] w-[164px] mb-2" />
                </div>

                <Skeleton className="h-[24px] w-[166px] mb-2" />
                <Skeleton className="h-[30px] w-[75px] mb-2 mt-[35px]" />
                <Skeleton className="h-[26px] w-[125px] mb-2" />
                <hr />

                <div className="flex items-center justify-between mt-[14px]">
                  <Skeleton className="h-[24px] w-[150px]" />
                  <div className="flex items-center gap-[6px]">
                    <Skeleton className="h-[36px] w-[36px] rounded-full" />
                    <Skeleton className="h-[36px] w-[10px] " />
                    <Skeleton className="h-[36px] w-[36px] rounded-full" />
                  </div>
                </div>

                <div className="mt-[29px]">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-[24px] w-[100px]" />
                    <Skeleton className="h-[24px] w-[70px]" />
                  </div>
                  <div className="flex items-center gap-[6px] mt-[8px]">
                    <Skeleton className="h-[39px] w-[39px] rounded-full" />
                    <Skeleton className="h-[39px] w-[39px] rounded-full" />
                    <Skeleton className="h-[39px] w-[39px] rounded-full" />
                    <Skeleton className="h-[39px] w-[39px] rounded-full" />
                    <Skeleton className="h-[39px] w-[39px] rounded-full" />
                  </div>
                </div>

                <div className="mt-[29px]">
                  <div className="">
                    <Skeleton className="h-[24px] w-[100px]" />
                  </div>
                  <div className="flex items-center gap-[6px] mt-[8px]">
                    <Skeleton className="h-[36px] w-[36px] rounded-full" />
                    <Skeleton className="h-[36px] w-[36px] rounded-full" />
                    <Skeleton className="h-[36px] w-[36px] rounded-full" />
                    <Skeleton className="h-[36px] w-[36px] rounded-full" />
                    <Skeleton className="h-[36px] w-[36px] rounded-full" />
                    <Skeleton className="h-[36px] w-[36px] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-bl-lg lg:static fixed bottom-0 left-1/2 translate-x-[-50%] lg:translate-x-0 bg-white w-full lg:w-auto flex items-center justify-center lg:justify-end min-sm-flex-col-reverse gap-2 py-3 lg:pt-4 lg:pb-12 pe-0 lg:pe-3 lg:mb-0 mb-[63px]">
            <div className="flex gap-4">
              <Skeleton className="h-[40px] w-[190px]" />
              <Skeleton className="h-[40px] w-[190px]" />
              <Skeleton className="h-[40px] w-[190px]" />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[30%]">
          <div className="bg-[#FFFBFA] h-full rounded-b-[5px] lg:rounded-bl-[0px] lg:rounded-r-[5px]">
            <div className="pt-5 px-4">
              <div className="flex items-center justify-between">
                <Skeleton className="h-[24px] w-[150px]" />
                {/* <h5 className="text-[15px] leading-[18px] font-bold text-medium-black">
                  Delivery Address
                </h5>
                <ShippingAddress /> */}
              </div>
              <div className="flex items-start gap-1 pt-3 px-2">
                <Skeleton className="w-full h-[21px]" />
              </div>
              <div className="flex items-center gap-1 pt-3 pb-5 px-2">
                <Skeleton className="w-full h-[21px]" />
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#D8D8D8]"></div>

            <div className="pt-[18px] px-4">
              <div className="flex items-center justify-between">
                <Skeleton className="h-[24px] w-[150px]" />
                <Skeleton className="h-[24px] w-[50px]" />
              </div>

              <div className="flex items-center gap-2 pt-3 px-2">
                <Skeleton className="w-full h-[21px]" />
              </div>

              <div className="flex items-center gap-2 py-3 px-2">
                <Skeleton className="w-full h-[21px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      {/*  */}
      <div className="bg-white rounded-[4px] p-4 mt-4">
        <Skeleton className="h-[150px] w-full mb-2" />
        <Skeleton className="h-[24px] w-[70%] mb-2" />
        <Skeleton className="h-[24px] w-[80%] mb-2" />
        <Skeleton className="h-[24px] w-[50%] mb-2" />
        <Skeleton className="h-[24px] w-[30%] mb-2" />
        <Skeleton className="h-[24px] w-[60%] mb-2" />
        <Skeleton className="h-[24px] w-[40%] mb-2" />
        <Skeleton className="h-[24px] w-[70%] mb-2" />
      </div>

      {/* Related Products */}
      <div className="mt-[18px]">
        <Skeleton className="w-[200px] h-[24px]" />
        <div className="mt-[10px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-[7px] gap-y-[12px]">
          {Array.from(Array(12)).map((_, index) => (
            <div key={index}>
              <Skeleton className="h-[174px] w-full" />
              <Skeleton className="h-[32px] w-full mt-1" />
              <Skeleton className="h-[14px] w-[38px] mt-[6px]" />
              <div className="flex items-center gap-1 mt-[10px]">
                <Skeleton className="h-[21px] w-full" />
                <Skeleton className="h-[21px] w-full" />
              </div>
              <Skeleton className="h-[11px] w-[68px] mt-[10px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
