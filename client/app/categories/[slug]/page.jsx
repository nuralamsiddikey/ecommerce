import ProductCard from "@/components/product-card/product-card";
import SectionTitle from "@/components/section-title";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { categories } from "@/fake-data/categories";
import { productList } from "@/fake-data/product-list";

export default function CategoryWiseProductPage({ params }) {
  const category = categories.find((category) => category.slug === params.slug);

  if (!category) {
    throw new Error("Category not found");
  }

  return (
    <div className="lg:pb-[50px] pb-[110px] lg:pt-0 pt-[26px]">
      <div className="custom-container">
        <div className="lg:block hidden mt-[19px]">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Fashion</BreadcrumbLink>
              </BreadcrumbItem>
              {/* <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/categories/mens-boys-fashion">
                  Men
                </BreadcrumbLink>
              </BreadcrumbItem> */}
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{category?.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Title */}
        <SectionTitle title={category?.name} className=" pb-[11px]" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-[7px] gap-y-[12px]">
          {productList?.map((data) => {
            return (
              <ProductCard
                key={data.id}
                productName={data.product_name}
                slug={data.slug}
                price={data.price}
                discountPrice={data.discount_price}
                discount={data.discount}
                totalSell={data.total_sell}
                freeDelivery={data.free_delivery}
                img={data.img}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
