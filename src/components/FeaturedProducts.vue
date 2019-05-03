s<template>
  <div class="featured-products">
    <flickity ref="flickity" :options="flickityOptions">
      <div
        class="carousel-cell"
        v-for="featuredProduct in featuredProducts"
        :key="featuredProduct.id"
      >
        <img :src="featuredProduct.img" alt>

        <div class="carousel-cell-content">
          <h4>{{featuredProduct.name | uppercase}}</h4>
          <p>

            <i class="fas fa-star"></i>
            {{featuredProduct.rating}}
          </p>
          <p>
            <i class="fas fa-dollar-sign"></i>
            {{featuredProduct.price}}
          </p>

          <a class="buy primary-btn" @click="buyItem(featuredProduct)">Buy</a>
        </div>
      </div>
    </flickity>
  </div>
</template>

<script>
import Flickity from "vue-flickity";

export default {
  name: "FeaturedProducts",
  components: {
    Flickity
  },
  data() {
    return {
      flickityOptions: {
        draggable: false,
        wrapAround: true,
        pageDots: false,
        groupCells: true
      },
      featuredItems: []
    };
  },
  computed: {
    featuredProducts() {
      return this.$store.getters.featuredProducts;
    }
  },
  methods: {
    buyItem(featuredProduct) {
      this.$store.dispatch("buyItem", featuredProduct);
    }
  }
};
</script>

<style lang="scss" scoped>
.featured-products {
  background: #474b4f;
}

.carousel-cell {
  position: relative;
  width: 50vw;
  height: 50vw;
  margin: 1rem 0.5rem;
  overflow: hidden;

  img {
    height: 50vw;
    width: 50vw;
  }

  &:hover > .carousel-cell-content {
    transform: translateY(0);
  }
}

.carousel-cell-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  transform: translateY(100%);
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.8);
  color: #f4f4f4;
  text-align: center;
  transition: transform 0.5s ease-out;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  h4 {
    width: 100%;
    font-size: 1rem;
  }
  p {
    width: 50%;
    font-size: 0.9rem;

    i {
      color: #daa520;
    }
  }
  a {
    display: block;
    cursor: pointer;
    background: #61892f;
    font-size: 0.9rem;
    width: 70%;
    height: 2.2rem;
    margin: 0 auto;
    padding: 0.5rem;
    border-radius: 0.5rem;

    &:hover {
      background: #86c232;
    }
  }
}

@media (min-width: 768px) {
  .carousel-cell {
    width: 40vw;
    height: 40vw;

    img {
      height: 40vw;
      width: 40vw;
    }
  }

  .carousel-cell-content {
    h4 {
      font-size: 1.3rem;
    }
    p {
      font-size: 1.1rem;
    }
    a {
      font-size: 1.1rem;
    }
  }
}

@media (min-width: 992px) {
  .carousel-cell {
    width: 25vw;
    height: 25vw;

    img {
      height: 25vw;
      width: 25vw;
    }
  }

  .carousel-cell-content {
    height: 40%;
    padding: 1rem;

    h4 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
    }

    a {
      font-size: 0.9rem;
      width: 50%;
    }
  }
}
</style>
