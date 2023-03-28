<template>
  <div class="app-wrapper">
    <div class="app">
      <!-- <Navbar2 v-if="navigation" /> -->
      <Navbar v-if="navigation" />
      <router-view />
      <Footer v-if="navigation"/>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";


export default {
  name: "app",
  components: { Navbar, Footer, Navbar2 },
  data() {
    return {
      navigation: null,
      token : ''
    };
  },
  
  methods : {
    disableNavigation(){
      if(this.$route.name === 'Login' || this.$route.name === 'Register' ){
        this.navigation = false
        return
      } 
      this.navigation = true
    },
    
  },
  watch : {
    $route(){
      this.disableNavigation()
    }
  },
  created(){
    this.disableNavigation()
  
  },


}
</script>

<style lang="scss">

</style>