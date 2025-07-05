import React from "react";
import { useProductStore } from "../../store/useProductStore";
import {
  DollarSignIcon,
  ImageIcon,
  Package2Icon,
  PlusCircleIcon,
} from "lucide-react";

function AddProductModal() {
  const { addProduct, formData, setFormData, loading } = useProductStore();

  return (
    <dialog id="add_product_modal" className="modal">
      <div className="text-orange-800 border border-orange-300 modal-box bg-orange-50">
        <button
          formMethod="dialog"
          className="absolute text-orange-500 right-2 top-2 btn btn-sm btn-circle hover:bg-orange-200"
        >
          X
        </button>

        <h3 className="mb-8 text-lg font-bold text-orange-700">
          Add New Product
        </h3>

        <form onSubmit={addProduct} className="grid gap-6">
          <div className="grid gap-6">
            <div className="form-control">
              <label className="label">
                <span className="text-base font-medium text-orange-700">
                  Product Name
                </span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-orange-400">
                  <Package2Icon className="size-5" />
                </div>
                <input
                  type="text"
                  placeholder="Enter product name"
                  className="w-full py-3 pl-10 text-orange-800 placeholder-orange-400 bg-orange-100 border border-orange-300 rounded-md focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="text-base font-medium text-orange-700">
                  Price
                </span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-orange-400"></div>
                <input
                  type="number"
                  min="0"
                  placeholder="0.00"
                  className="w-full py-3 pl-10 text-orange-800 placeholder-orange-400 bg-orange-100 border border-orange-300 rounded-md focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="text-base font-medium text-orange-700">
                  Image URL
                </span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-orange-400">
                  <ImageIcon className="size-5" />
                </div>
                <input
                  type="text"
                  placeholder="https://example.com/image.jpg"
                  className="w-full py-3 pl-10 text-orange-800 placeholder-orange-400 bg-orange-100 border border-orange-300 rounded-md focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="modal-action">
            <button
              formMethod="dialog"
              className="text-orange-500 btn hover:bg-orange-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn bg-orange-500 text-white hover:bg-orange-600 min-w-[120px]"
              disabled={
                !formData.name || !formData.price || !formData.image || loading
              }
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                <>
                  <PlusCircleIcon className="mr-2 size-5" />
                  Add Product
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default AddProductModal;
