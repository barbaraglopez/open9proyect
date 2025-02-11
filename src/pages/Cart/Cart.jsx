import { useProducts } from "../../ProductContext";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Cart = () => {
    const { cart, clearCart, removeFromCart } = useProducts(); // Obtener los productos del carrito, la función para vaciarlo y la de eliminar un producto
    const navigate = useNavigate(); // Usamos useNavigate para redirigir al usuario

    // Calcular el total del carrito
    const totalAmount = cart.reduce((total, product) => total + product.price, 0).toFixed(2);

    // Función para manejar la compra
    const handleBuy = () => {
        console.log("Compra realizada");
        navigate("/purchase");
    };

    // Función para manejar la eliminación de un producto del carrito
    const handleRemove = (productId) => {
        removeFromCart(productId); // Elimina el producto con el ID especificado
    };

    // Función para manejar la eliminación del carrito
    const handleClearCart = () => {
        clearCart(); // Vacía el carrito
        console.log("Carrito vacío");
    };

    return (
        <>
            <Navbar />
            <div className="p-4 md:p-8 lg:p-12 h-screen bg-[#262626] text-white">
                <h1 className="text-2xl font-bold mb-8">Your Cart</h1>
                <div className="space-y-6">
                    {cart.length === 0 ? (
                        <p className="text-gray-400">Your cart is empty.</p>
                    ) : (
                        cart.map((product) => (
                            <div key={product.id} className="flex justify-between items-center bg-[#2E2E2E] p-4 rounded-lg">
                                <div>
                                    <h2 className="font-semibold">{product.name}</h2>
                                    <p className="text-gray-400">{product.description}</p>
                                </div>
                                <span className="text-yellow-500">{product.price} ETH</span>
                                <button
                                    onClick={() => handleRemove(product.id)}
                                    className="text-red-500 hover:text-red-400"
                                >
                                    <FaTrashAlt />
                                </button>
                            </div>
                        ))
                    )}
                </div>
                {cart.length > 0 && (
                    <div className="mt-8 flex justify-between items-center bg-[#2E2E2E] p-4 rounded-lg">
                        <span className="text-lg font-semibold">Total:</span>
                        <span className="text-[#DDF247] text-xl">{totalAmount} ETH</span>
                    </div>
                )}

                {/* Botones de acción */}
                <div className="mt-8 flex justify-between gap-4">
                    <button
                        onClick={handleClearCart}
                        className="flex items-center gap-2 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-500 cursor-pointer"
                    >
                        <FaTrashAlt /> <span>Clear Cart</span>
                    </button>

                    <button
                        onClick={handleBuy}
                        className="flex items-center gap-2 px-6 py-2 bg-[#DDF247] cursor-pointer text-black rounded-full hover:bg-[#DDF247]"
                    >
                        <span>Buy Now</span>
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cart;
