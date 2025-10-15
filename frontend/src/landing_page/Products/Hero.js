import React from "react";

function Hero() {
  return (
    <div>
    <div class="text-center m-5 border-bottom" style={{paddingBottom:"6%", paddingTop:"3%"}}>
      <h1 style={{ fontSize: "1.8rem" }} class="mb-3">
        Zerodha Products
      </h1>
      <p style={{ fontSize: "1.35rem" }} class="text-muted">
        Sleek, modern, and intuitive trading platforms
      </p>
      <p class="text-muted" style={{fontSize:"1.1rem"}}>
        Check out our{" "}
        <a href="#" class="text-decoration-none">
          investment offerings
          <i class="fa fa-arrow-right p-1" aria-hidden="true"></i>
        </a>
      </p>
    </div></div>
  );
}

export default Hero;
