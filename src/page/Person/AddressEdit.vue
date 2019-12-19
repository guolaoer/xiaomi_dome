<template>
  <div class="newly">
    <hea text="新增收货地址"></hea>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import allcity from "../../assets/js/allcity";
import Hea from "../../components/head";
export default {
  data() {
    return {
      areaList: allcity,
      searchResult: [],
      list: [],
      id:4,
      obj: {
        id: 0,
        name: "",
        tel: "",
        address: "",
        isDefault: false,
        chosenAddressId:0
      }
    };
  },
  mounted() {
    if(localStorage.getItem('newId') != undefined){
      this.id = Number(localStorage.getItem('newId'))
    }else{
      this.id = 3
    }
    this.list = this.$route.params.list;
    console.log(this.list);
  },
  components: {
    Hea
  },
  methods: {
    onSave(content) {
      this.obj.id = this.id + 1 
      localStorage.setItem('newId',this.obj.id)
      this.obj.name = content.name;
      this.obj.tel = content.tel;
      this.obj.address = `${content.province}${content.city}${content.county}${content.addressDetail}`;
      if(content.isDefault == true ){
        localStorage.setItem('chosenAddressId',this.obj.id)
      }
      this.list.push(this.obj);
      localStorage.setItem('list',JSON.stringify(this.list))
      this.$router.push('/addressList')
    },
    onDelete() {
      console.log(22);
    },
  }
};
</script>

<style scoped>
.van-address-edit {
  margin-top: 1rem;
}
</style>
