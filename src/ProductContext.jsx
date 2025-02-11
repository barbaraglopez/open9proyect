import React, { createContext, useState, useEffect, useContext } from "react";

// Crear el contexto de productos y carrito
const ProductContext = createContext();

// Hook para acceder a los productos y al carrito desde cualquier componente
export const useProducts = () => {
    return useContext(ProductContext);
};

// El proveedor de contexto que envuelve a la app
export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([
        { id: 1, name: "Product 1", description: "Description for product 1", price: 29.99 },
        { id: 2, name: "Product 2", description: "Description for product 2", price: 49.99 },
        { id: 3, name: "Product 3", description: "Description for product 3", price: 39.99 },
        { id: 4, name: "Product 4", description: "Description for product 4", price: 19.99 },
        { id: 5, name: "Product 5", description: "Description for product 5", price: 59.99 },
        { id: 6, name: "Product 6", description: "Description for product 6", price: 99.99 },
        { id: 7, name: "Product 7", description: "Description for product 7", price: 79.99 },
        { id: 8, name: "Product 8", description: "Description for product 8", price: 89.99 },
    ]);

    const [images, setImages] = useState({
        logo: "../src/assets/icons/OpenLogo.png", // Imagen del logo
        wallet: "../src/assets/icons/iconWallet.png", // Imagen del banner
        burguerMenu: "../src/assets/icons/Menu-burger.png", // Imagen de producto 1
        rubi: "../src/assets/icons/rubiicon.png",
        priceHistory:"../src/assets/img/PriceHistory.png", // Imagen de producto 2
        priceHistoryIcon:"../src/assets/icons/Icon-pricehistory.png",
        category:"../src/assets/icons/categoryIcon.png",
        items: "../src/assets/icons/itemsIcon.png",
        status: "../src/assets/icons/statusIcon.png",
        pricerange: "../src/assets/icons/priceIcon.png",
        sortBy: "../src/assets/icons/sortIcon.png",                 
    });

    // Recuperar el carrito del localStorage al montar el componente
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Persistir el carrito en el localStorage cuando cambie
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Función para agregar un producto al carrito
    const addToCart = (product) => {
        setCart((prevCart) => {
            const newCart = [...prevCart, product];
            return newCart;
        });
    };

    // Función para eliminar un producto del carrito
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    // Función para vaciar el carrito
    const clearCart = () => {
        setCart([]);
    };

    return (
        <ProductContext.Provider value={{ products, cart, addToCart, removeFromCart, clearCart, images }}>
            {children}
        </ProductContext.Provider>
    );
};
