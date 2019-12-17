<template>
  <div id="app">
    <tabber v-show="fn"></tabber>
    <router-view/>
  </div>
</template>

<script>
import './assets/js/rem.js';
import Tabber from './components/tabber'
export default {
  data(){
    return {
      prov:allcity.prov
    }
  },
  components:{
    Tabber
  },
  computed:{
      fn(){
        var r = this.$route.path
         if( r == '/addressList' || r == '/addressEdit'){
           return false
         }else{
           return true
         }
      }
    }
}
</script>

<style>
@import './assets/css/reset.css';


</style>
