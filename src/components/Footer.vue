<template>
  <div class="footer">
    <div class="footer-item">
      <h4 class="footer-item-header">About us</h4>
        <p class="footer-item-content">
          Consequuntur ratione minima aspernatur quibusdam ab eaque vel itaque iste provident. Numquam in assumenda dolorum nostrum explicabo blanditiis fugit sapiente, natus reprehenderit laboriosam eligendi hic voluptas!
        </p>
    </div>
    <div class="footer-item">
      <h4 class="footer-item-header">Contact</h4>
      <div class="footer-contact-item">
        <p>Address:</p>
        <p>{{company.address.street + ", " + company.address.zipCode + " " + company.address.city}}</p>
      </div>
      <div class="footer-contact-item">
        <p>Phone:</p>
        <p><a :href="phoneCall">+{{company.phone}}</a></p>
      </div>
      <div class="footer-contact-item">
        <p>Email:</p>
        <p><a :href="sendEmail">{{company.email}}</a></p>
      </div>
    </div>
    <div class="footer-item">
      <h4 class="footer-item-header">Opening hours</h4>
      <div class="footer-opening-hours-item">
          <p class="opening-hours-header">
              Monday-Friday
          </p>
          <p class="opening-hours-content">
              9:00 AM - 8:00 PM
          </p>
      </div>
      <div class="footer-opening-hours-item">
          <p class="opening-hours-header">
              Saturday
          </p>
          <p class="opening-hours-content">
              10:00 AM - 6:00 PM
          </p>
      </div>
      <div class="footer-opening-hours-item">
        <p class="opening-hours-header">
          Sunday
        </p>
        <p class="opening-hours-content">
            Closed
        </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Footer",
  props: [
    "company"
  ],
  computed: {
      sendEmail(){
          return `mailto: ${this.company.email}`
      },
      phoneCall(){
          return `tel: +${this.company.phone}`
      }
  }
};
</script>


<style lang="scss" scoped>
    .footer{
        padding: 2rem;
        background: #222629;
        color: #f4f4f4;
        
    }
    .footer-item{
      margin-bottom: 2rem;
    }

    .footer-item-header{
        position: relative;
        text-align: center;
        color: #61892f;
        margin-bottom: 1rem;

        &::after{
            content: "";
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -0.5rem;
            width: 50%;
            border-top: 1px solid #86c232; 
        }
    }

    .footer-item-content{
        font-size: 0.9rem;
        text-align: justify;
    }

    .footer-contact-item{
        margin: 0.5rem 0;
        text-align: center;
        p{
            font-size: 0.9rem;
        }

        a{
            text-decoration: none;
            color: #f4f4f4;

            &:hover{
                color: #86c232;
            }
        }
    }

    .footer-opening-hours-item{
        text-align: center;
        margin: 0.5rem 0;
        font-size: 0.9rem;
    }

  @media(min-width: 768px){
    .footer{
        display: flex;
        justify-content: space-around;        
    }
    .footer-item{
        width: 30%;
    }
  }

</style>
