<template>
    <div class="register">
      <div class="container-fluid">
      <div class="row">
      <div class="col-md-4 text-part" style="background-color: #f1f1f1;">
          <div class="container">
              <p class="text-center">Go back  <router-link :to="{ name : 'Home'}" class="text-dark" style="font-weight: bold; ">Home   </router-link></p>
  
              <div class="card p-4">
          <h4 class="text-uppercase text-center">Register</h4>
              
                  <form class="form">
                      <div class="input-group my-3">
                          <input type="text" class="form-control py-3 shadow-none" required autofocus placeholder="Firstname" v-model="firstname" require>
                      </div>
                      <div class="input-group my-3">
                          <input type="text" class="form-control py-3 shadow-none" required placeholder="Lastname" v-model="lastname">
                      </div>
                      <div class="input-group my-3">
                          <input type="text" required class="form-control py-3 shadow-none"  placeholder="Email Address" v-model="email">
                      </div>
                      <div class="input-group my-3">
                          <input type="number" class="form-control py-3 shadow-none" required placeholder="Phone Number" v-model="phone">
                      </div>
                      <div class="input-group my-3">
                          <input type="password" class="form-control py-3 shadow-none" required placeholder="Password" v-model="password">
                      </div>
                      <div class="input-group my-3">
                          <input type="password" class="form-control py-3 shadow-none" required placeholder="Confirm Password" v-model="confirm">
                      </div>
                      <div class="input-group mb-3 ">
                          <button @click.prevent = "registerUser" class="btn btn-primary w-100 py-3">Register</button>                   
                      </div>
                      
                      <p v-if="errorStatus" class="text-center bg-danger p-2 text-white">{{ errorMsg }}</p>

                  </form>
                  <p class="text-center" style="font-size: 13px;">Already have an account ? <router-link :to="{ name : 'Login'}" class="text-dark" style="font-weight: bold; ">Login Here</router-link></p>
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
  import axios from 'axios'

  export default {
      name : 'AddStudent',
      data(){
          return{
              firstname : '',
              lastname : '',
              phone : '',
              email : '',
              password : '',
              confirm : '',
              errorMsg : '',
              errorStatus : false

          }
      },
      methods : {
       
          registerUser(){

            if(this.firstname == '' || this.lastname == '' || this.email == '' || this.phone == '' || this.confirm == '' || this.password == ''){
                this.errorStatus = true
                this.errorMsg = "No field can be empty"

                setTimeout(()=>{
                    this.errorStatus = false
                    this.errorMsg = ""

                }, 3000)
            }

            else{

              const formData = {
                  firstname : this.firstname,
                  lastname : this.lastname,
                  phone : this.phone,
                  email : this.email,
                  password : this.password,
                  confirm : this.confirm
              }
              axios.post('http://localhost:7000/api/auth/register', formData)
              .then(response=>{
                  this.$router.push({name : 'Login'})
              })
              .catch(error=>{
                this.errorStatus = true
                this.errorMsg = error.response.data.error
                
                setTimeout(() =>{
                    this.errorStatus = false
                    this.errorMsg = ''
                    
                    
                }, 3000)
                
              })
          }
        }
      }
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