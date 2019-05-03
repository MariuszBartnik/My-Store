<template>
  <div class="login">
    <div class="welcome-section">
      <h3>Welcome again!</h3>
      <p>Please log in with Your email address</p>

      <div class="change-mode-section">
        <h4>Don't have account</h4>
        <p>Fill in registration form</p>
        <button @click="changeMode">Sign in</button>
      </div>
    </div>
    <div class="form-section">
      <input v-model="email" type="email" name="login-email" id="login-email" placeholder="E-mail">
      <input
        v-model="password"
        type="password"
        name="login-password"
        id="login-password"
        placeholder="Password"
      >
      <input type="submit" value="Log in">
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    changeMode() {
      this.$emit("changeMode", "Registration");
    }
  }
};
</script>

<style lang="scss" scoped>

    .welcome-section{
        text-align: center;
        margin-bottom: 2rem;
        background: #222629;
        padding: 1rem;
        color: #f4f4f4;
        box-shadow: 5px 8px 5px rgba(0,0,0,0.3);
       
        h3{
           font-size: 1.5rem;
           margin-bottom: 0.5rem;
        }
        
        p{
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
        }
    }

    .change-mode-section{
        width: 80%;
        margin: 1rem auto;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.2);
        
        p{
            font-size: 0.8rem;
            margin-bottom: 1.5rem;
        }

        h4{
            font-size: 1.3rem;
            margin-bottom: 0.5rem;   
        }

        button{
                width: 50%;
            cursor: pointer;
            background: #61892f;
            color: #f4f4f4;
            border: none;
            outline: none;
            padding: 0.5rem;
            box-shadow: inset 1px 2px 3px rgba(255, 255, 255, 0.2),
                        inset -2px -3px 5px rgba(0,0,0,0.2),
                        5px 8px 5px rgba(0,0,0,0.4);
        
        &:hover{
                background: #86c232
            }
        }
    }

    .form-section{
        background: #222629;
        padding: 1rem;
        box-shadow: 5px 8px 5px rgba(0,0,0,0.3);
        margin-bottom: 2rem;

        input{
            display: block;
            margin: 0 auto;
            width: 100%;
            margin-bottom: 1rem;
            font-size: 1rem;
            padding: 0.2rem 0.5rem;
        }

        input[type="submit"]{
            width: 50%;
            cursor: pointer;
            background: #61892f;
            color: #f4f4f4;
            border: none;
            outline: none;
            padding: 0.5rem;
            box-shadow: inset 1px 2px 3px rgba(255, 255, 255, 0.2),
                        inset -2px -3px 5px rgba(0,0,0,0.2),
                        5px 8px 5px rgba(0,0,0,0.4);
        
        &:hover{
                background: #86c232
            }
        
        }
    }

</style>


