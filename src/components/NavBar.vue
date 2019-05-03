<template>
  <nav>
    <div class="logo">MyStore</div>
    <div class="links" ref="links">
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/cart">
        Cart
        <span v-if="cartTotal.totalAmount != 0">{{cartTotal.totalAmount}}</span>
      </router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div class="navbar-toggle" @click="navToggle">
      <div class="toggle-line line-one"></div>
      <div class="toggle-line line-two"></div>
      <div class="toggle-line line-three"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    cartTotal() {
      return this.$store.getters.cartTotal;
    }
  },
  methods: {
    navToggle(){
      this.$refs.links.classList.toggle('active-links');
    }
  }
};
</script>

<style scoped lang="scss">
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 8vh;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  font-size: 1.2rem;
  background: #222629;
  color: #f4f4f4;
}

.logo {
  z-index: 2;
  font-size: 1.5rem;
  letter-spacing: 3px;
}

.links {
  position: absolute;
  top: 8vh;
  left: 0;
  height: 50vh;
  width: 100%;
  background: #222629;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 0;
  transform: translateY(-110%);
  transition: transform 0.5s ease-in;

  a {
    position: relative;
    color: #f4f4f4;
    text-decoration: none;
    margin: 0 1rem;

    &:hover {
      color: #61892f;
    }
  }

  span {
    position: absolute;
    top: -0.5rem;
    right: -2rem;
    font-size: 0.9rem;
    width: 1.5rem;
    height: 1.5rem;
    background: #61892f;
    border-radius: 50%;
    text-align: center;
    line-height: 0.9rem;
    padding-top: 0.3rem;
  }
}

.active-links{
  transform: translateY(0);
}

.navbar-toggle {
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  cursor: pointer;
}

.toggle-line {
  width: 2rem;
  height: 5px;
  margin: 5px 0;
  background: #f4f4f4;
}

@media (min-width: 768px) {
  .navbar-toggle {
    display: none;
  }

  .links {
    top: 0;
    right: 0;
    margin-left: auto;
    height: 8vh;
    flex-direction: row;
    width: 50%;
    transform: translateY(0);
  }
}

@media(min-width: 992px){
  .links{
    width: 40%;
  }
}
</style>
