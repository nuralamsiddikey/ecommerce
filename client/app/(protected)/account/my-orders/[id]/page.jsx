import MobileAppBar from "@/components/mobile-app-bar/mobile-app-bar";
import OrderPackages from "@/components/order-packages";
import OrderSummary from "@/components/order-summary";
import ShippingBillingInfo from "@/components/shipping-billing-info";
import { buttonVariants } from "@/components/ui/button";
import { orderProducts } from "@/fake-data/order";
import { cn } from "@/lib/utils";
import Link from "next/link";
import OrderCancelAction from "./components/order-cancel-action";
import OrderInfo from "./components/order-info";
import OrderStatus from "./components/order-status";

export const metadata = {
  title: "Order Detail - Fahion Glory",
  description: "Order Detail - Fahion Glory",
};

// {
//   /* Mobile App Bar */
// }

export default function OrderDetailPage({ params: { id } }) {
  // const order = myOrdersData.find((order) => order.id === parseInt(id));
  // console.log(order);
  const order = orderProducts(1, "Order Process");

  return (
    <>
      <MobileAppBar title="Order Details" />

      <div className="container py-10 lg:pb-10 pb-[180px] lg:pt-10 pt-0">
        {/* Order Id for mobile & Tablat */}
        <div className="lg:hidden block bg-white p-[10px] rounded-[4px]">
          <h2 className="text-base text-orange font-bold">
            Order #659403201319105
          </h2>
          <p className="text-sm text-primary-gray font-normal">
            Placed on 29 May 2024
          </p>
        </div>

        <div className="flex gap-[20px] lg:flex-nowrap md:flex-wrap flex-wrap">
          <div className="lg:w-[750px] md:w-full w-full space-y-[20px] flex lg:flex-col flex-col-reverse">
            {/* Order Packages */}
            <div>
              <div className="lg:hidden block mt-[16px] mb-[10px]">
                <h2 className="text-base font-semibold leading-[24px] text-primary-gray pb-[8px]">
                  Products
                </h2>

                <OrderStatus orderStatus={order?.orderStatus} />
              </div>

              <OrderPackages
                title={`Order Details (Order Id${order?.orderId})`}
                rightSubtitle="Estimated Delivery By 15 Sep - 18 Sep "
                isAbleToDeleteProduct={true}
                updateCart={false}
                disableTitleInMobile={true}
                orderItems={order?.products}
                bottomActionElement={
                  <div>
                    <div className="">
                      {order?.orderStatus === "Order Process" ? (
                        <div className="space-x-[15px] flex items-center justify-end">
                          <OrderCancelAction orderId={order?.id} />
                          <Link
                            href="/"
                            className={`${cn(
                              buttonVariants({})
                            )} w-[237px] h-[40px] !text-base font-semibold lg:block hidden text-center`}
                          >
                            Edit Order
                          </Link>
                        </div>
                      ) : (
                        <div className="lg:block hidden">
                          <div className="space-x-[15px] flex items-center justify-between">
                            <h2 className="lg:ps-[124px] text-primary-gray text-sm font-normal leading-[22px]">
                              Total:
                            </h2>
                            <h2 className="text-tertiary-gray text-sm font-bold">
                              ৳ 54566   
                            </h2>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                }
              />
            </div>

            {/* Delivery Form  */}
            <ShippingBillingInfo
              editAccess={order?.orderStatus === "Process"}
            />
          </div>
          <div className="lg:w-[419px]  md:w-full w-full space-y-[11px]">
            {/* Order Summary */}
            <OrderSummary
              orderInfo={{
                totalItems: order?.totalItems,
                total: order?.total,
                deliveryFee: order?.deliveryFee,
                shippingFee: order?.shippingFee,
                grandTotal: order?.grandTotal,
              }}
              bottomActionElement={
                <div className="mt-[27px] lg:block hidden">
                  <hr className="border-[#D8D8D8] mb-[11px]" />
                  <OrderStatus orderStatus={order?.orderStatus} />
                </div>
              }
            />

            {/* Order Info */}
            <OrderInfo orderStatus={order?.orderStatus} />

            {/* Order Cancel Info if order status is canceled */}
            {/* {order?.orderStatus === "Cancel" && <OrderCancelInfo />} */}

            {/* Order Delivery Pending Info if order status is delivery pending */}
            {/* {order?.orderStatus === "Delivery Pending" && (
              <OrderDeliveryPendingInfo />
            )} */}

            {/* Order Delivery Complete Information */}
            {/* {order?.orderStatus === "Delivery Complete" && (
              <OrderCompleteInfo />
            )} */}

            {/* Order Confirm Info */}
            {/* {order?.orderStatus && <OrderConfirmInfo />} */}

            {/* Edir order action for mobile */}
            <div className="lg:hidden block pt-[36px]">
              <Link
                href="/"
                className={`${cn(
                  buttonVariants({})
                )} w-[237px] h-[40px] !text-base font-semibold`}
              >
                Edit Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
