<template>
  <div class="bom">
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
      <router-link to="/home">
        <van-tabbar-item icon="home-o">
          首页
        </van-tabbar-item>
      </router-link>
      <router-link to="/classify">
        <van-tabbar-item icon="search">
          分类
        </van-tabbar-item>
      </router-link>
      <router-link to="/shopping">
        <van-tabbar-item icon="friends-o">
          购物车
        </van-tabbar-item>
      </router-link>
      <router-link to="/person">
        <van-tabbar-item icon="setting-o">
          个人
        </van-tabbar-item>
      </router-link>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
      }
    };
  }
};
</script>

<style scoped>
  .bom{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index:1;
  }
  .van-tabbar--fixed{
    width: 100%;
    height: .9rem;
    display: flex;
    justify-content: space-around;
  }
  .van-tabbar--fixed a {
    width: 100%;
    height: 100%;
    padding: .1rem 0;
    box-sizing: border-box;
  }
</style>
