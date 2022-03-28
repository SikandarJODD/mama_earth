import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import logo from "../images/logo.png";
import styles from "../../styles/Home.module.css";
import { style } from "@mui/system";
export default function Navbar() {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          
        />
      </Head>
      <Script
        src="https://kit.fontawesome.com/ed62d1b56e.js"
        
      ></Script>
      <div>
        <section id="item-1">
          <div className={styles.co}>
            <ul className={styles.mint}>
              <li>
                <a href="">
                  {" "}
                  Aisa's 1st Brand with MADE SAFE Certified Products
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  FreeShipping Above 399 | COD Available | Extra 5% OFF on
                  Prepaid Orders | Shop Now
                </a>
              </li>
              <li>
                <svg className={styles.svgm} viewBox="0 0 20 20">
                  <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
                </svg>
              </li>
            </ul>
          </div>
        </section>
        <section id="item-2">
          <div>
            <ul className={styles.com}>
              <li>
                <Image src={logo} height={40} width={150} alt="Logo" />
              </li>
              <li>
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className={styles.form1}
                    type="search"
                    placeholder="Search for Products..."
                    aria-label="Search"
                  />
                  <button className={styles.btn} type="submit">
                    <svg
                      className={styles.svgm}
                      style={{
                        marginBottom: "5px",
                        fontSize: "20px",
                        marginRight: "10px",
                      }}
                      viewBox="0 0 20 20"
                    >
                      <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
                    </svg>
                    Search
                  </button>
                </form>
              </li>
              <li>
                <div className={styles.cos}>
                  <div className={styles.cos}>
                    <i
                      className="bi bi-cart"
                      style={{ fontSize: "25px", color: "#0070f3" }}
                    ></i>
                    <p>Cart</p>
                  </div>
                  <div className={styles.cos}>
                    <svg
                      className={styles.svgm}
                      style={{
                        marginTop: "10px",
                        fontSize: "20px",
                        marginLeft: "20px",
                        stroke: "#0070f3",
                      }}
                      viewBox="0 0 20 20"
                    >
                      <path d="M10,10.9c2.373,0,4.303-1.932,4.303-4.306c0-2.372-1.93-4.302-4.303-4.302S5.696,4.223,5.696,6.594C5.696,8.969,7.627,10.9,10,10.9z M10,3.331c1.801,0,3.266,1.463,3.266,3.263c0,1.802-1.465,3.267-3.266,3.267c-1.8,0-3.265-1.465-3.265-3.267C6.735,4.794,8.2,3.331,10,3.331z"></path>
                      <path d="M10,12.503c-4.418,0-7.878,2.058-7.878,4.685c0,0.288,0.231,0.52,0.52,0.52c0.287,0,0.519-0.231,0.519-0.52c0-1.976,3.132-3.646,6.84-3.646c3.707,0,6.838,1.671,6.838,3.646c0,0.288,0.234,0.52,0.521,0.52s0.52-0.231,0.52-0.52C17.879,14.561,14.418,12.503,10,12.503z"></path>
                    </svg>
                    <p>Login</p>
                  </div>
                </div>
                <div></div>
              </li>
            </ul>
          </div>
        </section>
        <section id="item-3"></section>
      </div>
    </>
  );
}
