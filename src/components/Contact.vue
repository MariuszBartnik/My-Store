<template>
  <div class="contact">
    <div class="contact-info">
      <div class="contact-info-item">
        <h3 class="contact-info-item-header">Address:</h3>
        <p class="contact-info-item-content">
          {{company.address.street}}
          <br>
          {{company.address.city + " " + company.address.zipCode}}
        </p>
      </div>
      <div class="contact-info-item">
        <h3 class="contact-info-item-header">Phone number:</h3>
        <p class="contact-info-item-content">+{{company.phone}}</p>
      </div>
      <div class="contact-info-item">
        <h3 class="contact-info-item-header">E-mail address:</h3>
        <p class="contact-info-item-content">{{company.email}}</p>
      </div>
      <div class="contact-info-item social-media">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter"></i>
      </div>
    </div>

    <div class="contact-form">
      <form @submit.prevent="contactSubmit">
        <input
          type="text"
          name="name"
          v-model="contactFormName"
          id="contact-form-name"
          placeholder="Name"
          required
        >
        <input
          type="email"
          name="email"
          v-model="contactFormEmail"
          id="contact-form-email"
          placeholder="E-mail"
          required
        >
        <textarea
          name="message"
          v-model="contactFormMessage"
          id="contact-form-message"
          cols="30"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <input type="submit" value="Send message">
      </form>
    </div>

    <transition>
        <div class="alert alert-success" v-if="msgSubmit.sent">
        <span @click="msgSubmit.sent = false; contactFormEmail=''; contactFormMessage=''; contactFormName=''">&times;</span>

        <h2>Message sent</h2>
        <p>Thank You for Your email {{ contactFormName }}</p>
        <p>We will contact You at {{ contactFormEmail }}</p>
    </div>
    </transition>
    <transition>
    <div class="alert alert-error" v-if="msgSubmit.error">
        <span @click="msgSubmit.error = false">&times;</span>

        <h2>Incorrect e-mail address</h2>
        <p>E-mail address - <em>{{ contactFormEmail }}</em> is incorrect.</p> 
        <p>Please enter valid address and try again.</p>
    </div>
    </transition>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: "Contact",
  data() {
    return {
      contactFormName: "",
      contactFormEmail: "",
      contactFormMessage: "",
      emailRegEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      msgSubmit: {
          sent: false,
          error: false
      }
    };
  },
  props: ["company"],
  methods: {
    contactSubmit() {
      if (!this.emailRegEx.test(this.contactFormEmail)) {
        this.msgSubmit.error = true
        setTimeout(()=>{
            this.msgSubmit.error = false
        },3000)
      } else {
        this.msgSubmit.sent = true;
        setTimeout(()=>{
            this.msgSubmit.sent = false

            this.contactFormName = "";
            this.contactFormEmail = "";
            this.contactFormMessage = "";
        },3000)
        
        
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.contact {
  padding: 1rem;
  background: #474b4f;
}

.contact-info {
  text-align: center;
  margin-bottom: 4rem;
}

input,
textarea {
  display: block;
  width: 90%;
  margin: 1rem auto;
  font-size: 1rem;
  padding: 0.5rem;
  border: none;
}

input[type="submit"] {
  width: 40%;
  background: #61892f;
  color: #f4f4f4;

  &:hover {
    background: #86c232;
    cursor: pointer;
  }
}

.contact-info-item {
  margin: 1.5rem 0;
  font-size: 1.2rem;
}

.contact-info-item-header {
  font-size: 1.2rem;
  color: #86c232;
}

.contact-info-item-content {
  font-size: 0.9rem;
  color: #f4f4f4;
}

.social-media {
  position: relative;
  margin-top: 2.5rem;

  &::before {
    content: "";
    position: absolute;
    top: -1rem;
    left: 50%;
    width: 70%;
    transform: translateX(-50%);
    border-top: 2px solid #86c232;
  }

  i {
    background: #222629;
    color: #61892f;
    margin: 0 1rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    padding: 0.5rem;

    &:hover {
      cursor: pointer;
      background: #86c232;
      color: #222629;
    }
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
  .contact {
    display: flex;
    justify-content: space-around;
    padding: 3rem 1rem;
  }

  .contact-form {
    width: 65%;
    order: 1;
  }

  .contact-info {
    width: 30%;
    order: 2;
  }
}

.alert{
    left: 15%;
    width: 70%;
}

@media(min-width:992px){
    .alert{
        width: 50%;
        left: 25%;
    }
}

</style>

