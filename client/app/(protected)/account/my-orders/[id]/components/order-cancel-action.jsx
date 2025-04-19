import Link from "next/link";

export default function OrderCancelAction({ orderId }) {
  return (
    <div className="lg:static fixed bottom-0 left-1/2 translate-x-[-50%] lg:translate-x-0 bg-white w-full lg:w-auto flex items-center justify-center lg:justify-end min-sm-flex-col-reverse gap-2 lg:p-0 p-4 lg:m-0 mb-[64px] lg:shadow-none shadow-custom">
      <div className="w-full lg:block hidden">
        <Link
          href={`/account/my-orders/${orderId}/cancel`}
          className={`text-base font-semibold rounded-[4px] text-white flex items-center justify-center bg-[#BB0000] w-[229px] h-[40px]`}
        >
          Cancel Order
        </Link>
      </div>
      <div className="w-full lg:hidden block">
        <div className="w-full flex items-center justify-between gap-[8px]">
          <div>
            <button>
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="34" height="34" rx="17" fill="#00C34E" />
                <path
                  d="M23 19C23 19.3536 22.8595 19.6928 22.6095 19.9428C22.3594 20.1929 22.0203 20.3333 21.6667 20.3333H13.6667L11 23V12.3333C11 11.9797 11.1405 11.6406 11.3905 11.3905C11.6406 11.1405 11.9797 11 12.3333 11H21.6667C22.0203 11 22.3594 11.1405 22.6095 11.3905C22.8595 11.6406 23 11.9797 23 12.3333V19Z"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <Link
            href={`/account/my-orders/${orderId}/cancel`}
            className="w-full h-[34px] bg-[#D8D8D8] text-[13px] text-[#423E3E] rounded-[4px] flex items-center justify-center"
          >
            Cancel Order
          </Link>
        </div>
      </div>
    </div>
  );
}
