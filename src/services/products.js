import dots from '../components/img/dots.jpg';
import duck from '../components/img/duck.jpg';
import duck2 from '../components/img/duck2.jpg';
import eggs from '../components/img/eggs.jpg';
import fire from '../components/img/fire.jpg';
import game from '../components/img/game.jpg';
import green from '../components/img/green.jpg';
import hotdog from '../components/img/hotdog.jpg';
import mu from '../components/img/mu.jpg';
import santa from '../components/img/santa.jpg';
import socks from '../components/img/socks.jpg';
import tv from '../components/img/tv.jpg';


const products = [
    { id: 1, name: 'Luce tus dots', description: 'Calcetines 100% algodon Talles: S-M-L', price: 'USD 100', category: 'category1', Image: dots  },
    { id: 2, name: 'Duck steps', description: 'Calcetines 100% algodon Talles: S-M-L', price: 'USD 130', category: 'category2', Image: duck },
    { id: 3, name: 'Patitos', description: 'Calcetines 100% algodon Talles: S-M-L', price: 'USD 120', category: 'category3', Image: duck2 },
    { id: 4, name: 'Perfect chef', description: 'Calcetines 100% algodon Talles: S-M-L', price: 'USD 140', category: 'category4', Image: eggs },
    { id: 5, name: 'Light my fire', description: 'Calcetines 100% algodon Talles: S-M-L', price: 'USD 150', category: 'category5' , Image: fire },
    { id: 6, name: 'Play the game', description: 'Calcetines 100% algodon Talles: S-M-L', price: 'USD 110', category: 'category6', Image: mu },
    { id: 7, name: 'Cactus', description: 'Calcetines 100% algodon Talles: S-M-L', price: 'USD 120', category: 'category7', Image: green },
    { id: 8, name: 'Hotdog', description: 'Calcetines 100% algodon Talles: S-M-L', price: 'USD 115', category: 'category8', Image: santa},
    { id: 9, name: 'Santa', description: 'Calcetines 100% algodon Talles: S-M-L', price: 'USD 100', category: 'category9', Image: game },
    { id: 10, name: 'Serius guy', description: 'Calcetines 100% algodon Talles: S-M-L', price: 'USD 110', category: 'category10', Image: hotdog },
    { id: 11, name: 'Moving', description: 'Calcetines 100% algodon Talles: S-M-L', price: 'USD 105', category: 'category11', Image: tv},
    { id: 12, name: 'Angus', description: 'Calcetines 100% algodon Talles: S-M-L', price: 'USD 105', category: 'category12', Image: socks },

    
    // Agrega más productos aquí
];

export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (categoryId) {
                resolve(products.filter(product => product.category === categoryId));
            } else {
                resolve(products);
            }
        }, 1000);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === parseInt(id, 10)));
        }, 1000);
    });
};
