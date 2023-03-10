import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Kirtan",
      email: "kirtan@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Nirali",
      email: "nirali@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      id: 1,
      name: "Bamboo Toothbrush",
      slug: "bamboo-toothbrush",
      category: "Bamboo",
      image: "/./images/bamboo-toothbrush.webp",
      price: 70,
      brand: "Kirtan Bamboo's",
      rating: 4.5,
      numReviews: 10,
      countInStock: 6,
      description: "Eco-Friendly Bamboo Toothbrush",
    },
    {
      id: 2,
      name: "Paper Bag",
      slug: "paper-bag",
      category: "Paper",
      image: "/./images/paper-bag.jpg",
      price: 10,
      brand: "Golden Bags",
      rating: 3.9,
      numReviews: 10,
      countInStock: 6,
      description: "Eco-Friendly Bamboo Toothbrush",
    },
    {
      id: 3,
      name: "Bamboo Toothbrush",
      slug: "bamboo-toothbr",
      category: "Bamboo",
      image: "/./images/bamboo-toothbrush.webp",
      price: 70,
      brand: "Kirtan Bamboo's",
      rating: 4.5,
      numReviews: 10,
      countInStock: 6,
      description: "Eco-Friendly Bamboo Toothbrush",
    },
    {
      id: 4,
      name: "Bamboo Toothbrush",
      slug: "bamboo-to",
      category: "Bamboo",
      image: "/./images/paper-bag.jpg",
      price: 70,
      brand: "Kirtan Bamboo's",
      rating: 4.5,
      numReviews: 10,
      countInStock: 6,
      description: "Eco-Friendly Bamboo Toothbrush",
    },
  ],
};

export default data;
