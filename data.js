import bcrypt from 'bcryptjs';

const data = {

    users: [
        {
            name: 'Zach',
            email: 'zsykes21@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'Johnny',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        }
    ],
    products: [
        {
            name: 'Nike Slim Shirt',
            slug: 'nike-slim-shirt',
            image: '/assets/shirt.jpeg',
            brand: 'Nike',
            category: 'Shirts',
            description: 'high quality shirt',
            price: 120, 
            countInStock: 10,
            rating: 1.5,
            numReviews: 10,
        },
        {
            name: 'Nike Slim Pants',
            slug: 'nike-slim-pants',
            image: '/assets/avllogo.png',
            brand: 'Nike',
            category: 'Pants',
            description: 'high quality pants',
            price: 120, 
            countInStock: 10, 
            rating: 4.5,
            numReviews: 10,
            
        },
        {
            name: 'Adidas Slim Shirt',
            slug: 'adidas-slim-shirt',
            image: '/assets/shirt.jpeg',
            brand: 'Adidas',
            category: 'Shirts',
            description: 'high quality shirt',
            price: 120, 
            countInStock: 0,
            rating: 5.0,
            numReviews: 10,
        },
        {
            name: 'Adidas Big Ol Shirt',
            slug: 'adidas-big-ol-shirt',
            image: '/assets/shirt.jpeg',
            brand: 'Adidas',
            category: 'Shirts',
            description: 'A Big Ol Shirt that No One Likes :_D',
            price: 10, 
            countInStock: 7,
            rating: 1.0,
            numReviews: 2,
        },
    ]
}

export default data