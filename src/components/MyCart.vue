<template>
  <div class="my-cart">
    <div class="login-section">
      <keep-alive>
        <component :is="currentLoginComponent" @changeMode="changeDynamicComponent"></component>
      </keep-alive>
    </div>
    <div class="cart-section">
      <div class="cart empty-cart" v-if="cart.length === 0">
        <h2>
          You don't have any items in Your cart. Go to
          <router-link to="/products">Products</router-link> and find something You like.
        </h2>
      </div>
      <div class="cart-table" v-else>        
        <table>
          <tbody>
            <tr v-for="product in cart" :key="product.id">
              <td class="product-name-td">
                <div>{{product.name}}</div>
                <div>
                  <img :src="product.img">
                </div>
              </td>
              <td>${{product.price * product.amount}}</td>
              <td>
                <button class="quantityBtn" @click="removeProduct(product)">-</button>
                <input type="number" :value="product.amount" min="1">
                <button class="quantityBtn" @click="addProduct(product)">+</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>${{cartTotal.totalPrice}}</td>
              <td>{{cartTotal.totalAmount}}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import Registration from "@/components/Registration.vue";

export default {
  name: "MyCart",

  components: {
    Login,
    Registration
  },
  data() {
    return {
      currentLoginComponent: "Login"
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartTotal() {
      return this.$store.getters.cartTotal;
    }
  },
  methods: {
    changeDynamicComponent(mode) {
      this.currentLoginComponent = mode;
    },
    addProduct(product) {
      this.$store.dispatch("addProduct", product);
    },
    removeProduct(product) {
      this.$store.dispatch("removeProduct", product);
    }
  }
};
</script>

<style lang="scss" scoped>
.my-cart {
  padding: 0 1.5rem;
  padding-top: 10vh;
  background: #474b4f;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.login-section{
  width: 100%;
}

.cart-section {
  position: relative;
  color: #f4f4f4;
  padding: 1rem;
  text-align: center;
  background: #222629;
  width: 100%;
  margin-top: 0;
  margin-bottom: 2rem;
  box-shadow: 5px 8px 5px rgba(0,0,0,0.3);
}

.empty-cart{
  a{
    text-decoration: none;
    color: #61892f;

    &:hover{
      color: #86c232;
    }
  }
}

table {
  width: 100%;
  margin-bottom: 1rem;
}

img {
  height: 3rem;
}

td {
  padding: 0.5rem;
  font-size: 0.8rem;
  text-align: center;
}

.product-name-td {
  display: flex;
  justify-content: space-between;
  align-items: center;

  div{
    width: 45%;
    overflow: hidden;
  }
}

tbody tr:nth-child(odd) {
  background: rgba(255,255,255,0.2);
  color: #f4f4f4;
}

tbody tr:nth-child(even) {
  background: #1a1a1a;
  color: #f4f4f4;
}

thead tr,
tfoot tr {
  background: #61892f;
}

.quantityBtn {
  display: inline-block;
  background: #61892f;
  color: #f4f4f4;
  cursor: pointer;
  border: none;
  outline: none;
  width: 1rem;
  height: 1rem;
  font-size: 1rem;
  text-align: center;
  line-height: 1rem;
  margin: 0 0.25rem;
  box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.2),
    inset -4px -4px 5px rgba(255, 255, 255, 0.2), 3px 3px 5px rgba(0, 0, 0, 0.5);
  border-radius: 50%;
}

input[type="number"] {
  width: 50%;
  text-align: center;
  height: 1.5rem;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}

@media(min-width:768px){

.login-section{
  width: 35%;
}

.cart-section {
  width: 60%;
}

.empty-cart{
  position: absolute;
  width:80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.quantityBtn {
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1rem;
  padding: 0.25rem;
  margin: 0 0.5rem;
}

input[type="number"] {
  width: 25%;
}

}

@media(min-width: 992px){
  img {
    height: 7rem;
  } 
}

</style>

