import React from "react";
import heroImg from "./../asserts/images/hero.png";
import "./../asserts/styles/home/home.css";
import user1 from "./../asserts/images/dog-lover-1.png";
import user2 from "./../asserts/images/dog-lover-2.png";
import user3 from "./../asserts/images/dog-lover-3.png";
import CarouselCard from "../components/carouselCard";
import HangingCard from "./../components/hangingCard";
import ProductCard from "../components/productCard";
import { useHistory } from "react-router";

function Home() {
  const history = useHistory();
  const sliders = [
    {
      image: user1,
      username: "Jeniffer Doe",
      text: "Lorem, ipsum dolor sit amet consectetur  excepturi reiciendis illo deleniti ",
    },
    {
      image: user2,
      username: "John Doe",
      text: "Lorem, ipsum dolor sit amet consectetur  excepturi reiciendis illo deleniti ",
    },
    {
      image: user3,
      username: "Gabriella Cena",
      text: "Lorem, ipsum dolor sit amet consectetur  excepturi reiciendis illo deleniti ",
    },
  ];
  const _products = () => {
    history.push("/products");
  };
  return (
    <>
      <div className="hero">
        <div className="hero-left-section">
          <h1 className="hero-title">idae</h1>
          <h2 className="hero-subtitle">Hello puppy and kitty lovers!</h2>
          <p className="hero-sale-quip">Adopt/Put-up puppy and kitten here</p>
          <p>
            <span className="primary-span">Fast delivery.</span>
            <span className="primary-span">Fraud proof.</span>
            <span className="primary-span">Exciting offers.</span>
          </p>
          <div className="group-horizontal">
            <button className="btn-primary-square">Browse Cats</button>
            <button className="btn-primary-square">Browse Dogs</button>
          </div>
        </div>
      </div>
      <img src={heroImg} alt="pictures of dogs" className="hero-img" />
      <div className="home-gap">{HangingCard}</div>
      <section className="feature-section">
        <h2 className="featured-title">Featured Pets</h2>
        <div className="featured-product">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <button className="btn-primary-rounded" onClick={_products}>
          see more
        </button>
      </section>
      <div className="newsletter">
        <div className="news-title">
          <h3>
            Subscribe to our <span>newsletter</span>
          </h3>
          <p>
            To get information about new species in the market and other dog
            care products
          </p>
        </div>

        <form onSubmit={() => {}} className="newsletter-form">
          <input
            className="newsletter-input"
            type="email"
            placeholder="example@email.com"
            required
          />
          <input className="btn-primary-square" type="submit" />
        </form>
      </div>

      <div className="testimonies">
        <h2 className="featured-title">What Others Say</h2>
        <div className="slider">
          {sliders.map((item, index) => (
            <CarouselCard
              key={index}
              text={item.text}
              username={item.username}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
