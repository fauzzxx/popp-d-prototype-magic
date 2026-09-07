import smash from "@/assets/smash.jpg";
import cheeseburst from "@/assets/cheeseburst.jpg";
import hotdog from "@/assets/hotdog.jpg";
import fries from "@/assets/fries.jpg";
import firechicken from "@/assets/firechicken.jpg";
import shake from "@/assets/shake.jpg";

// PROTOTYPE DATA ONLY — dummy items, prices and imagery.
// Replace with the real POPP'd menu and photography later.
export type Category = "BURGERS" | "HOTDOGS" | "SIDES" | "DRINKS";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
};

export const CATEGORIES = ["ALL", "BURGERS", "HOTDOGS", "SIDES", "DRINKS"] as const;

export const MENU: MenuItem[] = [
  {
    id: "poppd-smash",
    name: "The POPP'd Smash",
    description: "Double smashed chicken patty, cheese, signature sauce",
    price: 249,
    category: "BURGERS",
    image: smash,
  },
  {
    id: "cheese-burst",
    name: "Cheese Burst Burger",
    description: "Crispy chicken, molten cheese, house sauce",
    price: 279,
    category: "BURGERS",
    image: cheeseburst,
  },
  {
    id: "popp-dog",
    name: "Classic POPP Dog",
    description: "Loaded hotdog with cheese and signature toppings",
    price: 229,
    category: "HOTDOGS",
    image: hotdog,
  },
  {
    id: "popp-fries",
    name: "Loaded POPP Fries",
    description: "Crispy fries, cheese sauce and spicy toppings",
    price: 199,
    category: "SIDES",
    image: fries,
  },
  {
    id: "fire-chicken",
    name: "Fire Chicken Burger",
    description: "Spicy crispy chicken, lettuce and fiery sauce",
    price: 269,
    category: "BURGERS",
    image: firechicken,
  },
  {
    id: "choco-crunch",
    name: "Choco Crunch Shake",
    description: "Chocolate shake with crunchy toppings",
    price: 179,
    category: "DRINKS",
    image: shake,
  },
];
