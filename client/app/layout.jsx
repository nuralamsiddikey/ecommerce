import Header from "@/components/header/Header";

import MobileBottomNavigation from "@/components/mobile-bottom-navigation";
import { Manrope } from "next/font/google";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { ProductContextProvider } from "@/context/productContext";
import { OrderContextProvider } from "@/context/orderContext";
import { AuthContextProvider } from "@/context/authContext";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Fashion Glory shoping",
  description: "Fashion Glory - The best place to find your needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <ProductContextProvider>
          <OrderContextProvider>
            <body
              className={`${manrope.className} antialiased bg-light-gray h-screen w-full flex flex-col justify-between`}
            >
              <Suspense>
                <Header />
              </Suspense>
              <main className="flex-1 lg:pt-[152px]">{children}</main>
              {/* <Footer /> */}
              <div className="lg:hidden block mt-[56px]">
                <MobileBottomNavigation />
              </div>

              <Toaster />
            </body>
          </OrderContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </html>
  );
}
