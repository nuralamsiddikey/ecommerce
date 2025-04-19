export const categories = [
  {
    id: 1,
    name: "Men’s & Boy’s Fashion",
    image: "/assets/images/categories/category.svg",
    slug: "mens-boys-fashion",
  },
  {
    id: 2,
    name: "Women’s & Girl’s Fashion",
    image: "/assets/images/categories/category-2.svg",
    slug: "womens-girls-fashion",
  },
  {
    id: 3,
    name: "Men’s & Boy’s Fashion",
    image: "/assets/images/categories/category.svg",
    slug: "mens-boys-fashion",
  },
  {
    id: 4,
    name: "Men’s & Boy’s Fashion",
    image: "/assets/images/categories/category.svg",
    slug: "womens-girls-fashion",
  },
];

export const dbCategories = [
  {
    id: 1,
    name: "Electronics",
    subCategories: [
      {
        id: 101,
        name: "Mobile Phones",
        subCategories: [
          { id: 10101, name: "Smartphones" },
          { id: 10102, name: "Feature Phones" },
        ],
      },
      {
        id: 102,
        name: "Laptops",
        subCategories: [
          { id: 10201, name: "Gaming Laptops" },
          { id: 10202, name: "Ultrabooks" },
        ],
      },
      {
        id: 103,
        name: "Headphones",
        subCategories: [
          { id: 10301, name: "Wireless" },
          { id: 10302, name: "Wired" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Home & Kitchen",
    subCategories: [
      {
        id: 201,
        name: "Furniture",
        subCategories: [
          { id: 20101, name: "Sofas" },
          { id: 20102, name: "Tables" },
          { id: 20103, name: "Chairs" },
        ],
      },
      {
        id: 202,
        name: "Appliances",
        subCategories: [
          { id: 20201, name: "Refrigerators" },
          { id: 20202, name: "Microwaves" },
          { id: 20203, name: "Washing Machines" },
        ],
      },
      {
        id: 203,
        name: "Cookware",
        subCategories: [
          { id: 20301, name: "Pots & Pans" },
          { id: 20302, name: "Bakeware" },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Clothing",
  },
  {
    id: 4,
    name: "Sports & Outdoors",
    subCategories: [
      {
        id: 401,
        name: "Fitness Equipment",
        subCategories: [
          { id: 40101, name: "Treadmills" },
          { id: 40102, name: "Dumbbells" },
        ],
      },
      {
        id: 402,
        name: "Outdoor Gear",
        subCategories: [
          { id: 40201, name: "Camping Tents" },
          { id: 40202, name: "Hiking Boots" },
        ],
      },
      {
        id: 403,
        name: "Cycling",
        subCategories: [
          { id: 40301, name: "Bicycles" },
          { id: 40302, name: "Cycling Accessories" },
        ],
      },
    ],
  },
];
