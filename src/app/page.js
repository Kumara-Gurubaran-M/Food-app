
import Pizza from './components/Pizza';
import Banner from './components/Banner';

// pizza data
const pizzas = [
  {
    id: 1,
    name: 'capricciosa',
    description:
      'Indulge in the perfect blend of flavors with our handcrafted pizzas, featuring a crispy crust, rich tomato sauce, and a mouthwatering mix of fresh toppings.',
    image: '/capricciosa.webp',
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 2,
    name: 'cheesy',
    description:
      'Indulge in the perfect blend of flavors with our handcrafted pizzas, featuring a crispy crust, rich tomato sauce, and a mouthwatering mix of fresh toppings.',
    image: '/cheesy.webp',
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 3,
    name: 'hawaii',
    description:
      'Indulge in the perfect blend of flavors with our handcrafted pizzas, featuring a crispy crust, rich tomato sauce, and a mouthwatering mix of fresh toppings.',
    image: '/hawaii.webp',
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 4,
    name: 'italian',
    description:
      'Indulge in the perfect blend of flavors with our handcrafted pizzas, featuring a crispy crust, rich tomato sauce, and a mouthwatering mix of fresh toppings.',
    image: '/italian.webp',
    priceSm: 11.99,
    priceMd: 12.99,
    priceLg: 13.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 5,
    name: 'margherita',
    description:
      'Indulge in the perfect blend of flavors with our handcrafted pizzas, featuring a crispy crust, rich tomato sauce, and a mouthwatering mix of fresh toppings.',
    image: '/margherita.webp',
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 6,
    name: 'pepperoni',
    description:
      'Indulge in the perfect blend of flavors with our handcrafted pizzas, featuring a crispy crust, rich tomato sauce, and a mouthwatering mix of fresh toppings.',
    image: '/pepperoni.webp',
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 7,
    name: 'quattro formaggi',
    description:
      'Indulge in the perfect blend of flavors with our handcrafted pizzas, featuring a crispy crust, rich tomato sauce, and a mouthwatering mix of fresh toppings.',
    image: '/quattro-formaggi.webp',
    priceSm: 12.99,
    priceMd: 13.99,
    priceLg: 14.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 8,
    name: 'quattro stagioni',
    description:
      'Indulge in the perfect blend of flavors with our handcrafted pizzas, featuring a crispy crust, rich tomato sauce, and a mouthwatering mix of fresh toppings.',
    image: '/quattro-stagioni.webp',
    priceSm: 11.99,
    priceMd: 12.99,
    priceLg: 13.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 9,
    name: 'tonno',
    description:
      'Indulge in the perfect blend of flavors with our handcrafted pizzas, featuring a crispy crust, rich tomato sauce, and a mouthwatering mix of fresh toppings.',
    image: '/tonno.webp',
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
  {
    id: 10,
    name: 'vegetarian',
    description:
      'Indulge in the perfect blend of flavors with our handcrafted pizzas, featuring a crispy crust, rich tomato sauce, and a mouthwatering mix of fresh toppings.',
    image: '/vegetarian.webp',
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings: [
      {
        image: '/cherry.png',
        name: 'cherry tomatoes',
        price: 2,
      },
      {
        image: '/corn.png',
        name: 'corn',
        price: 2,
      },
      {
        image: '/fresh-tomatoes.png',
        name: 'fresh tomatoes',
        price: 2,
      },
      {
        image: '/jalapeno.png',
        name: 'jalapeno',
        price: 2,
      },
      {
        image: '/parmesan.png',
        name: 'parmesan',
        price: 2,
      },
    ],
  },
];

export default function Home() {
  return (
    <section >
      <Banner />
      <div className='container mx-auto '>
        <div className='grid grid-cols-2 gap-[15px] md:grid-cols-3 xl:grid-cols-4 xl:gap=[30px] py-12'>
          {pizzas.map((pizza, index) => {
            return <Pizza pizza={pizza} key={index} />
          })}
        </div>

      </div>
    </section>
  )

}
