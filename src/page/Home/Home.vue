<template>
  <div class="box">
    <div id="arr_1">
      <div class="arr_2"></div>
      <div class="arr_3">
        <div class="arr_4">
          <van-icon name="search" size="20" color="#000" />
        </div>
        <input type="text" />
      </div>
    </div>
    <van-swipe
      :autoplay="3000"
      indicator-color="white"
      style="margin-top:1.1rem;height:3.1rem;width:100%"
    >
      <van-swipe-item v-for="(item, index) in arr" :key="index"
        ><img :src="item.img" alt="" style="height: 3.1rem;width:100%"
      /></van-swipe-item>
    </van-swipe>
    <nav>
      <van-grid :border="false" :column-num="5">
        <van-grid-item icon="balance-pay" text="icon1" />
        <van-grid-item icon="other-pay" text="icon2" />
        <van-grid-item icon="like-o" text="icon3" />
        <van-grid-item icon="qr-invalid" text="icon4" />
        <van-grid-item icon="orders-o" text="icon5" />
      </van-grid>
    </nav>
    <ul>
      <li v-for="(item, index) in amg" :key="index">
        <img :src="item.img" alt="" />
        <p class="yi">{{ item.name }}</p>
        <p class="er">{{ item.content }}</p>
        <p class="san">￥{{ item.price }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
      count: 0,
      isLoading: false,
      amg: []
    };
  },
  mounted() {
    this.$axios
      .get("https://shiyaming1994.github.io/mi/static/rotationChart.json")
      .then(res => {
        console.log(res.data);
        this.arr = res.data;
      });
    this.$axios
      .get("https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1")
      .then(gtr => {
        console.log(gtr.data);
        this.amg = gtr.data;
      });
  }
};
</script>
<style scoped>
.box {
  width: 100%;
}
#arr_1 {
  width: 100%;
  height: 1.1rem;
  position: fixed;
  background: #f2f2f2;
  top: 0;
  left: 0;
  z-index: 1;
}
.arr_2 {
  width: 0.747rem;
  height: 0.7rem;
  border-radius: 50%;
  background: #87ceeb;
  margin: 0.2rem 0 0 0.3rem;
  float: left;
}
.arr_3 {
  width: 3.3rem;
  height: 0.47rem;
  background: #fff;
  float: right;
  margin: 0.35rem 0.43rem 0 0;
  border-radius: 0.47rem 0.6rem 0.47rem 0.47rem;
}
input {
  width: 2.5rem;
  float: right;
  margin: 0.08rem 0.1rem 0 0;
  border: none;
}
.arr_4 {
  width: 0.3rem;
  height: 0.3rem;
  float: left;
  margin-top: 0.08rem;
  margin-left: 0.2rem;
}
ul {
  width: 100%;
  margin-top: 0.1rem;
  height: 13.2rem;
  margin-bottom: 1rem;
}
li {
  width: 50%;
  height: 4.5rem;
  float: left;
}
li img {
  width: 3.1rem;
  height: 3.1rem;
}
p {
  padding-left: 0.1rem;
}
.yi {
  font-size: 0.32rem;
}
.er {
  color: #757575;
}
.san {
  color: #ea625b;
  font-weight: bold;
  font-size: 0.22rem;
}
</style>
