<template>
  <div class="about">
    <Showcase :imageSrc="imageSrc"> 
      <h2>About us</h2>
    </Showcase>
    <Contact :company="company" />
    <GoogleMap/>
  </div>
</template>

<script>
import Showcase from "@/components/Showcase.vue";
import Contact from "@/components/Contact.vue"
import GoogleMap from "@/components/GoogleMap.vue";

export default {
  name: "About",
  components: {
    Showcase,
    Contact,
    GoogleMap
  },
  data() {
    return {
      imageSrc: require("@/assets/img/contact.jpg")
    };
  },
  props: [
    'company'
  ]
};
</script>
