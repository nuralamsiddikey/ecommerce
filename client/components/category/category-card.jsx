import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ category: { name, image, slug } }) {
  return (
    <Link
      href={`/categories/${slug}`}
      className="bg-white w-full px-[17px] rounded-[3px] py-[10px] lg:flex lg:items-center lg:gap-[14px] md:flex md:items-center md:gap-[14px]"
    >
      <div className="">
        <Image
          src={image}
          width={74.948}
          height={74.948}
          alt="Category"
          className="lg:rounded-[3px] rounded-[4px] lg:w-[74px] md:w-[47px] w-full"
        />
      </div>
      <div className="flex-1 mt-3 lg:mt-0 md:mt-0">
        {/* w-[147px] */}
        <h2 className="text-[14px] text-deep-black font-medium leading-[18px] lg:text-start md:text-start text-center">
          {name}
        </h2>
      </div>
    </Link>
  );
}
