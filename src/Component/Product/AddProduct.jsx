import React, { useEffect, useState } from "react";
import DashboardHeader from "../Header/ProtectedHeader";
import "./product.css";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [Messge, setMessge] = useState("");
  const userData = JSON.parse(localStorage.getItem("user"));
  const user_id = userData?._id;
  const [addProductData, setaddProductData] = useState({
    user_id: user_id,
    name: "",
    brand: "",
    modal: "",
    price: "",
    category: "",
    description:""
  });

  const addproducFunc = async () => {
    console.log("addProductData", addProductData);
    let result = await fetch("http://localhost:5000/add-product", {
      method: "POST",
      body: JSON.stringify(addProductData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result) {
      setMessge("Product added succesfully");
    } else {
      setMessge("Error in Product added!");
    }
  };
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
                        id="form9Example1"
                        className="form-control input-custom"
                        name="name"
                        required
                        onChange={(e) =>
                          setaddProductData((pre) => ({
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
                        onChange={(e) =>
                          setaddProductData((pre) => ({
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
                        name="brand"
                        required
                        onChange={(e) =>
                          setaddProductData((pre) => ({
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
                        onChange={(e) =>
                          setaddProductData((pre) => ({
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
                        onChange={(e) =>
                          setaddProductData((pre) => ({
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
                        onChange={(e) =>
                          setaddProductData((pre) => ({
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
                    onClick={addproducFunc}
                    className="btn btn-primary btn-rounded"
                    style={{ backgroundColor: "#0062CC" }}
                  >
                    Submit
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

export default AddProduct;
