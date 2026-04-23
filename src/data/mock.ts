import { ProductCategory, type Category, type Product } from '../types';

export const mockCategories: Category[] = [
  {
    id: 'c1',
    name: ProductCategory.FRESH_FRUITS_VEG,
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=200',
    color: 'bg-green-50',
    borderColor: 'border-green-200'
  },
  {
    id: 'c2',
    name: ProductCategory.COOKING_OIL_GHEE,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=200',
    color: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  {
    id: 'c3',
    name: ProductCategory.MEAT_FISH,
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=200',
    color: 'bg-red-50',
    borderColor: 'border-red-200'
  },
  {
    id: 'c4',
    name: ProductCategory.BAKERY_SNACKS,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=200',
    color: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    id: 'c5',
    name: ProductCategory.DAIRY_EGGS,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=200',
    color: 'bg-yellow-50',
    borderColor: 'border-yellow-200'
  },
  {
    id: 'c6',
    name: ProductCategory.BEVERAGES,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=200',
    color: 'bg-blue-50',
    borderColor: 'border-blue-200'
  }
];

export const mockProducts: Product[] = [
  {
    id: 'p1',
    name: 'Organic Bananas',
    description: 'Naturally sweet organic bananas sourced from trusted farms. Perfect for smoothies, snacks, and breakfast bowls.',
    price: 4.99,
    category: ProductCategory.FRESH_FRUITS_VEG,
    unit: '7 pcs, Price',
    image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&w=400',
    rating: 4.5,
    reviews: 120,
    nutritionalInfo: '100g contains: Calories: 89, Fat: 0.3g, Carbs: 23g, Protein: 1.1g'
  },
  {
    id: 'p2',
    name: 'Red Apple',
    description: 'Fresh red apples straight from the farm. Crisp and sweet.',
    price: 4.99,
    category: ProductCategory.FRESH_FRUITS_VEG,
    unit: '1 kg, Price',
    image: 'https://images.pexels.com/photos/30741627/pexels-photo-30741627.jpeg?_gl=1*nzkwk5*_ga*ODc2ODIxMjMzLjE3NzY5MTE2NTU.*_ga_8JE65Q40S6*czE3NzY5MTE2NTUkbzEkZzEkdDE3NzY5MTE3MzIkajU5JGwwJGgw',
    rating: 4.8,
    reviews: 85,
    nutritionalInfo: '100g contains: Calories: 52, Fat: 0.2g, Carbs: 14g, Fiber: 2.4g'
  },
  {
    id: 'p3',
    name: 'Diet Coke',
    description: 'Sugar-free cola soft drink.',
    price: 1.99,
    category: ProductCategory.BEVERAGES,
    unit: '355 ml, Price',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400',
    rating: 4.2,
    reviews: 45,
    nutritionalInfo: 'Per can: Calories: 0, Sugar: 0g, Sodium: 40mg, Caffeine: 46mg'
  },
  {
    id: 'p4',
    name: 'Sprite Can',
    description: 'Crisp, refreshing, clean-tasting lemon and lime-flavored soft drink.',
    price: 1.50,
    category: ProductCategory.BEVERAGES,
    unit: '325 ml, Price',
    image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&q=80&w=400',
    rating: 4.3,
    reviews: 32,
    nutritionalInfo: 'Per can: Calories: 140, Sugar: 38g, Sodium: 65mg, Carbs: 38g'
  },
  {
    id: 'p5',
    name: 'Apple & Grape Juice',
    description: '100% natural fruit juice. No added sugar.',
    price: 5.99,
    category: ProductCategory.BEVERAGES,
    unit: '2L, Price',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=80&w=400',
    rating: 4.6,
    reviews: 56,
    nutritionalInfo: 'Per 250ml: Calories: 110, Sugar: 24g, Vitamin C: 20% DV'
  },
  {
    id: 'p6',
    name: 'Oasis Orange Juice',
    description: 'Refreshing orange juice.',
    price: 4.99,
    category: ProductCategory.BEVERAGES,
    unit: '2L, Price',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=400',
    rating: 4.7,
    reviews: 98,
    nutritionalInfo: 'Per 250ml: Calories: 118, Sugar: 21g, Vitamin C: 70% DV'
  },
  {
    id: 'p7',
    name: 'Bell Pepper Red',
    description: 'Fresh sweet red bell peppers.',
    price: 4.99,
    category: ProductCategory.FRESH_FRUITS_VEG,
    unit: '1 kg, Price',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&q=80&w=400',
    rating: 4.4,
    reviews: 67,
    nutritionalInfo: '100g contains: Calories: 31, Carbs: 6g, Fiber: 2.1g, Vitamin C: 127mg'
  },
  {
    id: 'p8',
    name: 'Ginger',
    description: 'Fresh ginger root.',
    price: 4.99,
    category: ProductCategory.FRESH_FRUITS_VEG,
    unit: '250 gm, Price',
    image: 'https://images.pexels.com/photos/33930747/pexels-photo-33930747.jpeg?_gl=1*tdwqhf*_ga*ODc2ODIxMjMzLjE3NzY5MTE2NTU.*_ga_8JE65Q40S6*czE3NzY5MTE2NTUkbzEkZzEkdDE3NzY5MTE4MTIkajQ3JGwwJGgw',
    rating: 4.5,
    reviews: 42,
    nutritionalInfo: '100g contains: Calories: 80, Carbs: 18g, Fiber: 2g, Potassium: 415mg'
  },
  {
    id: 'p9',
    name: 'Fresh Salmon Fillet',
    description: 'Premium Atlantic salmon fillet, rich in omega-3 and ideal for grilling or baking.',
    price: 12.99,
    category: ProductCategory.MEAT_FISH,
    unit: '500 gm, Price',
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?auto=format&fit=crop&q=80&w=400',
    rating: 4.7,
    reviews: 64,
    nutritionalInfo: '100g contains: Calories: 208, Protein: 20g, Fat: 13g, Omega-3: 2.3g'
  },
  {
    id: 'p10',
    name: 'Chicken Breast Boneless',
    description: 'Lean and tender boneless chicken breast, cleaned and ready to cook.',
    price: 8.49,
    category: ProductCategory.MEAT_FISH,
    unit: '1 kg, Price',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=400',
    rating: 4.6,
    reviews: 77,
    nutritionalInfo: '100g contains: Calories: 165, Protein: 31g, Fat: 3.6g, Carbs: 0g'
  },
  {
    id: 'p11',
    name: 'Whole Wheat Bread',
    description: 'Soft, high-fiber whole wheat loaf baked fresh every morning.',
    price: 2.49,
    category: ProductCategory.BAKERY_SNACKS,
    unit: '400 gm, Price',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400',
    rating: 4.4,
    reviews: 51,
    nutritionalInfo: 'Per 2 slices: Calories: 140, Carbs: 24g, Fiber: 4g, Protein: 6g'
  },
  {
    id: 'p12',
    name: 'Butter Croissant Pack',
    description: 'Flaky French-style butter croissants, perfect for breakfast or tea time.',
    price: 3.99,
    category: ProductCategory.BAKERY_SNACKS,
    unit: '4 pcs, Price',
    image: 'https://images.unsplash.com/photo-1555507036-ab794f0eedc9?auto=format&fit=crop&q=80&w=400',
    rating: 4.3,
    reviews: 39,
    nutritionalInfo: 'Per croissant: Calories: 231, Fat: 12g, Carbs: 26g, Protein: 5g'
  },
  {
    id: 'p13',
    name: 'Farm Fresh Eggs',
    description: 'Protein-rich farm eggs from cage-free hens.',
    price: 3.49,
    category: ProductCategory.DAIRY_EGGS,
    unit: '12 pcs, Price',
    image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&q=80&w=400',
    rating: 4.8,
    reviews: 93,
    nutritionalInfo: 'Per egg: Calories: 78, Protein: 6g, Fat: 5g, Vitamin D: 6% DV'
  },
  {
    id: 'p14',
    name: 'Greek Yogurt Plain',
    description: 'Thick and creamy Greek yogurt with high protein and no added sugar.',
    price: 4.29,
    category: ProductCategory.DAIRY_EGGS,
    unit: '500 gm, Price',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400',
    rating: 4.5,
    reviews: 58,
    nutritionalInfo: 'Per 100g: Calories: 97, Protein: 10g, Carbs: 3.9g, Fat: 5g'
  },
  {
    id: 'p15',
    name: 'Cold Pressed Sunflower Oil',
    description: 'Pure cold pressed sunflower oil, ideal for everyday cooking.',
    price: 9.99,
    category: ProductCategory.COOKING_OIL_GHEE,
    unit: '1 L, Price',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=400',
    rating: 4.4,
    reviews: 44,
    nutritionalInfo: 'Per 15ml: Calories: 124, Total Fat: 14g, Saturated Fat: 1.4g'
  },
  {
    id: 'p16',
    name: 'Desi Cow Ghee',
    description: 'Aromatic clarified butter made from premium cow milk.',
    price: 11.49,
    category: ProductCategory.COOKING_OIL_GHEE,
    unit: '500 ml, Price',
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=400',
    rating: 4.7,
    reviews: 61,
    nutritionalInfo: 'Per 15ml: Calories: 135, Total Fat: 15g, Vitamin A: 8% DV'
  },
  {
    id: 'p17',
    name: 'Avocado Hass',
    description: 'Creamy and ripe Hass avocados, great for salads and toast.',
    price: 6.49,
    category: ProductCategory.FRESH_FRUITS_VEG,
    unit: '4 pcs, Price',
    image: 'https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&fit=crop&q=80&w=400',
    rating: 4.6,
    reviews: 53,
    nutritionalInfo: '100g contains: Calories: 160, Fat: 15g, Fiber: 7g, Potassium: 485mg'
  },
  {
    id: 'p18',
    name: 'Brown Rice',
    description: 'Whole grain brown rice with rich fiber and nutty flavor.',
    price: 3.79,
    category: ProductCategory.BAKERY_SNACKS,
    unit: '1 kg, Price',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31d?auto=format&fit=crop&q=80&w=400',
    rating: 4.4,
    reviews: 41,
    nutritionalInfo: '100g contains: Calories: 111, Carbs: 23g, Fiber: 1.8g, Protein: 2.6g'
  },
  {
    id: 'p19',
    name: 'Cheddar Cheese Block',
    description: 'Aged cheddar cheese block, rich and flavorful for snacks and meals.',
    price: 5.29,
    category: ProductCategory.DAIRY_EGGS,
    unit: '300 gm, Price',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&q=80&w=400',
    rating: 4.5,
    reviews: 37,
    nutritionalInfo: '100g contains: Calories: 402, Fat: 33g, Protein: 25g, Calcium: 721mg'
  },
  {
    id: 'p20',
    name: 'Sparkling Water Lime',
    description: 'Refreshing zero-calorie sparkling water with natural lime flavor.',
    price: 1.29,
    category: ProductCategory.BEVERAGES,
    unit: '330 ml, Price',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&q=80&w=400',
    rating: 4.2,
    reviews: 28,
    nutritionalInfo: 'Per can: Calories: 0, Sugar: 0g, Sodium: 0mg'
  }
];

// Helper to simulate API delay
export const simulateApi = <T>(data: T, delay = 800): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};
