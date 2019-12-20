<template>
  <div class="box">
    <hea text="购物车"></hea>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="arr_5">
        <div class="yii">登录后享受更多优惠</div>
        <div class="err">
          去登录
          <van-icon name="arrow" size="0.25rem" />
        </div>
      </div>
      <div class="arr_6">
        <div class="amount">
          <ul>
            <li v-for="(item, index) in list" :key="index">
              <img :src="item.img" alt="" />
              <div class="list">
                <p>{{ item.name }}</p>
                <p>￥ {{ item.price }}</p>
                <div class="amountcon">
                  <van-stepper
                    v-model="item.count"
                    input-width=".6rem"
                    button-size=".5rem"
                    integer
                    @change="onChange(item.count)"
                  />
                  <van-icon name="delete" @click="delet(index)" />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div v-show="falg" class="arr_7">
          购物车还是空的 <button>去逛逛</button>
        </div>
      </div>
      <div class="arr_8">
        <van-divider
          :style="{
            color: '#959595',
            borderColor: '#909090',
            padding: '16px 16px'
          }"
        >
          实时推荐你的心心念念
        </van-divider>
      </div>
      <ul>
        <li v-for="(item, index) in arr" :key="index">
          <img :src="item.img" alt="" />
          <p class="yi">{{ item.name }}</p>
          <p class="er">{{ item.content }}</p>
          <p class="san">￥{{ item.price }}</p>
        </li>
      </ul>
    </van-pull-refresh>
    <div class="accounts">
      <div style="width:30%;float:left;">
        <p style="width:100%;float:left;font-size:.2rem">
          共{{ AlwaysA }}件 <span>金额：</span>
        </p>
        <p style="width:100%;float:left;font-size:.2rem;">
          <span style="color:#FF5722;font-size:.3rem">{{ totalPrice }}</span
          >元
        </p>
      </div>

      <button>去结算</button>
      <button>继续购物</button>
    </div>
  </div>
</template>

<script scoped>
import Hea from "../../components/head.vue";
export default {
  data() {
    return {
      count: 0,
      isLoading: true,
      arr: [],
      value: 0,
      //购物车数据数组
      list: [],
      obj: {},
      falg: false,
      AlwaysA: 0,
      totalPrice: 0
    };
  },
  components: {
    Hea
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    //请求数据
    dateList() {
      this.$axios
        .get("https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1")
        .then(gtr => {
          // console.log(gtr.data);
          this.arr = gtr.data;
        });
    },
    delet(i) {
      this.list.splice(i, 1);
      localStorage.setItem("card", JSON.stringify(this.list));
    },
    //购物车商品信息
    card() {
      this.list = JSON.parse(localStorage.getItem("card"));
    },
    AlwaysAs() {
      this.list.forEach( item => {
        this.AlwaysA += item.count;
        this.totalPrice += Number(item.price) * item.count;
      });
    },
    onChange(value){
      console.log(value)
       setTimeout(() => {
        this.value = value;
      }, 500);
    }
  },

  mounted() {
    this.dateList();
    this.card();
    this.AlwaysAs();
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 10rem;
}
.van-pull-refresh {
  margin-top: -0.8rem;
}
.arr_5 {
  margin-top: 0.8rem;
  width: 100%;
  height: 1.1rem;
  background: #fff;
  border-top: 1px solid #75757530;
}
.yii {
  float: left;
  line-height: 1.1rem;
  font-size: 0.28rem;
  margin-left: 0.25rem;
}
.err {
  float: right;
  margin-right: 0.25rem;
  line-height: 1.1rem;
  color: #757575;
}
.err i {
  position: relative;
  top: 0.02rem;
  right: 0.01rem;
}
.arr_6 {
  width: 100%; /*height:1rem;*/
  color: #757575;
}
.arr_7 {
  width: 3rem;
  height: 0.4rem;
  margin: auto;
  font-size: 0.23rem;
  padding-top: 0.38rem;
}
/* button {
  width: 1.1rem;
  height: 0.4rem;
  border: 2px solid #75757585;
  margin-left: 0.18rem;
  background: #00000005;
  color: #000;
} */
.arr_8 {
  width: 100%;
  height: 1rem;
  background: #fff;
}
.van-pull-refresh__track > ul {
  width: 100%;
  margin-top: 0.1rem;
  height: 13.2rem;
  margin-bottom: 1rem;
}
.van-pull-refresh__track > ul li {
  width: 50%;
  height: 4.5rem;
  float: left;
}
.van-pull-refresh__track > ul li img {
  width: 3.1rem;
  height: 3.1rem;
}
.van-pull-refresh__track > ul p {
  padding-left: 0.1rem;
}
.amount {
  width: 100%;
}
.amount {
  width: 100%;
}
.amount ul {
  width: 100%;
}
.amount li {
  width: 100%;
  height: 2rem;
  padding: 0.1rem 0 0.1rem 0.4rem;
  box-sizing: border-box;
  background: #fff;
}
.amount li img {
  width: 1.7rem;
  height: 100%;
  float: left;
  border-radius: 0.07rem;
  border: 0.03rem solid #eeeeee;
  box-sizing: border-box;
}
.list {
  float: left;
  width: 3.8rem;
  height: 100%;
  margin-left: 0.2rem;
}
.list p {
  font-size: 0.25rem;
  line-height: 0.4rem;
  color: #666666;
  font-weight: bold;
}
.list p:last-of-type {
  color: #b3b8b7;
  font-size: 0.2rem;
  font-weight: normal;
}
.amountcon {
  width: 100%;
  height: 0.7rem;
  margin-top: 0.2rem;
}
.van-stepper {
  float: left;
}
.amountcon i {
  float: right;
  font-size: 0.4rem;
}
.accounts {
  width: 100%;
  height: 0.9rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #ffffff;
}
.accounts > button:first-of-type {
  float: right;
  width: 2.1rem;
  height: 100%;
  background: #ff6700;
  border: none;
}
.accounts > button:last-of-type {
  float: right;
  width: 2.1rem;
  height: 100%;
  background: #f4f4f4;
  border: none;
}
</style>
