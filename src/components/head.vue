<template>
  <div class="hea">
    <van-nav-bar :title="text" left-text="返回" left-arrow>
      <van-icon name="search" slot="right" />
    </van-nav-bar>
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
      this.fn()
    },
    methods:{
      //接受数值
      fn(){

      }
    }
}
</script>

<style scoped>
.hea{
    width: 100%;
    height: 2.85rem;
    position: fixed;
    top: 0;
    left: 0;
}
.van-nav-bar{
    height: 2.85rem;
}
</style>
