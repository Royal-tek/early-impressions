<template>
    
          <!-- ======= Header ======= -->
  <header id="header" class="sticky-top">
    <div class="container d-flex align-items-center justify-content-between">
        <div class="d-flex">
            <div class="d-flex align-items-center">
        <a href="index.html" class="logo me-3"><img src="../assets/newlogo.jpg" alt="" class="img-fluid"></a>
    </div>
        <div class="d-flex align-items-center">
      <h1 class="logo" style="font-family: cursive;"><a href="index.html">TUTOR DEPLOYMENT </a></h1>
        </div>
      <!-- Uncomment below if you prefer to use an image logo -->
    </div>
      <nav id="navbar" class="navbar">
        <ul>
          <li><router-link :to="{ name: 'Home'}" class="nav-link" :class="{'active':this.$route.name == 'Home'}" >Home</router-link></li>
          <li><router-link :to="{ name: 'About'}" class="nav-link" :class="{'active':this.$route.name == 'About'}" >About</router-link></li>
          <li><router-link :to="{ name: 'Contact'}" class="nav-link" :class="{'active':this.$route.name == 'Contact'}" >Contact</router-link></li>
          <!-- <li><router-link :to="{ name: 'About'}" class="nav-link" :class="{'active':this.$route.name == 'About'}" >Admin</router-link></li> -->
          
          <li class="dropdown"><router-link to="" href="#"><span>Admin </span> <i class="bi bi-chevron-down"></i></router-link>
            <ul>
              <li><router-link :to="{ name : 'AddStudent'}" >Add Student</router-link></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </li>
          
          <li class="dropdown"><a href="#"><span>Coming Soon </span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Virtual Learning</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </li>
          <li v-if="!getToken"><router-link :to="{ name : 'Register'}" class="getstarted ">Sign Up</router-link></li>
          <li v-if="getToken"><a style="cursor:pointer" @click.prevent="logout" class="getstarted ">Logout</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->

    
</template>

<script>
export default {
    name : 'Navbar',
    methods : {
      logout(){
        this.$store.commit('logout')
      }
    },
    computed : {
      getToken(){
        return this.$store.state.token
      },
    }
}
</script>

<style lang="scss" scoped>
  
</style>