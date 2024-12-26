import React from "react";
import "../styles/home.css";
import { Container } from "reactstrap";

export default function Home() {
  return (
    <section className="home">
      <Container className="hero-container">
        <img
          src="https://cdn.prod.website-files.com/633312e75f7f593dc82257d0/635aa19ebe2e8cc7e2376480_Hero-p-2600.webp"
          alt="hero"
          className="hero-img"
        />
        <div className="hero-text">
            <h4>Shopify Partners since 2011.</h4>
          <h1>The Shopify agency for international brands.</h1>
        
        </div>
      </Container>
    </section>
  );
}
