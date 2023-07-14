import React from "react";

const Home = () => {
  return (
    <>
      <section className="bg-dark dark-mode position-relative min-vh-100 overflow-hidden pt-5">
        <svg
          className="position-absolute top-0"
          width={262}
          height={160}
          viewBox="0 0 262 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ left: "6%" }}
        >
          <ellipse
            cx={131}
            cy="30.5"
            rx={131}
            ry="129.5"
            fill="white"
            fillOpacity=".03"
          />
        </svg>
        <div className="container position-relative zindex-5 text-center pt-5 mt-lg-4 mt-xl-5">
          <h1 className="display-1 pt-4 mt-sm-3">
            <span className="text-white fw-normal">Have a look </span>
            <span className="d-inline-flex align-items-center">
              <span className="text-white">Ar</span>
              <img
                className="flex-shrink-0 mt-2"
                src="../assets/img/landing/intro/avatar.png"
                width={51}
                alt="Image"
              />
              <span className="text-white">und!</span>
            </span>
          </h1>
          <p className="fs-xl mb-5">
            And you will find everything you need to build a great looking
            website
          </p>
          <a
            className="scroll-down-btn"
            href="#landings"
            data-scroll=""
            data-scroll-offset={20}
          >
            <div className="mouse" />
            <p>Landings</p>
          </a>
        </div>
        <div className="d-none d-lg-block" style={{ marginTop: "-80px" }} />
        <div
          className="d-none d-sm-block d-lg-none"
          style={{ marginTop: "-40px" }}
        />
        <div className="parallax mx-auto mb-n5" style={{ maxWidth: 1606 }}>
          <div className="parallax-layer" data-depth="-0.1">
            <img
              src="assets/img/landing/intro/hero/01.png"
              alt="Background shapes"
            />
          </div>
          <div className="parallax-layer zindex-2" data-depth="0.12">
            <img
              src="assets/img/landing/intro/hero/02.png"
              alt="Foreground shape"
            />
          </div>
          <div className="parallax-layer zindex-2" data-depth="0.35">
            <img
              src="assets/img/landing/intro/hero/03.png"
              alt="Foreground shape"
            />
          </div>
          <div className="parallax-layer zindex-2" data-depth="0.23">
            <img
              src="assets/img/landing/intro/hero/04.png"
              alt="Foreground shape"
            />
          </div>
        </div>
      </section>

      <>
        <section className="overflow-hidden pt-2 pt-sm-3 pt-md-4 pt-lg-3 pb-1 pb-sm-3 pb-md-4 pb-lg-5">
          <div className="container position-relative py-5 my-lg-3 my-xl-4 my-xxl-5">
            <div
              className="position-absolute"
              style={{ marginLeft: "-12.7%" }}
              data-aos="zoom-in"
              data-aos-duration={500}
              data-aos-offset={300}
              data-disable-parallax-down="lg"
            >
              <svg
                className="text-warning d-none d-lg-block"
                width={744}
                height={744}
                viewBox="0 0 744 744"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={372} cy={372} r={372} />
              </svg>
            </div>
            <div className="d-none d-xxl-block" style={{ height: 190 }} />
            <div
              className="d-none d-lg-block d-xxl-none"
              style={{ height: 150 }}
            />
            <div className="row justify-content-center justify-content-lg-start position-relative zindex-2">
              <div
                className="col-sm-10 col-md-8 col-lg-5 col-xl-4 text-center text-lg-start"
                data-aos="fade-up"
                data-aos-duration={850}
                data-aos-offset={120}
                data-disable-parallax-down="lg"
              >
                <div className="ignore-dark-mode d-none d-lg-block">
                  <h2 className="display-5 mb-4">
                    Inner pages for everything you may need
                  </h2>
                  <p className="fs-lg text-dark pb-3 pb-sm-4 mb-lg-0">
                    Big collection of thoroughly designed inner page templates
                    from User Account/Dashboard to Specialty pages like 404 and
                    Coming Soon.
                  </p>
                </div>
                <div className="d-lg-none">
                  <h2 className="display-5 mb-4">
                    Inner pages for everything you may need
                  </h2>
                  <p className="fs-lg text-dark pb-3 pb-sm-4 mb-lg-0">
                    Big collection of thoroughly designed inner page templates
                    from User Account/Dashboard to Specialty pages like 404 and
                    Coming Soon.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="d-none d-xl-block"
              style={{ marginTop: "-240px" }}
            />
            <div
              className="d-none d-lg-block d-xl-none"
              style={{ marginTop: "-160px" }}
            />
          </div>
        </section>

        <section className="container py-5 mt-n4 mt-sm-n3 mt-md-0 my-lg-3 my-xl-4 my-xxl-5">
          <h2 className="display-5 text-center pt-md-3 pt-lg-4 pb-xxl-2 mt-xl-3 mb-4 mb-sm-5">
            More Around features
          </h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-4 gy-sm-5 pb-md-4 pb-lg-5 mb-2 mb-lg-0 mb-xxl-2">
            {/* Item*/}
            <div className="col text-center text-sm-start pt-2 pt-sm-0">
              <div className="pe-md-3 pe-lg-3 pe-xl-5">
                <img
                  className="d-inline-block mb-3 mb-lg-4"
                  src="assets/img/landing/intro/features/bootstrap.png"
                  width={56}
                  alt="Bootstrap"
                />
                <h3 className="h5 mb-2">Built with latest Bootstrap</h3>
                <p className="mb-0">
                  Around is the powerful front-end solution for websits and web
                  apps based on Bootstrap 5 - the world's most popular
                  responsive, mobile-first front-end component library.
                </p>
              </div>
            </div>
            {/* Item*/}
            <div className="col text-center text-sm-start pt-2 pt-sm-0">
              <div className="ps-md-3 px-lg-2 px-xl-4">
                <img
                  className="d-inline-block mb-3 mb-lg-4"
                  src="assets/img/landing/intro/features/sass.png"
                  width={56}
                  alt="Sass"
                />
                <h3 className="h5 mb-2">Easy to Customize with Sass</h3>
                <p className="mb-0">
                  Around is built using Sass. Easily change colors, typography
                  and much more. It is the most mature, stable, and powerful CSS
                  extension language in the world.
                </p>
              </div>
            </div>
            {/* Item*/}
            <div className="col text-center text-sm-start pt-2 pt-sm-0">
              <div className="pe-md-3 ps-lg-3 ps-xl-5">
                <img
                  className="d-inline-block mb-3 mb-lg-4"
                  src="assets/img/landing/intro/features/gulp.png"
                  width={56}
                  alt="Gulp"
                />
                <h3 className="h5 mb-2">Kick-start your development</h3>
                <p className="mb-0">
                  Start your development process fast and easy with Node.js and
                  Gulp setup. Configuration files are included in the download
                  package. Full tasks automation and local server hot reload.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="container">
          <div className="bg-dark position-relative rounded-5 overflow-hidden px-4 pt-1 pb-2 py-sm-4 py-lg-5">
            <div
              className="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100"
              style={{ backgroundColor: "rgba(255,255,255, .02)" }}
            />
            <div className="position-absolute top-0 end-0 pe-5 zindex-2">
              <svg
                className="me-5"
                width={514}
                height={254}
                viewBox="0 0 514 254"
                fill="white"
                fillOpacity=".03"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse cx={257} cy="0.5" rx={257} ry="253.5" />
              </svg>
            </div>
            <div className="d-none d-lg-flex position-absolute start-0 bottom-0 ms-n4">
              <div
                data-aos="fade-left"
                data-aos-duration={700}
                data-aos-anchor-placement="bottom-bottom"
              >
                <svg
                  className="text-primary"
                  width={117}
                  height={117}
                  viewBox="0 0 117 117"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="58.5" cy="58.5" r="58.5" />
                </svg>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration={700}
                data-aos-anchor-placement="bottom-bottom"
              >
                <svg
                  className="text-warning"
                  width={117}
                  height={117}
                  viewBox="0 0 117 117"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M-2.51516e-06 58.5C-3.52666e-06 70.0702 3.43096 81.3806 9.85902 91.0008C16.2871 100.621 25.4235 108.119 36.113 112.547C46.8025 116.975 58.5649 118.133 69.9128 115.876C81.2607 113.619 91.6844 108.047 99.8657 99.8657C108.047 91.6844 113.619 81.2607 115.876 69.9128C118.133 58.5649 116.975 46.8025 112.547 36.113C108.119 25.4235 100.621 16.2871 91.0009 9.85903C81.3806 3.43096 70.0702 -4.24071e-06 58.5 -5.11423e-06L58.5 58.5L-2.51516e-06 58.5Z" />
                </svg>
              </div>
            </div>
            <div
              className="dark-mode position-relative zindex-3 text-center py-5 my-xl-3 mx-auto"
              style={{ maxWidth: 565 }}
            >
              <h2 className="display-5">Subscribe to Newsletter</h2>
              <p className="fs-lg pb-3 mb-3 mb-lg-4">
                Subscribe to our newsletter to receive early discount offers,
                new templates info and updates.
              </p>
              <form
                className="subscription-form validate mx-auto"
                action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;id=29ca296126"
                method="post"
                name="mc-embedded-subscribe-form"
                target="_blank"
                noValidate=""
                style={{ maxWidth: 500 }}
              >
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="ai-mail" />
                  </span>
                  <input
                    className="form-control"
                    type="email"
                    name="EMAIL"
                    placeholder="Enter your email"
                    required=""
                    id="subscr-email"
                  />
                  <button
                    className="btn btn-primary"
                    type="submit"
                    name="subscribe"
                  >
                    Subscribe*
                  </button>
                </div>
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    className="subscription-form-antispam"
                    type="text"
                    name="b_c7103e2c981361a6639545bd5_29ca296126"
                    tabIndex={-1}
                  />
                </div>
                <div className="subscription-status mx-auto" />
              </form>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Home;
