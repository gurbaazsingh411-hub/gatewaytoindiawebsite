export type Dish = {
  name: string;
  description: string;
  price: string;
  category: string;
  veg: boolean;
  spice: 0 | 1 | 2 | 3;
  image?: any;
};

import butterChicken from "@/assets/dish-butter-chicken.jpg";
import biryaniImage from "@/assets/dish-biryani.jpg";
import tandooriImage from "@/assets/dish-tandoori.jpg";
import paneerImage from "@/assets/dish-paneer.jpg";
import naanImage from "@/assets/dish-naan.jpg";
import samosaImage from "@/assets/dish-samosa.jpg";

export const categories = [
  "Appetizers",
  "Vegetarian Entrées",
  "Tandoori Entrées",
  "Lamb Entrées",
  "Seafood Entrées",
  "Chicken Entrées",
  "Biryani",
  "Breads",
  "Side Orders",
  "Desserts",
  "Beverages"
] as const;

export const dishes: Dish[] = [
  // Appetizers
  { name: "Subji Pakoras (Vegetable Fritters)", description: "Assorted vegetables dipped in spiced chickpea batter and deep fried.", price: "9.00", category: "Appetizers", veg: true, spice: 1 },
  { name: "Vegetarian Samosas", description: "Deep fried pastry filled with mildly spiced potatoes and peas.", price: "10.50", category: "Appetizers", veg: true, spice: 1, image: samosaImage },
  { name: "Samosa Chaat", description: "Served with Garbanzo beans topped with red onions, cilantro, yogurt, tamarind and cilantro chutney.", price: "9.50", category: "Appetizers", veg: true, spice: 1 },
  { name: "Pappadum", description: "Spicy crisp lentil wafers.", price: "3.75", category: "Appetizers", veg: true, spice: 1 },
  { name: "Onion Bhaji (Onion Fritters)", description: "Onions mildly spiced and dipped in chickpea batter and deep fried.", price: "9.50", category: "Appetizers", veg: true, spice: 1 },
  { name: "Paneer Pakoras (Homemade cheese Fritters)", description: "Paneer mildly spiced inside dipped in chickpea batter and deep fried.", price: "11.50", category: "Appetizers", veg: true, spice: 1, image: paneerImage },
  { name: "Murgh Pakoras (Chicken Fritters)", description: "Boneless chicken pieces dipped in mildly spiced chickpea batter and deep fried.", price: "12.50", category: "Appetizers", veg: false, spice: 1 },
  { name: "Chicken Kabob (2 Sticks)", description: "Marinated chicken on skewers cooked in tandoor. Served with cilantro chutney.", price: "14.50", category: "Appetizers", veg: false, spice: 1 },
  { name: "Jinga Pakodas (Shrimp Fritters)", description: "Succulent Shrimp dipped in mildly spiced chickpea batter and deep fried.", price: "13.50", category: "Appetizers", veg: false, spice: 1 },
  { name: "Vegetarian Platter", description: "Platter includes Subji Pakoras, Samosa, and Pappadum.", price: "15.50", category: "Appetizers", veg: true, spice: 1 },
  { name: "Full Appetizer Platter", description: "Platter includes Murgh and Subji Pakoras, Pappadum, and a Samosa.", price: "16.50", category: "Appetizers", veg: false, spice: 1 },

  // Vegetarian Entrées
  { name: "Daal Maharani (Mixed Lentils)", description: "Mixed lentils fit to be served to the queen.", price: "18.50", category: "Vegetarian Entrées", veg: true, spice: 1 },
  { name: "Kabuli Channa (Garbanzo Beans)", description: "Garbanzo Beans delicately spiced and cooked with onions and tomato sauce.", price: "18.50", category: "Vegetarian Entrées", veg: true, spice: 1 },
  { name: "Aloo Mutter (Potatoes and Peas)", description: "Potatoes and green peas cooked in tomato, onion, and ginger sauce, flavored with freshly ground spices.", price: "18.50", category: "Vegetarian Entrées", veg: true, spice: 1 },
  { name: "Saag Aloo (Spinach and Potatoes)", description: "Pureed spinach with potatoes cooked with onion and tomatoes with freshly ground spices.", price: "18.50", category: "Vegetarian Entrées", veg: true, spice: 1 },
  { name: "Aloo Gobi (Cauliflower and Potatoes)", description: "Cauliflower and potatoes cooked with fresh herbs, garlic and ginger onion sauce.", price: "18.50", category: "Vegetarian Entrées", veg: true, spice: 1 },
  { name: "Vegetable Korma", description: "Assorted vegetables cooked in creamy sauce with almonds.", price: "18.50", category: "Vegetarian Entrées", veg: true, spice: 0 },
  { name: "Vegetable Masala", description: "Assorted vegetables cooked in tomato, onion cream sauce and freshly ground spices.", price: "18.50", category: "Vegetarian Entrées", veg: true, spice: 1 },
  { name: "Baingan Ka Bharta", description: "Eggplant baked over open flame in Tandoor, cooked with peas, onions, tomatoes, herbs and spices.", price: "18.50", category: "Vegetarian Entrées", veg: true, spice: 1 },
  { name: "Goa Coconut Curry", description: "Assorted vegetables cooked in coconut sauce.", price: "18.50", category: "Vegetarian Entrées", veg: true, spice: 1 },
  { name: "Mutter Paneer (Green Peas and Homemade Cheese)", description: "Homemade cheese and green peas cooked in onion, tomato and cream sauce.", price: "18.50", category: "Vegetarian Entrées", veg: true, spice: 1 },
  { name: "Paneer Tikka Masala (Homemade Cheese)", description: "Homemade cheese cooked in onion, tomato and cream sauce.", price: "19.50", category: "Vegetarian Entrées", veg: true, spice: 1 },
  { name: "Mutter Mushroom (Green Peas and Mushrooms)", description: "Mushroom and Green Peas cooked in onion, tomato, and cream sauce.", price: "18.50", category: "Vegetarian Entrées", veg: true, spice: 1 },
  { name: "Saag Paneer (Spinach and Homemade Cheese)", description: "Homemade cheese and pureed spinach cooked in onion & tomato sauce, flavored with freshly ground spices.", price: "18.50", category: "Vegetarian Entrées", veg: true, spice: 1 },
  { name: "Bhindi Bhaji (Okra)", description: "Okra cooked with onions and tomatoes, garlic and ginger, flavored with freshly ground spices.", price: "19.50", category: "Vegetarian Entrées", veg: true, spice: 1 },
  { name: "Malai Kofta (Vegetable balls)", description: "Assorted vegetables made into a ball with chickpea flour and cooked in spiced onion, tomato and cream sauce.", price: "19.50", category: "Vegetarian Entrées", veg: true, spice: 1 },
  { name: "Artichoke Heart Masala", description: "Artichoke hearts cooked with onion and tomato and spiced cream sauce.", price: "19.50", category: "Vegetarian Entrées", veg: true, spice: 1 },
  { name: "Vegetable Karahi", description: "Artichoke hearts, Paneer, asparagus, and assorted vegetables sautéed with fresh herbs, spices. Served on a bed of onions on a sizzling platter.", price: "19.50", category: "Vegetarian Entrées", veg: true, spice: 1 },

  // Tandoori Entrées
  { name: "Tandoori Murgha (Chicken on the bone)", description: "Chicken marinated with authentic Indian spices and herbs. Barbecued in Tandoor. Served on bed of onions on a sizzling platter.", price: "21.50", category: "Tandoori Entrées", veg: false, spice: 1, image: tandooriImage },
  { name: "Tandoori Murgh Tikka (Chicken)", description: "Tender boneless chicken breast marinated with authentic Indian spices and herbs. Barbecued in Tandoor. Served on bed of onions on a sizzling platter.", price: "22.50", category: "Tandoori Entrées", veg: false, spice: 1 },
  { name: "Tandoori Gosht Tikka Kebab (Lamb)", description: "Tender boneless lamb rubbed with authentic Indian spices and herbs. Barbecued in the Tandoor. Served on bed of onions on a sizzling platter.", price: "23.50", category: "Tandoori Entrées", veg: false, spice: 1 },
  { name: "Tandoori Jinga (Shrimp)", description: "Shrimp marinated in lemon juice with touch of fresh herbs and spices. Served on bed of onions on a sizzling platter.", price: "24.50", category: "Tandoori Entrées", veg: false, spice: 1 },
  { name: "Mixed Tandoori Platter", description: "Assorted Tandoori meats (Lamb, chicken and shrimp). Served on bed of onions on a sizzling platter.", price: "27.50", category: "Tandoori Entrées", veg: false, spice: 1 },

  // Lamb Entrées
  { name: "Saag Gosht (Spinach & Lamb)", description: "Boneless lamb with pureed spinach cooked in onion sauce with freshly ground herbs and spices.", price: "23.50", category: "Lamb Entrées", veg: false, spice: 1 },
  { name: "Shahi Gosht Korma", description: "Boneless lamb cooked in creamy yogurt sauce, with ginger, garlic and fenugreek leaves. Garnished with almonds.", price: "23.50", category: "Lamb Entrées", veg: false, spice: 0 },
  { name: "Gosht Masala", description: "Tandoori boneless lamb cooked in tomato, onion cream sauce and freshly ground spices.", price: "23.50", category: "Lamb Entrées", veg: false, spice: 1 },
  { name: "Gosht Vindaloo", description: "Boneless lamb cooked in a creamy sweet and sour sauce with potatoes and freshly ground spices.", price: "23.50", category: "Lamb Entrées", veg: false, spice: 2 },
  { name: "Gosht Karahi", description: "Marinated lamb grilled with fresh herbs, spices, peppers, tomato, onions. Served on a sizzling platter.", price: "23.50", category: "Lamb Entrées", veg: false, spice: 1 },
  { name: "Goat Curry", description: "Goat on the bone cooked in tomato, onion cream sauce and freshly ground spices.", price: "23.50", category: "Lamb Entrées", veg: false, spice: 1 },

  // Seafood Entrées
  { name: "Masala Jinga (Shrimp)", description: "Shrimp seasoned with fresh herbs and spices, cooked in tomato, onion and yogurt sauce.", price: "24.50", category: "Seafood Entrées", veg: false, spice: 1 },
  { name: "Korma Jinga (Shrimp)", description: "Shrimp cooked in creamy yogurt sauce, with ginger and fenugreek leaves. Garnished with almonds.", price: "24.50", category: "Seafood Entrées", veg: false, spice: 0 },
  { name: "Masala Muchlee (Fish)", description: "Cod cooked with fresh herbs and spices in tomato, onions and yogurt sauce.", price: "24.50", category: "Seafood Entrées", veg: false, spice: 1 },
  { name: "Korma Muchlee (Fish)", description: "Cod cooked in creamy yogurt sauce, with ginger and fenugreek leaves. Garnished with almonds.", price: "24.50", category: "Seafood Entrées", veg: false, spice: 0 },
  { name: "Saag Jinga (Spinach and Shrimp)", description: "Shrimp and pureed spinach cooked in onion sauce with freshly ground spices.", price: "24.50", category: "Seafood Entrées", veg: false, spice: 1 },
  { name: "Jinga Vindaloo (Shrimp)", description: "Shrimp cooked in a creamy sweet and sour sauce with potatoes and freshly ground spices.", price: "24.50", category: "Seafood Entrées", veg: false, spice: 2 },
  { name: "Jinga Karahi (Shrimp)", description: "Shrimp sautéed with fresh peppers, onions, tomatoes, herbs and spices. Served on a sizzling platter.", price: "24.50", category: "Seafood Entrées", veg: false, spice: 1 },

  // Chicken Entrées
  { name: "Murgh Makhani (On the Bone)", description: "Tandoori chicken on bone cooked in tomato, onion and butter sauce with freshly ground spices.", price: "22.50", category: "Chicken Entrées", veg: false, spice: 1, image: butterChicken },
  { name: "Murgh Makhani (Boneless)", description: "Tandoori chicken cooked in tomato, onion and butter sauce with freshly ground spices.", price: "23.50", category: "Chicken Entrées", veg: false, spice: 1 },
  { name: "Saag Murgh", description: "Boneless chicken with pureed spinach cooked in onion sauce with fresh herbs and spices.", price: "22.50", category: "Chicken Entrées", veg: false, spice: 1 },
  { name: "Murgh Korma", description: "Boneless chicken cooked in fresh herbs and spices in creamy sauce. Topped with almonds.", price: "22.50", category: "Chicken Entrées", veg: false, spice: 0 },
  { name: "Murgh Tikka Masala", description: "Tandoori boneless chicken cooked in tomato, onion cream sauce and freshly ground spices.", price: "22.50", category: "Chicken Entrées", veg: false, spice: 1 },
  { name: "Murgh Vindaloo", description: "Boneless chicken cooked in a creamy sweet and sour sauce with potatoes and freshly ground spices.", price: "22.50", category: "Chicken Entrées", veg: false, spice: 2 },
  { name: "Murgh Karahi", description: "Marinated boneless chicken grilled with fresh herbs, spices, peppers, tomato, onions. Served on a bed of onions on a sizzling platter.", price: "22.50", category: "Chicken Entrées", veg: false, spice: 1 },

  // Biryani
  { name: "Subji Biryani (Vegetarian)", description: "Basmati rice cooked with whole spices, saffron and assorted vegetables. Garnished with almonds and cilantro.", price: "18.50", category: "Biryani", veg: true, spice: 1, image: biryaniImage },
  { name: "Artichoke Heart Biryani", description: "Basmati rice cooked with whole spices, saffron and artichoke hearts. Garnished with almonds and cilantro.", price: "18.50", category: "Biryani", veg: true, spice: 1 },
  { name: "Murgh Biryani (Chicken)", description: "Basmati rice cooked with whole spices, saffron and boneless chicken pieces. Garnished with almonds and cilantro.", price: "21.50", category: "Biryani", veg: false, spice: 1 },
  { name: "Gosht Biryani (Lamb)", description: "Basmati rice cooked with whole spices, saffron and boneless lamb pieces. Garnished with almonds and cilantro.", price: "22.50", category: "Biryani", veg: false, spice: 1 },
  { name: "Jinga Biryani (Shrimp)", description: "Basmati rice cooked with whole spices, saffron and prawns. Garnished with almonds and cilantro.", price: "23.50", category: "Biryani", veg: false, spice: 1 },

  // Breads
  { name: "Tandoori Roti", description: "Whole wheat bread baked in the Tandoor (No Leavening).", price: "4.50", category: "Breads", veg: true, spice: 0 },
  { name: "Tandoori Garlic Roti", description: "Whole wheat bread with fresh garlic and cilantro baked in the Tandoor (No Leavening).", price: "4.95", category: "Breads", veg: true, spice: 0 },
  { name: "Naan", description: "Leavened wheat bread baked in the Tandoor (Clay Oven)", price: "4.75", category: "Breads", veg: true, spice: 0, image: naanImage },
  { name: "Garlic Naan", description: "Leavened wheat bread with fresh garlic and cilantro baked in the Tandoor (Clay Oven)", price: "5.50", category: "Breads", veg: true, spice: 0 },
  { name: "Aloo Naan", description: "Leaven wheat bread stuffed with potatoes and peas.", price: "7.50", category: "Breads", veg: true, spice: 0 },
  { name: "Aloo Parantha", description: "Potatoes stuffed in whole wheat bread cooked in the Tandoor (No Leavening)", price: "7.50", category: "Breads", veg: true, spice: 0 },
  { name: "Onion Kulcha", description: "Mildly spiced onions stuffed in leavened bread baked in the Tandoor.", price: "7.50", category: "Breads", veg: true, spice: 0 },
  { name: "Spinach Naan", description: "Mildly spiced spinach stuffed in leavened bread baked in the Tandoor.", price: "8.50", category: "Breads", veg: true, spice: 0 },
  { name: "Punjabi Naan", description: "Mildly spices fresh spinach, garlic, Paneer, and Parmesan cheese stuffed in leavened bread baked in the Tandoor.", price: "8.50", category: "Breads", veg: true, spice: 0 },
  { name: "Mirchi Naan", description: "Leavened wheat bread stuffed with freshly cut jalapenos", price: "7.50", category: "Breads", veg: true, spice: 1 },
  { name: "Paneer Kulcha", description: "Mildly flavored homemade cheese stuffed in leavened bread in the Tandoor.", price: "8.50", category: "Breads", veg: true, spice: 0 },
  { name: "Peshawaari Naan", description: "Sweet Naan with nuts and raisins", price: "8.50", category: "Breads", veg: true, spice: 0 },
  { name: "Breadbasket", description: "With a Naan, a Garlic Naan and an Onion Kulcha.", price: "16.50", category: "Breads", veg: true, spice: 0 },

  // Side Orders
  { name: "Daily Soup (Cup)", description: "Soup of the day.", price: "5.25", category: "Side Orders", veg: true, spice: 0 },
  { name: "Daily Soup (Bowl)", description: "Soup of the day.", price: "8.50", category: "Side Orders", veg: true, spice: 0 },
  { name: "Kachumber Salad", description: "Cucumber, tomatoes, and red onions in lemon juice with spices.", price: "4.50", category: "Side Orders", veg: true, spice: 0 },
  { name: "Basmati Rice", description: "Long grain rice from India cooked with whole spices.", price: "5.50", category: "Side Orders", veg: true, spice: 0 },
  { name: "Raita", description: "Yogurt sauce with cucumber, tomatoes, carrots, cilantro and spices.", price: "3.95", category: "Side Orders", veg: true, spice: 0 },
  { name: "Mixed pickles", description: "Spicy mixed Indian pickles.", price: "2.95", category: "Side Orders", veg: true, spice: 2 },
  { name: "Mango Chutney", description: "Sweet and sour mango chutney.", price: "3.75", category: "Side Orders", veg: true, spice: 0 },
  { name: "Dhania Chutney (Cilantro)", description: "Fresh cilantro chutney.", price: "2.95", category: "Side Orders", veg: true, spice: 1 },
  { name: "Tamarind Chutney", description: "Sweet and sour tamarind chutney.", price: "2.95", category: "Side Orders", veg: true, spice: 0 },

  // Desserts
  { name: "Gulab Jamun", description: "Milk based dumpling soaked in rose water and cardamom syrup.", price: "7.50", category: "Desserts", veg: true, spice: 0 },
  { name: "Chawal Ki Kheer (Rice Pudding)", description: "Rice Pudding with cardamom pods and topped with almonds.", price: "7.50", category: "Desserts", veg: true, spice: 0 },
  { name: "Seviayan (Vermicelli Pudding)", description: "Toasted wheat vermicelli cooked in milk with cardamom pods and topped with almonds.", price: "7.50", category: "Desserts", veg: true, spice: 0 },
  { name: "Mango Pudding", description: "Smooth and sweet mango pudding.", price: "7.50", category: "Desserts", veg: true, spice: 0 },
  { name: "Mango Sorbet", description: "Refreshing mango sorbet.", price: "7.50", category: "Desserts", veg: true, spice: 0 },
  { name: "Ginger Ice Cream", description: "Creamy ginger flavored ice cream.", price: "7.50", category: "Desserts", veg: true, spice: 0 },
  { name: "Pistachio Ice Cream", description: "Rich pistachio ice cream.", price: "7.50", category: "Desserts", veg: true, spice: 0 },
  { name: "Coconut Lime Ice Cream", description: "Creamy coconut and lime ice cream.", price: "7.50", category: "Desserts", veg: true, spice: 0 },

  // Beverages
  { name: "Chai HOT", description: "Authentic Indian tea steeped with spices, milk and sugar.", price: "4.95", category: "Beverages", veg: true, spice: 0 },
  { name: "ICED Chai", description: "Iced Authentic Indian tea steeped with spices, milk and sugar.", price: "5.50", category: "Beverages", veg: true, spice: 0 },
  { name: "Sweet Lassi", description: "Sweetened yogurt drink with a touch of rose water.", price: "5.00", category: "Beverages", veg: true, spice: 0 },
  { name: "Mango Lassi", description: "Sweet Lassi with mango", price: "6.00", category: "Beverages", veg: true, spice: 0 },
  { name: "Pineapple Lassi", description: "Sweet Lassi with Pineapple", price: "6.00", category: "Beverages", veg: true, spice: 0 },
  { name: "Mango Juice", description: "Refreshing mango juice.", price: "5.50", category: "Beverages", veg: true, spice: 0 },
  { name: "Orange Juice", description: "Fresh orange juice.", price: "4.50", category: "Beverages", veg: true, spice: 0 },
  { name: "Apple Juice", description: "Fresh apple juice.", price: "4.50", category: "Beverages", veg: true, spice: 0 },
  { name: "Soft Drinks", description: "Coke, Diet Coke, Sprite, Root Beer, Lemonade or Iced Tea (Sweetened)", price: "4.00", category: "Beverages", veg: true, spice: 0 }
];
