<template>
  <div id="">
    <Navbar/>
  </div>
  <router-view/>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import Navbar from './components/Navbar.vue' 
import Footer from './components/Footer.vue' 

export default {
  name: 'Home',
  components : {
    Navbar, Footer
  }
  
}
</script>



<style lang="scss">

</style>
