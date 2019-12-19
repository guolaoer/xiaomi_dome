<template>
<div>
  <div class="hea">
    <van-nav-bar :title="text" left-text="返回" @click-left="onClickLeft" left-arrow>
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
      onClickLeft() {
        this.$router.go(-1)
      },
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
    font-size: .3rem;
    z-index: 100;
}
.van-nav-bar{
    height: .85rem;
    line-height: .85rem;
}
.van-nav-bar__right {
  font-size: .3rem;
}
.top{
  width: 100%;
  margin-top: .85rem;
}
.top{
  width: 100%;
  margin-top: .85rem;
}
</style>
