<template>
    <div class="cart">
        <MyCart />
    </div>
</template>

<script>
import MyCart from '@/components/MyCart.vue'

export default {
    name: 'Cart',
    components: {
        MyCart
    }
}
</script>