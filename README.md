![showcase]("/showcase.png")

**[Preview Project]("https://livelink")**

# **🌶️ Down Town Food Restaurant**

Multi-page website bundled with `vite`. 🤦 I almost forgot what it was like before UI frameworks like `Reactjs` and `the other one`.

## **🏗️ Tech Stack 🥣**

- Vanilla HTML + CSS + JavaScript 🍨
- Vite : bundling
- SwiperJs : for swiping? I guess 🤔
- GSAP : animation library

## **🤔 Challenges & Observations**

- **👹 My silly mistake** : All pages aside the `index.html` seems broken and wouldn't response to all javascript related events on the page. At first I thought it was the the folder structure and how `vite` builds the final product.

  - This bug was as a result of a reference to a DOM element only available in `index.html` and breaks other pages when it loads the same `main.js` (which included `animation.js`) in these pages.

  - First solution was to fix all routing issues (🙄 vite never built other pages unless specified in `vite.config.js`)

  - And 🥁....... ✨ separated animation function into `animateAbout.js` and added it to `index.html` page.

- **🤔 Vite adds `script` in htm `head`** : This could be because I loaded the styles from `main.js` instead of adding it manually to every page.

  - But either way, I noticed there was alway a delay before the styles were applied to the pages, irrespective of how I referenced the `styles.css` in each page

 <div class="nav-menu_slider-container">
          <!-- wrapper -->
          <div class="slider swiper-wrapper">
            <!-- slides -->
            <div class="slider-image swiper-slide">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                id="swiper-left"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="47.5"
                  y="47.5"
                  width="47"
                  height="47"
                  rx="1.5"
                  transform="rotate(-180 47.5 47.5)"
                  stroke="#EBEBE9"
                />
                <path
                  d="M31 24H18"
                  stroke="#151515"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.0002 28.6667L17.3335 24.0001L22.0002 19.3334"
                  stroke="#151515"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div class="slide-image">
                <img src="/assets/banner-menu.png" alt="banners" />
              </div>
              <div class="slide-caption">
                <h2 class="h1">About us</h2>
                <small>-- see more --</small>
              </div>

              <svg
                width="48"
                height="48"
                id="swiper-right"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="1.5"
                  stroke="#EBEBE9"
                />
                <g clip-path="url(#clip0_144_3691)">
                  <path
                    d="M17 24L30 24"
                    stroke="#151515"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M26 19.3333L30.6667 23.9999L26 28.6666"
                    stroke="#151515"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_144_3691">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(16 16)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div class="slider-image swiper-slide">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                id="swiper-left"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="47.5"
                  y="47.5"
                  width="47"
                  height="47"
                  rx="1.5"
                  transform="rotate(-180 47.5 47.5)"
                  stroke="#EBEBE9"
                />
                <path
                  d="M31 24H18"
                  stroke="#151515"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.0002 28.6667L17.3335 24.0001L22.0002 19.3334"
                  stroke="#151515"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div class="slide-image">
                <img src="/assets/banner-menu.png" alt="banners" />
              </div>
              <div class="slide-caption">
                <h2 class="h1">About us</h2>
                <small>-- see more --</small>
              </div>

              <svg
                width="48"
                height="48"
                id="swiper-right"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="1.5"
                  stroke="#EBEBE9"
                />
                <g clip-path="url(#clip0_144_3691)">
                  <path
                    d="M17 24L30 24"
                    stroke="#151515"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M26 19.3333L30.6667 23.9999L26 28.6666"
                    stroke="#151515"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_144_3691">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(16 16)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div class="slider-image swiper-slide">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                id="swiper-left"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="47.5"
                  y="47.5"
                  width="47"
                  height="47"
                  rx="1.5"
                  transform="rotate(-180 47.5 47.5)"
                  stroke="#EBEBE9"
                />
                <path
                  d="M31 24H18"
                  stroke="#151515"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.0002 28.6667L17.3335 24.0001L22.0002 19.3334"
                  stroke="#151515"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div class="slide-image">
                <img src="/assets/banner-menu.png" alt="banners" />
              </div>
              <div class="slide-caption">
                <h2 class="h1">About us</h2>
                <small>-- see more --</small>
              </div>

              <svg
                width="48"
                height="48"
                id="swiper-right"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="1.5"
                  stroke="#EBEBE9"
                />
                <g clip-path="url(#clip0_144_3691)">
                  <path
                    d="M17 24L30 24"
                    stroke="#151515"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M26 19.3333L30.6667 23.9999L26 28.6666"
                    stroke="#151515"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_144_3691">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(16 16)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div class="slider-image swiper-slide">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                id="swiper-left"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="47.5"
                  y="47.5"
                  width="47"
                  height="47"
                  rx="1.5"
                  transform="rotate(-180 47.5 47.5)"
                  stroke="#EBEBE9"
                />
                <path
                  d="M31 24H18"
                  stroke="#151515"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.0002 28.6667L17.3335 24.0001L22.0002 19.3334"
                  stroke="#151515"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div class="slide-image">
                <img src="/assets/banner-menu.png" alt="banners" />
              </div>
              <div class="slide-caption">
                <h2 class="h1">About us</h2>
                <small>-- see more --</small>
              </div>

              <svg
                width="48"
                height="48"
                id="swiper-right"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="1.5"
                  stroke="#EBEBE9"
                />
                <g clip-path="url(#clip0_144_3691)">
                  <path
                    d="M17 24L30 24"
                    stroke="#151515"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M26 19.3333L30.6667 23.9999L26 28.6666"
                    stroke="#151515"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_144_3691">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(16 16)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div class="slider-image swiper-slide">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                id="swiper-left"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="47.5"
                  y="47.5"
                  width="47"
                  height="47"
                  rx="1.5"
                  transform="rotate(-180 47.5 47.5)"
                  stroke="#EBEBE9"
                />
                <path
                  d="M31 24H18"
                  stroke="#151515"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.0002 28.6667L17.3335 24.0001L22.0002 19.3334"
                  stroke="#151515"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div class="slide-image">
                <img src="/assets/banner-menu.png" alt="banners" />
              </div>
              <div class="slide-caption">
                <h2 class="h1">About us</h2>
                <small>-- see more --</small>
              </div>

              <svg
                width="48"
                height="48"
                id="swiper-right"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="47"
                  height="47"
                  rx="1.5"
                  stroke="#EBEBE9"
                />
                <g clip-path="url(#clip0_144_3691)">
                  <path
                    d="M17 24L30 24"
                    stroke="#151515"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M26 19.3333L30.6667 23.9999L26 28.6666"
                    stroke="#151515"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_144_3691">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(16 16)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
