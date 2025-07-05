import { useEffect } from "react";
import { useProductStore } from "../../store/useProductStore";
import { PackageIcon, PlusCircleIcon, RefreshCcwIcon } from "lucide-react";
import AddProductModal from "../components/AddProductModal";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-orange-100 via-orange-50 to-orange-100">
      <main className="max-w-6xl px-4 py-8 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button
            className="flex items-center px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600"
            onClick={() =>
              document.getElementById("add_product_modal").showModal()
            }
          >
            <PlusCircleIcon className="mr-2 size-5" />
            Add Product
          </button>

          <button
            className="text-orange-500 bg-orange-100 border-none btn btn-circle hover:bg-orange-200"
            onClick={fetchProducts}
          >
            <RefreshCcwIcon className="size-5" />
          </button>
        </div>

        <AddProductModal />

        {error && (
          <div className="p-4 mb-8 text-orange-700 bg-orange-100 border border-orange-300 rounded-md">
            {error}
          </div>
        )}

        {products.length === 0 && !loading && (
          <div className="flex flex-col items-center justify-center space-y-4 h-96">
            <div className="p-6 bg-orange-100 rounded-full">
              <PackageIcon className="text-orange-500 size-12" />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-2xl font-semibold text-orange-700">
                No Products Found
              </h3>
              <p className="max-w-sm text-orange-400">
                Get started by adding your first product to the inventory
              </p>
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-orange-500 loading loading-spinner loading-lg" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default HomePage;
