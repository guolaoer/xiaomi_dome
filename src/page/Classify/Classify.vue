<template>
  <div>
    <hea text="分类"></hea>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <van-row>
      <van-col span="6">
<van-sidebar v-model="activeKey">
  <van-sidebar-item title="手机" />
  <van-sidebar-item title="电视" />
  <van-sidebar-item title="电脑" />
  <van-sidebar-item title="家电" />
  <van-sidebar-item title="路由" />
  <van-sidebar-item title="出行" />
  <van-sidebar-item title="出行" />
  <van-sidebar-item title="智能" />
  <van-sidebar-item title="灯具" />
  <van-sidebar-item title="家电" />
  <van-sidebar-item title="电脑" />
</van-sidebar>
          </van-col>
      <van-col span="18">
        <div class='zu' v-for='(item,index) in 11' :key="index">
          <van-swipe :autoplay="1000" indicator-color="white">
  <van-swipe-item v-for='(item,index) in images' :key='index'><img :src="item.img" alt=""></van-swipe-item>
</van-swipe>
<van-divider :style="{ color: '#000000', borderColor: '#e0e0e0', padding: '0 90px' }">
  手机
</van-divider>
<div class='shou'>
  <ul >
<li v-for="(item,index) in arr" :key="index">
  <img :src="item.img" alt="">
  <p>{{item.name}}</p>
</li>
  </ul>
</div>
<div class='aut'>
  <van-button type="warning">查看更多</van-button>
</div>
        </div>
         

          </van-col>
    </van-row>
    </van-pull-refresh>
  </div>
</template>


<script>
import Hea from "../../components/head.vue";
export default {
  components: {
    Hea
  },
   data() {
    return {
      isLoading: false,
      activeKey: 0,
      images:[],
      arr:[]
    }
  },
  mounted(){
    this.$axios.get('https://shiyaming1994.github.io/mi/static/rotationChart.json').then(res=>{
      console.log(res)
      this.images=res.data
      console.log(this.images)
    })
    this.$axios.get('https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1').then(res=>{
      this.arr=res.data
      console.log(res)
    })
  },
   methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    }
   }
   }
</script>

<style lang="less" scoped>
    .van-row{
        width: 100%;
        background: #fff;
    }
    .van-sidebar{
      width: 100%;
    }
    .van-sidebar-item{
      width: 100%;
      height: .88rem;
    }
    .van-swipe{
      width: 100%;
      height: 1.76rem;
    }
    .van-swipe img{
      width: 100%;
      height: 1.76rem;
    }
    .van-swipe__indicator{
     background-color: green!important;
    }
    .shou{
      width: 100%;

    }
    .shou>ul{
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
    .shou>ul>li{
      width: 1.5rem;
      height: 1.9rem;
      text-align: center;
    }
    .shou>ul>li>img{
      width: 1.2rem;
      height: 1.3rem;
    }
    .van-button--warning{
      width: 100%;
      background-color: #f9f5e6;
      color: #aea38d;
      border:none;
    }
    .aut{
      width: 80%;
      margin:10px auto;
    }
    .zu{
      width: 100%;
      height: 100;
    }
    .van-col--18{
      height: 90vh;
      overflow-y: scroll;
      
    }
</style>