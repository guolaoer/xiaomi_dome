<template>
  <!-- 刷新菜单 -->
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div id="app">
      <div class="head">
        <van-image
          round
          width=".8rem"
          height=".8rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <span>手机号</span>
      </div>
      <van-cell-group>
        <van-cell title="我的订单" is-link value="全部订单" />
      </van-cell-group>
      <van-grid :column-num="3">
        <van-grid-item icon="shopping-cart-o" text="代付款" />
        <van-grid-item icon="balance-pay" text="优惠劵" />
        <van-grid-item icon="star" text="收藏" />
      </van-grid>
      <div class="con">
        <van-cell-group>
            <van-cell title="会员中心" icon="like-o" is-link />
            <router-link to="/addressList">
                    <van-cell title="收货地址" icon="location-o" is-link />
            </router-link>
        </van-cell-group>
        <van-cell-group>
            <van-cell title="我的优惠" icon="balance-pay" is-link />
            <van-cell title="我的意见" icon="other-pay" is-link />
        </van-cell-group>
        <van-cell-group>
            <van-cell title="浏览记录" icon="clock-o" is-link />
        </van-cell-group>
        <van-cell-group>
            <van-cell title="我的名片" icon="qr-invalid" is-link />
        </van-cell-group>
      </div>
    </div>
  </van-pull-refresh>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      isLoading: false,
      arr: [{}]
    };
  },
  mounted() {
    this.fn();
  },
  methods: {
    //下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    //
    //获取数据
    fn() {
      this.$axios
        .get("https://shiyaming1994.github.io/mi/static/rotationChart.json")
        .then(res => {
          console.log(res);
        });
    }
  },
  components: {
      
  }
};
</script>

<style scoped>
#app {
  width: 100%;
  position: relative;
  background: #ffffff;
  height: 100vh;
}
.head {
  width: 100%;
  height: 1.35rem;
  background: #f37d0f;
  padding: 0.15rem 0.3rem;
  box-sizing: border-box;
}
.van-image--round {
  border: 0.1rem solid #f8b16f;
  float: left;
}
.head span {
  line-height: 1rem;
  color: #ffffff;
  margin-left: 0.5rem;
  color: 0.2rem;
  font-weight: bold;
}
.con .van-cell i{
    color: #FF7742;
    font-weight: bold;
}
.van-cell{
    padding: .3rem .5rem;
    box-sizing: border-box;
    font-size: .25rem;
    font-weight: bold;
}
</style>
