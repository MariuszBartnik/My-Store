<template>
  <div class="newsletter">
    <h2>Newsletter</h2>

    <form @submit.prevent="newsletterSubmit">
      <div class="form-group">
        <input type="email" id="newsletter" v-model="emailAddress" placeholder="E-mail address" required>
        <button class="btn-primary">Subscribe</button>
      </div>
    </form>

    <transition>
    <div class="alert alert-success" v-if="emailSubmit.added">
      <span @click="emailSubmit.added=false; emailAddress =''">&times;</span>
      <h2>Email added</h2>
      <p>Thank You for added Your email address.</p>
      <p>We will sent our newsletter at {{ emailAddress }}</p>
    </div>
    </transition>
    <transition>
    <div class="alert alert-error" v-if="emailSubmit.error">
        <span @click="emailSubmit.error = false">&times;</span>
        <h2>Incorrect e-mail address</h2>
        <p>E-mail address - <em>{{ emailAddress }}</em> is incorrect.</p> 
        <p>Please enter valid address and try again.</p>
    </div>
    </transition>

  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: "Newsletter",
  data() {
    return {
      emailAddress: "",
      emailSubmit:{
        added: false,
        error: false
      },
      emailRegEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    };
  },
  methods: {
    newsletterSubmit() {
      if(!this.emailRegEx.test(this.emailAddress)){
        this.emailSubmit.error = true
        setTimeout(()=>{
          this.emailSubmit.error = false
        }, 3000)
      }else{
        this.emailSubmit.added = true
        setTimeout(()=>{
          this.emailSubmit.added = false
          this.emailAddress = ""
        }, 3000)

      }
    }
  }
};
</script>

<style lang="scss" scoped>
.newsletter {
  height: 35vh;
  background: #abafb3;
  padding-top: 2rem;
}

h2 {
  font-size: 1.2rem;
  letter-spacing: 3px;
  text-align: center;
}

.form-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

input[type="email"] {
  display: block;
  text-align: center;
  width: 55%;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  padding: 0.5rem 1rem;
}

.btn-primary {
  cursor: pointer;
  width: 55%;
  background: #61892f;
  outline: none;
  border: none;
  text-align: center;
  color: #f4f4f4;
  font-size: 1rem;
  padding: 0.5rem 1rem;

  &:hover {
    background: #86c232;
  }
}

.alert{
    position: fixed;
    top: 20vh;
    left: 5%;
    background: #1a1a1a;
    width: 90%;
    padding: 2rem;
    text-align: center;
    color: #f4f4f4;

    h2, p{
        margin-bottom: 1rem;
    }

    span{
        position: absolute;
        top: 0rem;
        right: 1rem;
        font-size: 2rem;
        cursor: pointer;
    }
}

.alert-success{
        border-top: 5px solid #008000;
        border-bottom: 5px solid #008000;

        span:hover{
            color: #008000;
        }
}

.alert-error{
    border-top: 5px solid #ff0000;
    border-bottom: 5px solid #ff0000;

        span:hover{
            color: #ff0000;
        }
}

.v-enter-active, .v-leave-active{
    transition: opacity .5s
} 

.v-enter, .v-leave-to{
    opacity: 0;
}


@media (min-width: 768px) {

.newsletter{
    padding-top: 2.5rem;
}

h2 {
  font-size: 1.5rem;
}

input[type="email"] {
  text-align: left;
  width: 40%;
  margin: 1.5rem 0;
}

.btn-primary {
  width: 15%;
  margin: 1.5rem 0;
}

.alert{
    left: 15%;
    width: 70%;
}
}

@media(min-width:992px){
    .alert{
        width: 50%;
        left: 25%;
    }
}

</style>

