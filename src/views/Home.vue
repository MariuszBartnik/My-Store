<template>
  <div class="home">
    <Showcase :imageSrc="imageSrc">
      <h2>MyStore</h2>
    </Showcase>
    <Newsletter />
    <GoogleMap />
  </div>
</template>

<script>
import Showcase from '@/components/Showcase.vue'
import Newsletter from '@/components/Newsletter.vue'
import GoogleMap from '@/components/GoogleMap.vue'

export default {
  name: 'Home',
  components: {
    Showcase,
    Newsletter,
    GoogleMap
  },
  data(){
    return {
      imageSrc: require('@/assets/img/main-page.jpg')
    }
  },
}
</script>
