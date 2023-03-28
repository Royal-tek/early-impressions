<template>
    <div class="register">
      <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 img-part">
          
          
        </div>
      <div class="col-md-4 text-part" style="background-color: #f1f1f1;">
          <div class="container">
  
              <div class="card p-4">
          <h4 class="text-uppercase text-center">Register Student</h4>
              
                  <form class="form">
                      <div class="input-group my-3">
                          <input type="text" class="form-control py-3 shadow-none" autofocus placeholder="Firstname" v-model="firstname">
                      </div>
                      <div class="input-group my-3">
                          <input type="text" class="form-control py-3 shadow-none" placeholder="Lastname" v-model="lastname">
                      </div>
                      <div class="input-group my-3">
                          <input type="number" class="form-control py-3 shadow-none" placeholder="Age" v-model="age">
                      </div>
                      <div class="input-group my-3">
                          <select class="form-control py-3 shadow-none" v-model="stage">
                            <option class="form-control py-3 shadow-none" value="">Select Stage </option>
                            <option class="form-control py-3 shadow-none" value="nursery">Nursery</option>
                            <option class="form-control py-3 shadow-none" value="primary">Primary</option>
                            <option class="form-control py-3 shadow-none" value="secondary">Secondary</option>
                          </select> 
                      </div>
                     
                      <div class="input-group mb-3 ">
                          <button @click.prevent = "registerStudent" class="btn btn-primary w-100 py-3">Register</button>  

                      </div>
                      
                  </form>
              </div>
          </div>
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
              stage : '',
              age : '',
          }
      },
      methods : {
          registerStudent(){
              const formData = {
                  firstname : this.firstname,
                  lastname : this.lastname,
                  age : this.age,
                  stage : this.stage,
              }
              axios.post('localhost:7000/api/auth/register', formData)
              .then(response=>{
                  this.$router.push({name : 'Login'})
              })
              .catch(error=>{
                  console.log(error)
              })
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
          background-image: url('../../../public/assets/img/efe1.jpg');
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
          border-color: black !important;
      }
  </style>