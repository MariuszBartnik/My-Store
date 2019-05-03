<template>
    <div class="products">
        <Showcase :imageSrc="imageSrc">
            <h2>Our products</h2>
        </Showcase>
        <FeaturedProducts />
        <ProductsList />
    </div>
</template>

<script>
import Showcase from '@/components/Showcase.vue';
import FeaturedProducts from '@/components/FeaturedProducts.vue';
import ProductsList from '@/components/ProductsList.vue';

export default {
    name: "Products",
    components:{
        Showcase,
        FeaturedProducts,
        ProductsList
    },
    data(){
        return{
            imageSrc: require('@/assets/img/products.jpg')
        }
    },
}
</script>
