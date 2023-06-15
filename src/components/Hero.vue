<script setup></script>

<template>
  <div class="hero-container">
    <div class="pic-gradient">
      <img
        src="https://www.thepcdoctor.com.au/wp-content/uploads/2020/12/Sci-Fi-Movies.jpg"
      />
    </div>
    <div class="hero-text">
      <h2>Get with the trending movies and add them to your cart</h2>
      <p>
        This is a movie website that displays trending movies along with content
        related to the film and a cart to purchase the movie. Enjoy!!
      </p>
    </div>
  </div>
</template>

<style scoped>
.pic-gradient {
  display: inline-block;
  width: 90vw;
  background-image: linear-gradient(
    to right,
    rgb(0, 0, 0),
    rgb(16, 16, 16),
    rgb(16, 16, 16),
    rgb(27, 27, 27),
    rgb(0, 0, 0, 0),
    rgb(0, 0, 0, 0),
    rgb(0, 0, 0, 0),
    rgb(0, 0, 0, 0),
    rgb(0, 0, 0, 0)
  );
}

img {
  margin-top: 0;
  width: 100vw;
  position: relative;
  display: block;
  z-index: -1;
}

h2 {
  font-size: 40px;
  padding: 15px;
}

.hero-text {
  position: absolute;
  top: 280px;
  left: 125px;
  padding: 70px 0;
  text-align: center;
  color: white;
  inline-size: 300px;
  overflow-wrap: break-word;
}
</style>
