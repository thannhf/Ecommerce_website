import men from "../assets/product_8.png";
import women from "../assets/product_9.png";
import kids from "../assets/product_15.png";
import Footwear from "../assets/product_23.png";
import Winterwear from "../assets/product_27.png";
import Sportswear from "../assets/product_36.png";

import product_1 from "./product_1.png";
import product_2 from "./product_2.png";
import product_3 from "./product_3.png";
import product_4 from "./product_4.png";
import product_5 from "./product_5.png";
import product_6 from "./product_6.png";
import product_7 from "./product_7.png";
import product_8 from "./product_8.png";
import product_9 from "./product_9.png";
import product_10 from "./product_10.png";
import product_11 from "./product_11.png";
import product_12 from "./product_12.png";
import product_13 from "./product_13.png";
import product_14 from "./product_14.png";
import product_15 from "./product_15.png";
import product_16 from "./product_16.png";
import product_17 from "./product_17.png";
import product_18 from "./product_18.png";
import product_19 from "./product_19.png";
import product_20 from "./product_20.png";
import product_21 from "./product_21.png";
import product_22 from "./product_22.png";
import product_23 from "./product_23.png";
import product_24 from "./product_24.png";
import product_25 from "./product_25.png";
import product_26 from "./product_26.png";
import product_27 from "./product_27.png";
import product_28 from "./product_28.png";
import product_29 from "./product_29.png";
import product_30 from "./product_30.png";
import product_31 from "./product_31.png";
import product_32 from "./product_32.png";
import product_33 from "./product_33.png";
import product_34 from "./product_34.png";
import product_35 from "./product_35.png";
import product_36 from "./product_36.png";
import product_37 from "./product_37.png";
import product_38 from "./product_38.png";

// Blogs
import blog1 from "../assets/blogs/blog1.png";
import blog2 from "../assets/blogs/blog2.png";
import blog3 from "../assets/blogs/blog3.png";
import blog4 from "../assets/blogs/blog4.png";

export const categories = [
  {
    name: "Men",
    image: men,
  },
  {
    name: "Women",
    image: women,
  },
  {
    name: "Kids",
    image: kids,
  },
  {
    name: "Footwear",
    image: Footwear,
  },
  {
    name: "Winterwear",
    image: Winterwear,
  },
  {
    name: "Sportswear",
    image: Sportswear,
  },
];

