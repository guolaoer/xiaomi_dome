<template>
  <div class="details" v-if="arr.length != 0">
    <div class="return" @click="fn()">
      <van-icon name="arrow-left" color="#fff" />
    </div>
    <van-swipe :autoplay="1000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in arr[n].imgList" :key="index">
        <img :src="item.img" alt />
      </van-swipe-item>
    </van-swipe>
    <div class="describe">
      <p class="name">{{ arr[n].name }}</p>
      <p class="des">{{ arr[n].info }}</p>
      <p class="price">￥{{ arr[n].price }}</p>
    </div>
    <div class="configuration">
      <div class="m">
        <p>已选</p>
        {{ arr[n].name }}
        {{ arr[n].edition[0].Memory }}
        <van-icon name="arrow" style="right:-20px" />
      </div>
      <div class="m">
        <p>送至</p>
        北京
        <van-icon name="arrow" style="right:-184px" />
      </div>
    </div>
    <div class="for">
      <img :src="arr[n].info_img[0].img" alt style="width:100%;" />
      <img :src="arr[n].info_img[1].img" alt style="width:100%" />
    </div>
      <van-goods-action>
          <van-goods-action-icon icon="chat-o" text="首页" @click="home" />
          <van-goods-action-icon
            icon="cart-o"
            text="购物车"
            @click="onClickIcon"
            :info='Always'
          />
          <van-goods-action-button
            type="warning"
            text="加入购物车"
            @click="falg=true"
          />
        </van-goods-action>
    <div class="detail" v-show="falg">
      <div class="particulars">
        <van-icon name="cross" color="#a0a0a0" @click="falg = false" />
        <div class="pc">
          <img :src="arr[n].edition[jk].color[w].img" alt="" />
          <p>￥{{ arr[n].edition[jk].edition_price }}</p>
          <p>
            {{ arr[n].name }}{{ arr[n].edition[jk].Memory
            }}{{ arr[n].edition[jk].color[w].color_list }}
          </p>
        </div>
        <div class="versions">
          <p>版本</p>
          <div
            :class="{ liu: true, liuborder: jk == index }"
            v-for="(item, index) in arr[n].edition"
            :key="index"
            @click="jk = index"
          >
            {{ item.Memory }}
            <p>{{ item.edition_price }}元</p>
          </div>
        </div>
        <div class="color">
          <p>颜色</p>
          <ul>
            <li
              v-for="(item, index) in arr[n].edition[jk].color"
              :key="index"
              :class="{ bt: true, bordercolor: w == index }"
              @click="w = index"
            >
              {{ item.color_list }}
            </li>
          </ul>
        </div>
        <div class="shuliang">
          购买数量
          <div class="operation">
            <button @click="c <= 1 ? 1 : c--">-</button>
            <input type="text" v-model="c" />
            <button @click="c++">+</button>
          </div>
        </div>
        <van-button round type="info" @click="fnshop">加入购物车</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/js/jq";
export default {
  data() {
    return {
      w: 0,
      n: Number(this.$route.query.i),
      arr: [],
      falg: false,
      c: 1,
      jk: 0,
      str: JSON.parse(localStorage.getItem("card")) || [],
      Always:0
    };
  },
  mounted() {
    this.Alway()
    this.$axios
      .get("https://shiyaming1994.github.io/mi/static/homeGoods.json?page=1")
      .then(res => {
        this.arr = res.data;
      });
  },
  methods: {
    Alway(){
          for(var i=0;i<this.str.length;i++){
                this.Always+=this.str[i].count
          }
    },
    fn() {
      this.$router.go(-1);
    },
    home() {
      this.$router.push("/home");
    },
    fnshop() {
      var obj = {};
      (obj.price = this.arr[this.n].edition[this.jk].edition_price),
        (obj.name = this.arr[this.n].name);
      obj.img = this.arr[this.n].edition[this.jk].color[this.w].img;
      obj.count = this.c;
      if (this.str.length == 0) {
        this.str.push(obj);
      } else {
        console.log(this.str)
        for (var i = 0; i < this.str.length; i++) { 
          if (this.str[i].name == obj.name && this.str[i].price == obj.price) {
            this.str[i].count = this.str[i].count + obj.count;
            localStorage.setItem("card", JSON.stringify(this.str));
      this.$router.push("/shopping");
            return;
          }
          }
            console.log(2)
            this.str.push(obj);
            localStorage.setItem("card", JSON.stringify(this.str));
            this.$router.push("/shopping");

        
      }
      localStorage.setItem("card", JSON.stringify(this.str));
      this.$router.push("/shopping");
    },
     onClickIcon() {
       this.$router.push("/shopping");
    },
  }
};
</script>

