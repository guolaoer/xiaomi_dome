<template>
  <div id="app">
    <tabber v-if='this.$route.meta.falg'></tabber>
    <router-view/>
  </div>
</template>

<script>
import './assets/js/rem.js';
import Tabber from './components/tabber'
export default {
  components:{
    Tabber
  }
}
</script>

<style>
@import './assets/css/reset.css';


</style>
