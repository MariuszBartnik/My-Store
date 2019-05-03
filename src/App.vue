<template>
  <div id="app">
    <NavBar />
    <router-view
      :company="company"
    />
    <Footer 
      :company="company"  
    />
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Raleway|');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }
</style>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    NavBar,
    Footer
  },
  data(){
    return {
      company: {
        name: 'MyStore',
        address: {
          street: '86 Wressle Road',
          city: 'Plymouth',
          zipCode: 'PL4 6FS'
        },
        phone: '070 4270 4858',
        email: 'contact@my-store.com'
      },
    }
  },
  computed:{
    productsComputed(){
      return this.$store.state.products
    }
  },
  created(){
    this.$store.dispatch('getProducts')
  }
}

</script>
