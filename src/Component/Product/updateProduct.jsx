import React, { useEffect, useState } from "react";
import DashboardHeader from "../Header/ProtectedHeader";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [Messge, setMessge] = useState("");
  const userData = JSON.parse(localStorage.getItem("user"));
  const user_id = userData?._id;
  const [UpateProductData, setUpdateProductData] = useState({
    user_id: user_id,
    name: "",
    brand: "",
    modal: "",
    price: "",
    category: "",
    description: "",
  });

  const updateproducFunc = async (event) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",
      body: JSON.stringify(UpateProductData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result) {
      setMessge("Product update succesfully");
    } else {
      setMessge("Error in Product Updateing!");
    }
  };

  // Get product
  const getproductFunc = async (id, event) => {
    let result = await fetch(`http://localhost:5000/product/${id}`);
    result = await result.json();
    setUpdateProductData((pre) => ({
      ...pre,
      name: result?.name,
    }));
    setUpdateProductData((pre) => ({
      ...pre,
      brand: result?.brand,
    }));
    setUpdateProductData((pre) => ({
      ...pre,
      modal: result?.modal,
    }));
    setUpdateProductData((pre) => ({
      ...pre,
      price: result?.price,
    }));
    setUpdateProductData((pre) => ({
      ...pre,
      category: result?.category,
    }));
    setUpdateProductData((pre) => ({
      ...pre,
      description: result?.description,
    }));
  };
  useEffect(() => {
    getproductFunc(id);
  }, []);

  return (
    <>
      <DashboardHeader />
      <div className="row mt-3 mx-3" style={{ marginTop: 25 }}>
        <div className="col-md-3">
          <div className="text-center">
            <h2 type="submit">Add Product</h2>
          </div>
        </div>
        <div className="col-md-9 justify-content-center">
          <div className="card card-custom pb-4">
            <div className="card-body mt-0 mx-5">
              <div className="text-center mb-3 pb-2 mt-3">
                <h4 style={{ color: "#495057" }}>Product Details</h4>
              </div>
              <form className="mb-0">
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        value={UpateProductData?.name}
                        id="form9Example1"
                        className="form-control input-custom"
                        name="name"
                        required
                        onChange={(e) =>
                          setUpdateProductData((pre) => ({
                            ...pre,
                            name: e.target.value,
                          }))
                        }
                      />
                      <label className="form-label" htmlFor="form9Example1">
                        Product name
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form9Example2"
                        className="form-control input-custom"
                        name="modal"
                        required
                        value={UpateProductData?.modal}
                        onChange={(e) =>
                          setUpdateProductData((pre) => ({
                            ...pre,
                            modal: e.target.value,
                          }))
                        }
                      />
                      <label className="form-label" htmlFor="form9Example2">
                        Modal Year
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form9Example3"
                        className="form-control input-custom"
                        value={UpateProductData?.brand}
                        name="brand"
                        required
                        onChange={(e) =>
                          setUpdateProductData((pre) => ({
                            ...pre,
                            brand: e.target.value,
                          }))
                        }
                      />
                      <label className="form-label" htmlFor="form9Example3">
                        Brand
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form9Example4"
                        className="form-control input-custom"
                        name="price"
                        required
                        value={UpateProductData?.price}
                        onChange={(e) =>
                          setUpdateProductData((pre) => ({
                            ...pre,
                            price: e.target.value,
                          }))
                        }
                      />
                      <label className="form-label" htmlFor="form9Example4">
                        Price
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form9Example6"
                        className="form-control input-custom"
                        name="category"
                        required
                        value={UpateProductData?.category}
                        onChange={(e) =>
                          setUpdateProductData((pre) => ({
                            ...pre,
                            category: e.target.value,
                          }))
                        }
                      />
                      <label className="form-label" htmlFor="form9Example6">
                        Category
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form9Example6"
                        className="form-control input-custom"
                        name="category"
                        required
                        value={UpateProductData?.description}
                        onChange={(e) =>
                          setUpdateProductData((pre) => ({
                            ...pre,
                            description: e.target.value,
                          }))
                        }
                      />
                      <label className="form-label" htmlFor="form9Example6">
                        Description
                      </label>
                    </div>
                  </div>
                </div>
                <div className="float-end ">
                  {/* Submit button */}
                  <button
                    type="submit"
                    onClick={updateproducFunc}
                    className="btn btn-primary btn-rounded"
                    style={{ backgroundColor: "#0062CC" }}
                  >
                    Update
                  </button>
                </div>
              </form>
              <p>{Messge}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
