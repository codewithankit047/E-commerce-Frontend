import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  //   useEffect(() => {
  //     const auth = localStorage.getItem("user");
  //     if (auth) {
  //       navigate("/");
  //     }
  //   }, []);

  const loginfunc = async () => {
    console.log("loginData", loginData);
    //     let result = await fetch("http://localhost:5000/register", {
    //       method: "POST",
    //       body: JSON.stringify(singupdata),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     });
    //     result = await result.json();
    //     console.log(result);
    //     if (result) {
    //       navigate("/dashboard");
    //       localStorage.setItem("user", JSON.stringify(result));
    //       localStorage.setItem("token", JSON.stringify(result.auth));

    //       navigate("/");
    //     } else {
    //       alert("Error in Sign Up!");
    //     }
  };
  return (
    <>
      {" "}
      <div className="container">
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  className="img-fluid"
                  alt="Phone image"
                />
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form>
                  <h2 className="fw-bold mb-5 text-center">Sign up now</h2>

                  {/* Email input */}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form1Example13"
                      className="form-control form-control-lg"
                      name="email"
                      required=""
                      onChange={(e) =>
                        setLoginData((pre) => ({
                          ...pre,
                          email: e.target.value,
                        }))
                      }
                    />
                    <label className="form-label" htmlFor="form1Example13">
                      Email address
                    </label>
                  </div>
                  {/* Password input */}
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form1Example23"
                      className="form-control form-control-lg"
                      name="password"
                      required=""
                      onChange={(e) =>
                        setLoginData((pre) => ({
                          ...pre,
                          password: e.target.value,
                        }))
                      }
                    />
                    <label className="form-label" htmlFor="form1Example23">
                      Password
                    </label>
                  </div>
                  <div className="d-flex justify-content-around align-items-center mb-4">
                    {/* Checkbox */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="form1Example3"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form1Example3"
                      >
                        {" "}
                        Remember me{" "}
                      </label>
                    </div>
                    <a href="#!">Forgot password?</a>
                  </div>
                  {/* Submit button */}
                  <div className="container text-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                      onClick={loginfunc}
                    >
                      Sign in
                    </button>
                  </div>
                  <div className=" container divider  align-items-center my-4 text-center">
                    <p className="text-center fw-bold mx-3 mb-0 text-muted">
                      OR
                    </p>
                  </div>
                  <div className="container">
                    <a
                      className="btn btn-primary btn-lg btn-block d-flex mb-2 text-center"
                      style={{ backgroundColor: "#3b5998" }}
                      href="#!"
                      role="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-facebook me-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                      Continue with Facebook
                    </a>
                    <a
                      className="btn btn-primary btn-lg btn-block d-flex text-center"
                      style={{ backgroundColor: "#55acee" }}
                      href="#!"
                      role="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-google me-4"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                      </svg>
                      Continue with Google
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
