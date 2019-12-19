<template>
  <div class="head">
    <hea text="收货地址"></hea>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      @add="onAdd(list)"
      @edit="onEdit"
      @select='onSelect'
      @click-item="onClickItem"
    />
  </div>
</template>

<script>
import Hea from "../../components/head.vue";
export default {
  data() {
    return {
      chosenAddressId: "1",
      list: [],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号",
        }
      ],
    };
  },
  mounted() {
    if(JSON.parse(localStorage.getItem('list')) != undefined ){
      this.list = JSON.parse(localStorage.getItem('list'))
      this.chosenAddressId = Number(localStorage.getItem('chosenAddressId'))
    }else{
       this.list = [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号",
        }
      ],
      this.chosenAddressId = "1"
    }
  },
  methods: {
    onAdd(list) {
      this.$router.push({
        name:"addressEdit",
        params:{
          list:this.list
        }
      });
    },
    onEdit(item, index) {
      // Toast("编辑地址:" + index);
    },
    newData() {
      // this.obj = {
      //   id: '',
      //   name: '',
      //   tel: '',
      //   address: '',
      //   isDefault: false
      // };
    },

    //切换地址
    onSelect(item,index){
      console.log(item)
      this.list.forEach(item => {
        // console.log(item)
        item.isDefault = false
      })
      item.isDefault = true
    },


    
    onClickItem(item){
      localStorage.setItem('chosenAddressId',item.id)
    }
  },
  components: {
    Hea
  }
};
</script>

<style scoped>
.head {
  width: 100%;
  height: 90%;
  margin-top: 1rem;
}
.van-pull-refresh,
.van-pull-refresh__track {
  height: 100%;
}
</style>
