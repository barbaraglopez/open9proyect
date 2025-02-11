import { useParams } from "react-router-dom";
import { useProducts } from "../../ProductContext";
import { useState, useEffect } from "react"; // Usamos useState y useEffect
import { FaClock, FaEye, FaThumbsUp, FaHeart } from "react-icons/fa"; // Importar íconos
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Card from "../../components/cards/Card";
import { GoArrowUpRight } from "react-icons/go";

export default function ProductDetail() {
  const { productId } = useParams(); // Captura el productId de la URL
  const { products, addToCart, cart } = useProducts(); // Obtener productos del contexto
  const [product, setProduct] = useState(null); // Estado para guardar el producto
  const [showModal, setShowModal] = useState(false); // Estado para manejar el modal
  const { images } = useProducts();

  const relatedArtworks = [
    { id: 1, name: "Artwork 1", description: "Description for Artwork 1" },
    { id: 2, name: "Artwork 2", description: "Description for Artwork 2" },
    { id: 3, name: "Artwork 3", description: "Description for Artwork 3" },
    { id: 4, name: "Artwork 4", description: "Description for Artwork 4" },
  ];

  useEffect(() => {
    console.log("productId from URL:", productId);
    const foundProduct = products.find((p) => p.id === parseInt(productId));
    if (foundProduct) {
      console.log("Producto encontrado:", foundProduct);
      setProduct(foundProduct);
    } else {
      console.error("Producto no encontrado para el ID:", productId);
    }
  }, [productId, products]);

  if (!product) return <div>Product not found</div>;

  const { name, description, price } = product;

  const handleAddToCart = () => {
    addToCart(product);
    console.log("Producto agregado al carrito:", product); //
    console.log("productos del carrito", cart)
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar />
      <div className="p-4 md:p-8 lg:p-12 bg-[#161616] text-white font-azeret">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#262626] h-full rounded-lg flex items-center justify-center aspect-w-16 aspect-h-9">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-gray-400">By {description}</p>
            <div className="mt-4 flex gap-4">
              <button className="flex items-center gap-2 px-6 py-2 bg-[#262626] text-white rounded-full hover:bg-gray-700">
                <FaEye />
                <span>View</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-2 bg-[#262626] text-white rounded-full hover:bg-gray-700">
                <FaThumbsUp />
                <span>Top #2 Trending</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-2 bg-[#262626] text-white rounded-full hover:bg-gray-700">
                <FaHeart />
                <span>10 Favorites</span>
              </button>
            </div>

            {/* Sección "Sale Ends May" y "Current Price" */}
            <div className="mt-4 bg-[#262626] p-4 rounded-lg flex flex-col space-y-4">
              <div className="flex flex-col gap-4">
                {/* Sale Ends May */}
                <button className="flex items-center gap-2 px-4 py-2 border rounded bg-[#262626] text-white justify-start">
                  <FaClock />
                  <span>Sale Ends May 22 At 9:39</span>
                </button>
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <span className="text-lg font-semibold">Current Price:</span>
                    <span className="text-gray-400">{price} ETH</span>
                  </div>
                  <button
                    className="bg-[#DDF247] text-black px-4 py-2 rounded flex items-center font-bold"
                    onClick={handleAddToCart}
                  >
                    Place a bid
                    <GoArrowUpRight className="font-bold" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-[#262626] p-4 rounded-lg">
              <h2 className="text-lg font-semibold flex">
                <img src={images.priceHistoryIcon} className="mr-2" />
                Description
              </h2>
              <p className="text-gray-300 mt-2">{description}</p>
            </div>
            <div className="mt-8 bg-[#262626] p-4 rounded-lg">
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold mb-4 flex">
                  <img src={images.priceHistoryIcon} className="mr-2" />
                  Price History
                </h2>
                <div className="relative h-32 flex items-center justify-center">
                  <img src={images.priceHistory} className="w-90" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-[#262626] p-4 rounded-lg">
          <h2 className="text-xl font-semibold flex mb-4">
            <img src={images.priceHistoryIcon} className="mr-2" />
            Details
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <p>Contract Address:</p>
            <p className="text-right text-[#DDF247]">0x1984...c3fE</p>

            <p>Token ID:</p>
            <p className="text-right">0270</p>

            <p>Chain:</p>
            <p className="text-right">Ethereum</p>

            <p>Creator Earnings:</p>
            <p className="text-right">8%</p>
          </div>
        </div>

        <div className="mt-8 bg-[#262626] p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 flex">
            <img src={images.priceHistoryIcon} className="mr-2" />
            Offers</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="p-2">Price</th>
                <th className="p-2">USD Price</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Expiration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="p-2">0.0014 ETH</td>
                <td className="p-2">$96.60</td>
                <td className="p-2">3</td>
                <td className="p-2">In 20 days</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-2">0.002 ETH</td>
                <td className="p-2">$138.20</td>
                <td className="p-2">1</td>
                <td className="p-2">In 15 days</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="p-2">0.0025 ETH</td>
                <td className="p-2">$172.50</td>
                <td className="p-2">2</td>
                <td className="p-2">In 10 days</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 bg-[#262626] p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Related Artworks</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedArtworks.map((artwork) => (
              <Card
                key={artwork.id}
                name={artwork.name}
                description={artwork.description}
                onClick={() => alert(`Clicked on ${artwork.name}`)}
              />
            ))}
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-[#262626] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#2E2E2E] p-12 rounded-lg w-1/3">
            <h2 className="text-xl font-semibold text-[#DDF247]">Added to Cart</h2>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-gray-400">{description}</p>
              <p className="text-gray-500 mt-2">Price: {price} ETH</p>
              <button
                className="mt-4 bg-[#DDF247] text-black px-4 py-2 rounded"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
