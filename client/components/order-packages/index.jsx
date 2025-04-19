import OrderPackageItem from "./order-packge-item";

export default function OrderPackages({
  title,
  rightSubtitle,
  isAbleToDeleteProduct = false,
  disableTitleInMobile = false,
  updateCart = false,
  bottomActionElement,
  orderItems = [],
}) {
  return (
    <div className="">
      {!disableTitleInMobile && (
        <div className="lg:px-[28px] lg:py-[14px] lg:bg-[#D8D8D8] flex items-center justify-between">
          {title && (
            <h2 className="text-base font-semibold leading-[24px] text-primary-gray">
              {title}
            </h2>
          )}

          {rightSubtitle && (
            <p className="text-[13px] text-primary-gray font-normal">
              {rightSubtitle}
            </p>
          )}
        </div>
      )}

      <div className="lg:bg-white lg:py-[30px] lg:px-[28px] lg:mt-0 mt-[4px] lg:divide-y divide-none divide-[#C4C4C4] lg:space-y-0 space-y-[10px]">
        {orderItems?.map((product) => (
          <OrderPackageItem
            key={product.cart_id}
            product={product}
            isAbleToDeleteProduct={isAbleToDeleteProduct}
            updateCart={updateCart}
          />
        ))}

        {/* Bottom Action */}
        {bottomActionElement && (
          <div className="lg:pt-[20px]">{bottomActionElement}</div>
        )}
      </div>
    </div>
  );
}