export const dummyProducts = [
  // Men's Products
  {
    _id: "1",
    name: "Classic Striped Button Down Shirt for Formal Office Wear",
    image: [product_1, product_3, product_6, product_7],
    price: 95,
    offerPrice: 45,
    sizes: ["M", "L", "XL"],
    description:
      "Elevate your formal style with our classic striped shirt, perfect for business meetings and elegant gatherings.",
    category: "Men",
    popular: true,
    inStock: true,
  },
  {
    _id: "2",
    name: "Trendy Floral Printed Casual Shirt with Slim Fit Cut",
    image: [product_2],
    price: 89,
    offerPrice: 40,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Stay fresh this summer with our floral printed slim-fit shirt, designed for comfort and a relaxed casual vibe.",
    category: "Men",
    popular: false,
    inStock: true,
  },
  {
    _id: "3",
    name: "Double Breasted Longline Formal Blazer for Business Look",
    image: [product_3],
    price: 92,
    offerPrice: 35,
    sizes: ["S", "M", "L"],
    description:
      "Command attention with our sharp longline blazer, designed for professional settings and stylish occasions.",
    category: "Men",
    popular: false,
    inStock: true,
  },
  {
    _id: "4",
    name: "Classic Double Breasted Long Trench Coat for Winter",
    image: [product_4],
    price: 98,
    offerPrice: 50,
    sizes: ["M", "L", "XL"],
    description:
      "Stay sharp and warm with our tailored trench coat, designed to add sophistication to your winter wardrobe.",
    category: "Men",
    popular: false,
    inStock: true,
  },
  {
    _id: "5",
    name: "High Waist Pleated Trousers with Modern Button Detailing",
    image: [product_5],
    price: 85,
    offerPrice: 30,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Upgrade your office wear with these pleated trousers, offering a perfect balance of comfort and sharp looks.",
    category: "Men",
    popular: false,
    inStock: true,
  },
  {
    _id: "6",
    name: "Leather Messenger Bag with Metal Buckles and Large Storage",
    image: [product_6],
    price: 97,
    offerPrice: 40,
    sizes: ["S", "M", "L"],
    description:
      "Complete your professional outfit with this leather bag, combining modern design with practical functionality.",
    category: "Men",
    popular: false,
    inStock: true,
  },
  {
    _id: "7",
    name: "Pointed Toe Formal Oxford Leather Shoes for Office Wear",
    image: [product_7],
    price: 99,
    offerPrice: 50,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Walk confidently with these classic Oxford shoes, crafted for men who value comfort and timeless elegance.",
    category: "Men",
    popular: false,
    inStock: true,
  },
  {
    _id: "8",
    name: "Warm Hooded Parka Coat with Detachable Faux Fur Collar",
    image: [product_8],
    price: 93,
    offerPrice: 45,
    sizes: ["M", "L", "XL"],
    description:
      "Stay cozy and stylish during winter with this hooded parka, designed for modern men who appreciate warmth and fashion.",
    category: "Men",
    popular: false,
    inStock: true,
  },

  // Women's Products
  {
    _id: "9",
    name: "Elegant Wide Leg Jumpsuit with Modern Sleeveless Style",
    image: [product_9],
    price: 95,
    offerPrice: 40,
    sizes: ["S", "M", "L"],
    description:
      "Make a bold statement with this chic jumpsuit, crafted for the confident woman who values modern fashion.",
    category: "Women",
    popular: false,
    inStock: true,
  },
  {
    _id: "10",
    name: "Luxury Silk Floral Print Scarf for Elegant Occasions",
    image: [product_10],
    price: 88,
    offerPrice: 35,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Enhance your outfit with this silk scarf, designed to bring a touch of refined elegance to any look.",
    category: "Women",
    popular: false,
    inStock: true,
  },
  {
    _id: "11",
    name: "Pointed Toe Kitten Heel Pumps for Office and Evening",
    image: [product_11],
    price: 79,
    offerPrice: 30,
    sizes: ["S", "M", "L"],
    description:
      "Step confidently with these stylish pumps, offering the perfect balance of comfort and sophistication.",
    category: "Women",
    popular: false,
    inStock: true,
  },
  {
    _id: "12",
    name: "Wool Blend Two Button Blazer Suit for Formal Events",
    image: [product_12],
    price: 99,
    offerPrice: 45,
    sizes: ["M", "L", "XL"],
    description:
      "Elevate your wardrobe with this wool blend suit, designed for women who appreciate bold and timeless elegance.",
    category: "Women",
    popular: false,
    inStock: true,
  },
  {
    _id: "13",
    name: "Slim Fit Bomber Jacket with Zippered Front in Olive Green",
    image: [product_13],
    price: 93,
    offerPrice: 50,
    sizes: ["S", "M", "L"],
    description:
      "Experience ultimate comfort and style with this bomber jacket, made for women who love a sleek modern look.",
    category: "Women",
    popular: true,
    inStock: true,
  },
  {
    _id: "14",
    name: "Relaxed Fit Denim Shirt with Button Front and Chest Pockets",
    image: [product_14],
    price: 89,
    offerPrice: 40,
    sizes: ["M", "L", "XL"],
    description:
      "Stay casually chic with this denim shirt, tailored for women who enjoy easy-going yet fashionable outfits.",
    category: "Women",
    popular: false,
    inStock: true,
  },

  // Kids Products
  {
    _id: "15",
    name: "Colorful Polo Shirt with Fun Contrast Collar & Cuffs",
    image: [product_15],
    price: 79,
    offerPrice: 35,
    sizes: ["S", "M", "L"],
    description:
      "Give your kids a playful yet classic look with this polo shirt, combining comfort with vibrant style.",
    category: "Kids",
    popular: false,
    inStock: true,
  },
  {
    _id: "16",
    name: "Warm Hooded Jacket with Front Pockets & Adjustable Drawstring",
    image: [product_16],
    price: 85,
    offerPrice: 40,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Keep your little ones cozy in this hooded jacket, designed for everyday comfort with playful charm.",
    category: "Kids",
    popular: false,
    inStock: true,
  },
  {
    _id: "17",
    name: "Smart Formal Shirt with Spread Collar & Soft Fabric",
    image: [product_17],
    price: 92,
    offerPrice: 50,
    sizes: ["M", "L", "XL"],
    description:
      "Dress up your young ones with this formal shirt, ideal for special occasions and stylish outings.",
    category: "Kids",
    popular: true,
    inStock: true,
  },
  {
    _id: "18",
    name: "Stretch Slim Fit Chino Pants for Everyday Wear",
    image: [product_18],
    price: 88,
    offerPrice: 40,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Perfect for active kids, these slim fit chinos provide comfort and flexibility for daily adventures.",
    category: "Kids",
    popular: false,
    inStock: true,
  },
  {
    _id: "19",
    name: "Trendy Leather Belt with Easy Automatic Buckle",
    image: [product_19],
    price: 49,
    offerPrice: 20,
    sizes: ["S", "M", "L"],
    description:
      "Finish your child’s outfit with this sleek leather belt, made for style and durability in every use.",
    category: "Kids",
    popular: false,
    inStock: true,
  },
  {
    _id: "20",
    name: "Cool Crew Neck Graphic Tee for Casual Fun Days",
    image: [product_20],
    price: 69,
    offerPrice: 30,
    sizes: ["M", "L", "XL"],
    description:
      "Let your kids show their personality with this fun graphic tee, combining style and comfort easily.",
    category: "Kids",
    popular: false,
    inStock: true,
  },
  
// Footwear Products (Corrected)
{
  _id: "21",
  name: "Lightweight Breathable Mesh Running Sneakers",
  image: [product_21],
  price: 85,
  offerPrice: 40,
  sizes: ["S", "M", "L", "XL"],
  description:
    "Enjoy all-day comfort with these breathable running sneakers, designed for excellent support and ventilation.",
  category: "Footwear",
  popular: false,
  inStock: true,
},
{
  _id: "22",
  name: "Classic Leather Slip-On Loafers",
  image: [product_22],
  price: 90,
  offerPrice: 45,
  sizes: ["S", "M", "L"],
  description:
    "Step into timeless style with these leather loafers, offering easy slip-on wear and sophisticated comfort.",
  category: "Footwear",
  popular: true,
  inStock: true,
},
{
  _id: "23",
  name: "Durable Trail Hiking Shoes with Cushioned Soles",
  image: [product_23],
  price: 98,
  offerPrice: 48,
  sizes: ["S", "M", "L", "XL"],
  description:
    "Take on any terrain with these rugged hiking shoes, featuring strong grip soles and cushioned interior for long adventures.",
  category: "Footwear",
  popular: false,
  inStock: true,
},
{
  _id: "24",
  name: "High-Top Fashion Sneakers with Padded Ankle",
  image: [product_24],
  price: 92,
  offerPrice: 42,
  sizes: ["M", "L", "XL"],
  description:
    "Elevate your casual look with these stylish high-top sneakers, providing both ankle support and modern design.",
  category: "Footwear",
  popular: false,
  inStock: true,
},
{
  _id: "25",
  name: "Flexible Lightweight Training Shoes",
  image: [product_25],
  price: 95,
  offerPrice: 45,
  sizes: ["S", "M", "L", "XL"],
  description:
    "Train comfortably with these flexible training shoes, engineered for agility, cushioning, and breathability.",
  category: "Footwear",
  popular: false,
  inStock: true,
},
{
  _id: "26",
  name: "Comfort Slip-On Casual Walking Shoes",
  image: [product_26],
  price: 70,
  offerPrice: 30,
  sizes: ["S", "M", "L", "XL"],
  description:
    "Perfect for daily wear, these casual slip-on shoes offer lightweight comfort and effortless style on the go.",
  category: "Footwear",
  popular: false,
  inStock: true,
},

  // Winterwear Products
  {
    _id: "27",
    name: "Toddler Ruffle Sleeve Dress with Bow Accent",
    image: [product_27],
    price: 85,
    offerPrice: 45,
    sizes: ["S", "M", "L"],
    description:
      "Your toddler will shine in this charming dress, crafted for comfort and joy on every special occasion.",
    category: "Winterwear",
    popular: false,
    inStock: true,
  },
  {
    _id: "28",
    name: "Soft Cotton Kid's T-Shirt with Fun Playful Prints",
    image: [product_28],
    price: 90,
    offerPrice: 50,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Fuel creativity with this fun printed t-shirt, perfect for active days full of adventure and laughter.",
    category: "Winterwear",
    popular: false,
    inStock: true,
  },
  {
    _id: "29",
    name: "Bright Kids' Raincoat with Animal Theme Design",
    image: [product_29],
    price: 70,
    offerPrice: 40,
    sizes: ["M", "L", "XL"],
    description:
      "Keep rainy days cheerful with this colorful raincoat, combining waterproof comfort with playful style.",
    category: "Winterwear",
    popular: false,
    inStock: true,
  },
  {
    _id: "30",
    name: "Baby Bib Set with Playful Prints and Easy Clean Fabric",
    image: [product_30],
    price: 28,
    offerPrice: 15,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Make mealtimes fun with these soft, easy-to-clean bibs, designed for busy parents and happy babies.",
    category: "Winterwear",
    popular: false,
    inStock: true,
  },
  {
    _id: "31",
    name: "Elastic Slip-On Kids' Sneakers for All Day Play",
    image: [product_31],
    price: 50,
    offerPrice: 25,
    sizes: ["S", "M", "L"],
    description:
      "Let your kids run freely with these comfortable slip-on sneakers, perfect for nonstop action and fun.",
    category: "Winterwear",
    popular: false,
    inStock: true,
  },
  {
    _id: "32",
    name: "Soft Plush Baby Blanket with Animal Embroidery",
    image: [product_32],
    price: 35,
    offerPrice: 18,
    sizes: ["S", "M", "L", "XL"],
    description:
      "Wrap your baby in cozy warmth with this adorable blanket, featuring cute embroidered animal designs.",
    category: "Winterwear",
    popular: true,
    inStock: true,
  },

// Sportswear Products
{
  _id: "33",
  name: "Breathable Quick-Dry Running Shorts",
  image: [product_33],
  price: 48,
  offerPrice: 20,
  sizes: ["S", "M", "L"],
  description:
    "Stay cool and dry during workouts with these lightweight running shorts, featuring moisture-wicking fabric for maximum performance.",
  category: "Sportswear",
  popular: false,
  inStock: true,
},
{
  _id: "34",
  name: "Stretchy Athletic Leggings with High Waist",
  image: [product_34],
  price: 60,
  offerPrice: 25,
  sizes: ["S", "M", "L", "XL"],
  description:
    "Perfect your workout sessions with these high-waisted leggings, offering flexibility, comfort, and breathability for all activities.",
  category: "Sportswear",
  popular: true,
  inStock: true,
},
{
  _id: "35",
  name: "Lightweight Training Jacket with Zipper Closure",
  image: [product_35],
  price: 75,
  offerPrice: 35,
  sizes: ["S", "M", "L", "XL"],
  description:
    "This lightweight jacket provides optimal coverage and ventilation, perfect for outdoor runs and gym sessions.",
  category: "Sportswear",
  popular: false,
  inStock: true,
},
{
  _id: "36",
  name: "Comfort Fit Gym Shorts with Elastic Waistband",
  image: [product_36],
  price: 55,
  offerPrice: 20,
  sizes: ["S", "M", "L"],
  description:
    "Move freely during training with these comfort fit gym shorts, featuring an adjustable waistband and breathable design.",
  category: "Sportswear",
  popular: false,
  inStock: true,
},
{
  _id: "37",
  name: "Multi-Function Sports Duffel Bag with Shoe Compartment",
  image: [product_37],
  price: 80,
  offerPrice: 40,
  sizes: ["S", "M", "L", "XL"],
  description:
    "Carry all your workout essentials with this spacious sports duffel bag, complete with separate shoe compartment for convenience.",
  category: "Sportswear",
  popular: false,
  inStock: true,
},
{
  _id: "38",
  name: "Classic Crewneck Sweatshirt for Warm-Up & Cool-Down",
  image: [product_38],
  price: 65,
  offerPrice: 28,
  sizes: ["S", "M", "L", "XL"],
  description:
    "Stay warm before and after your workout with this soft crewneck sweatshirt, perfect for layering over your gym attire.",
  category: "Sportswear",
  popular: false,
  inStock: true,
},

];

