// Order Statuses are: Process, Cancel, Confirm, Delivery Pending, Parcel Return, Delivery Complete

export const orderProducts = (id, status) => ({
  id: id,
  orderId: "#56576786876",
  totalItems: 22,
  total: 2000,
  deliveryFee: 60,
  shippingFee: 376,
  grandTotal: 3684,
  orderStatus: status,
  products: [
    {
      id: "#56576786876",
      name: "Dark blue colour short sleeve t shirt vl logo for mans adfas adf adfa dfad fsa",
      price: 500,
      quantity: 4,
      total: 2000,
      image: "/assets/images/products/02.png",
    },
    {
      id: "#56576786876",
      name: "Dark blue colour short sleeve t shirt vl logo for mans adfas adf adfa dfad fsa",
      price: 500,
      quantity: 4,
      total: 2000,
      image: "/assets/images/products/02.png",
    },
    {
      id: "#56576786876",
      name: "Dark blue colour short sleeve t shirt vl logo for mans adfas adf adfa dfad fsa",
      price: 500,
      quantity: 4,
      total: 2000,
      image: "/assets/images/products/02.png",
    },
    {
      id: "#56576786876",
      name: "Dark blue colour short sleeve t shirt vl logo for mans adfas adf adfa dfad fsa",
      price: 500,
      quantity: 4,
      total: 2000,
      image: "/assets/images/products/02.png",
    },
  ],
});

export const myOrdersData = [
  orderProducts(1, "Process"),
  orderProducts(2, "Confirm"),
  orderProducts(3, "Parcel Return"),
  orderProducts(4, "Order Cancel"),
  orderProducts(5, "Delivery Complete"),
  orderProducts(6, "Delivery Complete"),
];

export const myOrderByDateData = [
  {
    id: 1,
    orderDate: "12 Sep, 2024",
    orders: [
      orderProducts(1, "Order Process"),
      orderProducts(2, "Order Confirm"),
    ],
  },
  {
    id: 2,
    orderDate: "11 Sep, 2024",
    orders: [orderProducts(3, "Order Process")],
  },
  {
    id: 3,
    orderDate: "10 Sep, 2024",
    orders: [
      orderProducts(4, "Delivery Complete"),
      orderProducts(5, "Parcel Return"),
      orderProducts(6, "Order Cancel"),
    ],
  },
];

export const orderInfoData = {
  totalItems: 4,
  total: 2000,
  deliveryFee: 60,
  shippingFee: 376,
  grandTotal: 3684,
};
