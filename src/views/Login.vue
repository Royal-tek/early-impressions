<template>
    <div class="register">
      <div class="container-fluid">
      <div class="row">
      <div class="col-md-4 text-part" style="background-color: #f1f1f1;">
          <div class="container">
              <p class="text-center">Go back  <router-link :to="{ name : 'Home'}" class="text-dark" style="font-weight: bold; ">Home   </router-link></p>
  
              <div class="card p-4">
          <h4 class="text-uppercase text-center">Login</h4>
              
                  <form class="form">
                    
                      <div class="input-group my-3">
                          <input type="text" class="form-control py-3 shadow-none" placeholder="Email Address" v-model="email">
                      </div>
                    
                      <div class="input-group my-3">
                          <input type="password" class="form-control py-3 shadow-none" placeholder="Password" v-model="password">
                      </div>
                     
                      <div class="input-group mb-3 ">
                          <button :disabled="checkDisabled" class="btn btn-primary w-100 py-3" @click.prevent="login">Login <span v-if="checkLoading" ><img style="width:15px;" class="img-fluid" src="../../public/assets/img/loading.gif" alt=""></span></button>                   
                      </div>
                      
                      <p v-if="checkError" class="text-center bg-danger p-2 text-white">{{ $store.state.errorMsg }}</p>

                  </form>
                  <p class="text-center" style="font-size: 13px;">Don't have an account ? <router-link :to="{ name : 'Register'}" class="text-dark" style="font-weight: bold; ">Register Here</router-link></p>

                  
              </div>
          </div>
      </div>
      <div class="col-md-8 img-part">
          
          
      </div>
  </div>
  </div>
    </div>
  </template>
  
  <script>
  export default {
      name : 'Login',
      data(){
        return{
            email : '',
            password : '',
            token : null,
            
            
            
        }
      },
      computed : {
        checkError(){
            return this.$store.state.errorStatus
        },
        checkLoading(){
            return this.$store.state.loading
        },
        checkDisabled(){
            return this.$store.state.isButtonDisabled
        }
      },
      methods : {
        
         async login(){
            if(this.email == '' || this.password == ''){
                this.$store.state.errorStatus = true
                this.$store.state.errorMsg = 'No field can be left blank'

                setTimeout(()=>{
                    this.$store.state.errorStatus  = false
                    this.$store.state.errorMsg = ''
                },3000)
            }

            else{
            
            await this.$store.dispatch('userLogin', {
                email : this.email,
                password : this.password
            })

            

        }
        


        
    }
      },
     
  }
  </script>
  
  <style lang="scss" scoped>
      .register{
          font-family: "Quicksand", sans-serif;
  
          height: 100vh;
          width: 100%;
          background-repeat: no-repeat;
          background-size: cover;
          
      }
      .img-part{
          background-image: url('../../public/assets/img/5.jpg');
          height: 100vh;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
      }
  
      @media (max-width:700px){
          .img-part{
              display: none;
          }
      }
  
      .text-part{
          display: flex;
          height: 100vh;
          align-items: center;
      }
  
      input:focus{
          border-color: rgb(149, 149, 247) !important;
      }
  </style>