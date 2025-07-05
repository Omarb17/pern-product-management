import { EditIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { useProductStore } from "../../store/useProductStore";

const ProductCard = ({ product }) => {
  const { deleteProduct } = useProductStore();

  return (
    <div className="text-orange-800 transition-shadow duration-300 border border-orange-200 shadow-lg card bg-orange-50 hover:shadow-xl">
      <figure className="relative pt-[56.25%] bg-orange-100">
        <img
          src={product.image}
          alt={product.name}
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
      </figure>

      <div className="card-body">
        <h2 className="text-lg font-semibold text-orange-700 card-title">
          {product.name}
        </h2>
        <p className="text-2xl font-bold text-orange-600">
          {Number(product.price)} DH
        </p>

        <div className="justify-end mt-4 space-x-2 card-actions">
          <Link
            to={`/product/${product.id}`}
            className="text-white bg-orange-500 border-none btn btn-sm hover:bg-orange-600"
          >
            <EditIcon className="size-4" />
          </Link>

          <button
            className="text-white bg-orange-500 border-none btn btn-sm hover:bg-orange-600"
            onClick={() => deleteProduct(product.id)}
          >
            <Trash2Icon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
