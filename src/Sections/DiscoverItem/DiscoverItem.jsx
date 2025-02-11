import { useProducts } from "../../ProductContext";
import { useNavigate } from "react-router-dom";
import Card from "../../components/cards/Card";

const DiscoverItem = () => {
  const { products } = useProducts(); // Obtienes los productos del contexto
  const navigate = useNavigate(); // Usamos useNavigate en lugar de useHistory

  // Función para manejar el clic en una card
  const handleCardClick = (productId) => {
    console.log(`Card clicked: Product ID = ${productId}`); // Verificar cuál producto fue clickeado
    // Navegamos a la página del producto usando productId en la URL
    navigate(`/product-detail/${productId}`);
  };

  return (
    <div className="px-4 py-20 sm:px-10 md:px-20 lg:px-32 xl:px-40 bg-[#161616] flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl">
        {products.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            description={product.description}
            onClick={() => handleCardClick(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default DiscoverItem;

