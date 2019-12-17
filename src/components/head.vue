<template>
<div>
  <div class="hea">
    <van-nav-bar :title="text" left-text="返回" left-arrow>
      <van-icon name="search" slot="right" />
    </van-nav-bar>
  </div>
  <div class='top'></div>
</div>
  
</template>

<script>
export default{
    data(){
      return {
      }
    },
    props:['text'],
    mounted(){

    },
    methods:{
    }
}
</script>

<style scoped>
.hea{
    width: 100%;
    height: .85rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index:999;
}
.van-nav-bar{
    height: .85rem;
}
.top{
  width: 100%;
  margin-top: .85rem;
}
</style>