<style scoped>
.details {
  background: #fff;
}
.return {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  position: fixed;
  top: 0.3rem;
  left: 0.3rem;
  background: #00000047;
  text-align: center;
  line-height: 0.6rem;
  z-index: 9999;
}
.van-icon {
  font-size: 0.3rem;
}
.van-swipe {
  width: 100%;
  height: 7rem;
}
.van-swipe img {
  width: 100%;
  height: 7rem;
}
.name {
  width: 100%;
  height: 0.95rem;
  text-indent: 0.2rem;
  line-height: 0.95rem;
  font-size: 0.4rem;
}
.describe {
  width: 100%;
  background: #fff;
  padding: 0 0.3rem;
  box-sizing: border-box;
}
.des {
  color: #757575;
  line-height: 0.3rem;
}
.price {
  font-size: 0.33rem;
  color: #ff6700;
  line-height: 0.5rem;
}
.configuration {
  width: 80%;
  height: 1.67rem;
  margin: auto;
  background: #fafafa;
}
.m {
  width: 100%;
  height: 0.83rem;
  font-size: 0.25rem;
  line-height: 0.83rem;
  border-bottom: 1px solid #cccccc;
  text-indent: 0.1rem;
}
.m > p {
  float: left;
}
.van-icon {
  top: 0.05rem;
}
.for {
  width: 100%;
  height: 15.62rem;
}
.detail {
  width: 100%;
  height: 100vh;
  background: #313131a1;
  position: fixed;
  top: 0;
  left: 0;
}
.particulars {
  width: 100%;
  height: 8.5rem;
  background: #fff;
  border-radius: 10px 10px 0 0;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 0.2rem;
  box-sizing: border-box;
}
.particulars > .van-icon {
  top: 0.2rem;
  right: -5.7rem;
}
.pc {
  width: 100%;
  height: 1.7rem;
}
.pc img {
  width: 1.7rem;
  height: 1.7rem;
  float: left;
}
.pc p:first-of-type {
  width: 1.3rem;
  height: 0.33rem;
  font-size: 0.3rem;
  font-weight: bold;
  margin-top: 0.4rem;
  float: left;
  line-height: 0.3rem;
  margin-left: 0.1rem;
}
.pc p:last-of-type {
  width: 70%;
  float: left;
  line-height: 0.8rem;
  margin-left: 0.1rem;
  font-size: 0.25rem;
}
.versions {
  width: 100%;
  height: 1.8rem;
  margin-top: 0.4rem;
}
.liu {
  width: 90%;
  height: 0.6rem;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin: auto;
  margin-top: 0.2rem;
  line-height: 0.6rem;
  font-size: 0.2rem;
  text-indent: 0.2rem;
}
.liuborder {
  border: 1px solid #f56600;
  color: #f56600;
}
.liu p {
  float: right;
  margin-right: 0.2rem;
}
.color {
  width: 100%;
  height: 1.6rem;
  margin-top: 0.4rem;
}
.color > ul {
  width: 100%;
  height: 0.6rem;
  margin-top: 0.3rem;
  margin-left: 0.2rem;
}
.bt {
  float: left;
  width: 1.1rem;
  height: 0.6rem;
  border: 1px solid #cccccc;
  color: #cccccc;
  font-size: 0.3rem;
  text-align: center;
  line-height: 0.6rem;
  margin-right: 0.2rem;
}
.bordercolor {
  float: left;
  width: 1.1rem;
  height: 0.6rem;
  border: 1px solid #f56600;
  color: #f56600;
  font-size: 0.3rem;
  text-align: center;
  line-height: 0.6rem;
  margin-right: 0.2rem;
}
.shuliang {
  width: 100%;
  height: 0.7rem;
  margin-top: 0.1rem;
  font-size: 0.3rem;
  line-height: 0.7rem;
}
.operation {
  width: 2.9rem;
  height: 0.7rem;
  float: right;
}
.operation > button {
  width: 0.85rem;
  height: 0.7;
  float: left;
}
.operation > input {
  width: 0.75rem;
  height: 0.7rem;
  float: left;
  text-align: center;
}
.particulars > .van-button--normal {
  padding: 0 2.4rem;
  top: 0.3rem;
}
</style>
