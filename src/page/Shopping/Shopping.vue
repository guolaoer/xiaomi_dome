<template>
	<div class="box">
        <div>
            <hea text="购物车"></hea>
        </div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        	 <div class="arr_5">
               <div class='yii'>登录后享受更多优惠</div>
               <div class='err'>
               	去登录
               	<van-icon name="arrow" size="0.25rem"/>
               </div>
        	 </div>
        	 <div class="arr_6">
        	 	<div class="arr_7">
                  购物车还是空的 <button>去逛逛</button>
        	 	</div>
        	 </div>
        	 <div class="arr_8">
               <van-divider :style="{ color: '#959595', borderColor: '#909090', padding: '16px 16px'}">
  				实时推荐你的心心念念
               </van-divider>
        	 </div>
        	  <ul>
          <li v-for='(item,index) in arr' :key="index">
            <img :src="item.img" alt="">
            <p class="yi">{{ item.name }}</p>
            <p class="er">{{ item.content }}</p>
            <p class="san">￥{{ item.price }}</p>
          </li>
        </ul>
        </van-pull-refresh>
	</div>
</template>

<script scoped>
import Hea from '../../components/head.vue'
export default{
	data() {
    return {
      count: 0,
      isLoading: false,
      arr:[],
    }
  },
    components:{
        Hea
    },
     methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  },
   mounted(){
    	this.$axios.get('https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1')
    	.then((gtr)=>{
    		console.log(gtr.data)
    		this.arr = gtr.data
    	})
    },
}
</script>
<style scoped>
.box{
	width:100%;
	height:10rem;
}
.van-pull-refresh__track{
	height:46.5rem;margin-top: 0.8rem;
}
.arr_5{
	margin-top: 0.8rem;
	width:100%;height:1.1rem;background:#fff;border-top: 1px solid #75757530;
}
.yii{
	float:left;line-height: 1.1rem;font-size: 0.28rem;margin-left: 0.25rem;
}
.err{
	float:right;margin-right: 0.25rem;line-height: 1.1rem;color: #757575;
}
.err i{
    position: relative;
    top:0.02rem;right:0.01rem;
}
.arr_6{
	width:100%;/*height:1rem;*/color: #757575;
}
.arr_7{
	width:3rem;height:0.4rem;
	margin:auto;font-size: 0.23rem;padding-top: 0.38rem;
}
button{
	width:1.1rem;height:0.4rem;border:2px solid #75757585 ;
	margin-left: 0.18rem;background:#00000005;color: #000;
}
.arr_8{
	width:100%;height:1rem;background: #fff;
}
ul{
	width:100%;margin-top: 0.1rem;
	height:13.2rem;margin-bottom: 1rem;
}
li{
	width:50%;height:4.5rem;float:left;
}
li img{
	width:3.1rem;height:3.1rem;
}
p{
	padding-left: 0.1rem
}
</style>