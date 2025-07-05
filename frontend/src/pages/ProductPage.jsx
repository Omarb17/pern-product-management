import { ArrowLeftIcon, SaveIcon, Trash2Icon } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductStore } from "../../store/useProductStore";

const ProductPage = () => {
  const {
    currentProduct,
    formData,
    setFormData,
    loading,
    error,
    fetchProduct,
    updateProduct,
    deleteProduct,
  } = useProductStore();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchProduct(id);
  }, [fetchProduct, id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(id);
      navigate("/");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container px-4 py-8 mx-auto">
        <div className="alert alert-error">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-orange-100 via-orange-50 to-orange-100">
      <div className="container max-w-4xl px-4 py-8 mx-auto">
        <button
          onClick={() => navigate("/")}
          className="mb-8 text-orange-600 bg-orange-100 btn hover:bg-orange-200"
        >
          <ArrowLeftIcon className="mr-2 size-4" />
          Back To Products
        </button>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="overflow-hidden bg-orange-100 rounded-lg shadow-lg">
            <img
              src={currentProduct?.image}
              alt={currentProduct?.name}
              className="object-cover size-full"
            />
          </div>
          <div className="text-orange-800 border border-orange-200 shadow-lg card bg-orange-50">
            <div className="card-body">
              <h2 className="mb-6 text-2xl font-bold">Edit Product</h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  updateProduct(id);
                }}
                className="space-y-6"
              >
                <div className="form-control">
                  <label className="font-medium text-orange-700 label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Product name"
                    className="text-orange-800 bg-white border-orange-300 input input-bordered focus:border-orange-500 focus:ring-orange-500"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="flex flex-col form-control">
                  <label className="font-medium text-orange-700 label">
                    Price
                  </label>
                  <input
                    type="number"
                    min="0"
                    placeholder="0"
                    className="text-orange-800 bg-white border-orange-300 input input-bordered focus:border-orange-500 focus:ring-orange-500"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                  />
                </div>

                <div className="form-control">
                  <label className="font-medium text-orange-700 label">
                    Image URL
                  </label>
                  <input
                    type="text"
                    placeholder="https://example.com/image.jpg"
                    className="text-orange-800 bg-white border-orange-300 input input-bordered focus:border-orange-500 focus:ring-orange-500"
                    value={formData.image}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                  />
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={handleDelete}
                    className="text-white bg-orange-500 border-none btn hover:bg-orange-600"
                  >
                    <Trash2Icon className="mr-2 size-4" />
                    Delete Product
                  </button>

                  <button
                    type="submit"
                    disabled={
                      loading ||
                      !formData.name ||
                      !formData.price ||
                      !formData.image
                    }
                    className="btn bg-orange-500 text-white hover:bg-orange-600 border-none min-w-[140px]"
                  >
                    {loading ? (
                      <span className="loading loading-spinner loading-sm" />
                    ) : (
                      <>
                        <SaveIcon className="mr-2 size-4" />
                        Save Changes
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