export const blogs = [
  {
    title: "Top Shopping Tips for Smart Buyers",
    category: "Women",
    image: blog1,
  },
  {
    title: "Latest Trends in Online Shopping 2024",
    category: "Footwear",
    image: blog2,
  },
  { title: "How to Spot the Best Deals Online", category: "Men", image: blog3 },
  {
    title: "Why E-Commerce is the Future of Shopping",
    category: "Winterwear",
    image: blog4,
  },
];


export const dummyOrders = [
  {
    _id: "66i7guy876h756gwgreghc56456v5tc",
    userId: "68591d36daf423db94fa8f4f",
    items: [
      {
        product: dummyProducts[0],
        quantity: 2,
        size: "M"
      },
      {
        product: dummyProducts[11],
        quantity: 2,
        size: "XL"
      },
    ],
    address: {
      firstName: "John",
      lastName: "Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      country: "USA",
      zipcode: "10001",
      phone: "+1 123 456 7890"
    },
    amount: 40,
    paymentMethod: "stripe",
    isPaid: true,
    status: "Delivered",
    createdAt: "2024-06-10T10:00:00.000Z"
  },

  {
    _id: "45dfdfy76789012cv45t45c45cct",
    userId: "68591d36daf423db94fa8f4f",
    items: [
       {
        product: dummyProducts[34],
        quantity: 2,
        size: "S"
      },
      {
        product: dummyProducts[8],
        quantity: 2,
        size: "XXL"
      },
    ],
    address: {
      firstName: "Jane",
      lastName: "Smith",
      street: "456 Elm Street",
      city: "Los Angeles",
      state: "CA",
      country: "USA",
      zipcode: "90001",
      phone: "+1 987 654 3210"
    },
    amount: 999,
    paymentMethod: "COD",
    isPaid: true,
    status: "Shipped",
    createdAt: "2024-06-08T15:30:00.000Z"
  }
];

