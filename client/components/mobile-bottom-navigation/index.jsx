"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileBottomNavigation() {
  // Hooks
  const pathname = usePathname();

  /**
   * HANDLERS
   */
  const isActive = (url) => {
    return pathname === url;
  };

  /**
   * TEMP IS_LOGGED_IN
   */
  const isLoggedIn = true;

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-[#E0E0E0]">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
        <Link
          href="/"
          className="inline-flex flex-col items-center justify-center px-5"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1553_5243)">
              <path
                d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"
                fill={isActive("/") ? "#FF5A5F" : "#A3A3A3"}
              />
            </g>
            <defs>
              <clipPath id="clip0_1553_5243">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span
            className={`text-[11px] font-medium ${
              isActive("/") ? "text-orange" : "text-[#A3A3A3]"
            }`}
          >
            Home
          </span>
        </Link>

        <Link
          href="/checkout"
          className="relative inline-flex flex-col items-center justify-center px-5"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1553_5249)">
              <path
                d="M9 20.25C9 20.5467 8.91203 20.8367 8.7472 21.0834C8.58238 21.33 8.34811 21.5223 8.07403 21.6358C7.79994 21.7494 7.49834 21.7791 7.20736 21.7212C6.91639 21.6633 6.64912 21.5204 6.43934 21.3107C6.22956 21.1009 6.0867 20.8336 6.02882 20.5426C5.97094 20.2517 6.00065 19.9501 6.11418 19.676C6.22771 19.4019 6.41997 19.1676 6.66665 19.0028C6.91332 18.838 7.20333 18.75 7.5 18.75C7.89782 18.75 8.27936 18.908 8.56066 19.1893C8.84196 19.4706 9 19.8522 9 20.25ZM17.25 18.75C16.9533 18.75 16.6633 18.838 16.4166 19.0028C16.17 19.1676 15.9777 19.4019 15.8642 19.676C15.7506 19.9501 15.7209 20.2517 15.7788 20.5426C15.8367 20.8336 15.9796 21.1009 16.1893 21.3107C16.3991 21.5204 16.6664 21.6633 16.9574 21.7212C17.2483 21.7791 17.5499 21.7494 17.824 21.6358C18.0981 21.5223 18.3324 21.33 18.4972 21.0834C18.662 20.8367 18.75 20.5467 18.75 20.25C18.75 19.8522 18.592 19.4706 18.3107 19.1893C18.0294 18.908 17.6478 18.75 17.25 18.75ZM21.3844 6.3C21.314 6.20739 21.2233 6.13217 21.1193 6.08016C21.0153 6.02814 20.9007 6.00072 20.7844 6H4.52812L3.76875 3.3375C3.67769 3.0247 3.48788 2.74976 3.22766 2.55375C2.96744 2.35774 2.65078 2.25118 2.325 2.25H0.75C0.551088 2.25 0.360322 2.32902 0.21967 2.46967C0.0790176 2.61032 0 2.80109 0 3C0 3.19891 0.0790176 3.38968 0.21967 3.53033C0.360322 3.67098 0.551088 3.75 0.75 3.75H2.325L3.24375 6.94687V6.96563L5.71875 15.6188C5.85466 16.0883 6.13921 16.5012 6.52969 16.7953C6.92017 17.0894 7.39551 17.249 7.88437 17.25H16.8656C17.3545 17.249 17.8298 17.0894 18.2203 16.7953C18.6108 16.5012 18.8953 16.0883 19.0312 15.6188L21.5062 6.95625C21.538 6.84488 21.5435 6.72767 21.5223 6.61382C21.5012 6.49996 21.454 6.39255 21.3844 6.3Z"
                fill={isActive("/checkout") ? "#FF5A5F" : "#A3A3A3"}
              />
            </g>
            <defs>
              <clipPath id="clip0_1553_5249">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span
            className={`w-[18px] h-[18px] ring-2 ring-white flex items-center justify-center rounded-full text-xs text-white absolute top-[4px] right-[46px] bg-orange`}
          >
            3
          </span>
          <span
            className={`text-[11px] font-medium ${
              isActive("/checkout") ? "text-orange" : "text-[#A3A3A3]"
            }`}
          >
            Cart
          </span>
        </Link>

        <Link
          href={isLoggedIn ? "/account" : "/login"}
          className="inline-flex flex-col items-center justify-center px-5"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 11.5C14.2091 11.5 16 9.70914 16 7.5C16 5.29086 14.2091 3.5 12 3.5C9.79086 3.5 8 5.29086 8 7.5C8 9.70914 9.79086 11.5 12 11.5Z"
              fill={isActive("/account") ? "#FF5A5F" : "#A3A3A3"}
            />
            <path
              d="M20 20.5V16.5C20 15.9 19.7 15.3 19.2 14.9C18.1 14 16.7 13.4 15.3 13C14.3 12.7 13.2 12.5 12 12.5C10.9 12.5 9.8 12.7 8.7 13C7.3 13.4 5.9 14.1 4.8 14.9C4.3 15.3 4 15.9 4 16.5V20.5H20Z"
              fill={isActive("/account") ? "#FF5A5F" : "#A3A3A3"}
            />
          </svg>

          <span
            className={`text-[11px] font-medium ${
              isActive("/account") ? "text-orange" : "text-[#A3A3A3]"
            }`}
          >
            Account
          </span>
        </Link>
      </div>
    </div>
  );
}
