import React, { useEffect, useState } from "react";
import DashboardHeader from "../Header/ProtectedHeader";
import "./product.css";
import { useNavigate } from "react-router-dom";

const ProductListing = () => {
  const navigate = useNavigate();
  const [productdata, setProductData] = useState("");
  const [message, setMessge] = useState("");
  const getproductFunc = async () => {
    let result = await fetch("http://localhost:5000/get-product");
    result = await result.json();
    console.log(result);
    setProductData(result);
  };
  useEffect(() => {
    getproductFunc();
  }, []);

  const starSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-star-fill"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );
  const deleteProduct = async (id, event) => {
    console.log(id);
    let result = fetch(`http://localhost:5000/product/${id}`, {
      method: "Delete",
    });
    // result = await result.json();
    if (result.ok && result.acknowledged && result.deletedCount === 1) {
      setMessge("Error deleting product");
    } else {
      setMessge("Deleted successfully");
      window.location.reload();
    }
  };
  return (
    <>
      <DashboardHeader />
      <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-center row mb-2">
          <div className="col-md-10 mb-2">
            <div>
              {productdata.length === 0 ? (
                <div className="row p-2 bg-white border rounded mb-2">
                  <div className="col-md-3 mt-1">
                    <h2>No data found.</h2>
                  </div>
                </div>
              ) : (
                productdata.map((item, index) => (
                  <div key={index}>
                    <div className="row p-2 bg-white border rounded mb-2">
                      <div className="col-md-3 mt-1">
                        <img
                          className="img-fluid img-responsive rounded product-image"
                          src="https://i.imgur.com/QpjAiHq.jpg"
                        />
                      </div>
                      <div className="col-md-6 mt-1 mb-2">
                        <h5>{item?.name}</h5>
                        <div className="d-flex flex-row">
                          <div className="ratings mr-2">
                            <div className="svg-container">
                              {[...Array(4)].map((_, index) => (
                                <div key={index}>{starSvg}</div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="mt-1 mb-1 spec-1">
                          <span>100% cotton</span>
                          <span className="dot" />
                          <span>Light weight</span>
                          <span className="dot" />
                          <span>
                            Best finish
                            <br />
                          </span>
                        </div>
                        <div className="mt-1 mb-1 spec-1">
                          <span>Unique design</span>
                          <span className="dot" />
                          <span>For men</span>
                          <span className="dot" />
                          <span>
                            Casual
                            <br />
                          </span>
                        </div>
                        <p className="text-justify text-truncate para mb-0">
                          {item?.description}
                          <br />
                          <br />
                        </p>
                      </div>
                      <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                        <div className="d-flex flex-row align-items-center">
                          <h4 className="mr-1">${item?.price}</h4>
                          <span className="strike-text">
                            ${(item?.price / 100) * 33}
                          </span>
                        </div>
                        <h6 className="text-success">Free shipping</h6>
                        <div className="d-flex flex-column mt-4">
                          <button
                            className="btn btn-primary btn-sm"
                            type="button"
                            onClick={() => {
                              deleteProduct(item?._id);
                            }}
                          >
                            Delete{" "}
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-trash"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                              </svg>
                            </span>
                          </button>

                          <button
                            className="btn btn-outline-primary btn-sm mt-2"
                            type="button"
                          >
                            Update
                          </button>
                        </div>
                        {message}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListing;

//
// https://i.imgur.com/JvPeqEF.jpg https://i.imgur.com/Bf4dIaN.jpg https://i.imgur.com/HO8e9b8.jpg
