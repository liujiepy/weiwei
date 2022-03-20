<template>
  <div class="city_body">
    <div class="city_list">
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul class="clearfix">
          <li>上海</li>
          <li>北京</li>
          <li>上海</li>
          <li>北京</li>
          <li>上海</li>
          <li>北京</li>
          <li>上海</li>
          <li>北京</li>
        </ul>
      </div>
      <div class="city_sort">
        <div v-for="(city,index) in cities" :key=index >
          <h2>{{city.fistN}}</h2>
          <ul>
            <li>{{city.name}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="city_index22">
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {reqGetCityList} from '@/api'
import {codefans_net_CC2PY} from  '@/tools/PinYin.js'
export default {
  name: "City",
  data(){
    return {
      cities: [],
      ccitysort: []
    }
  },
  async mounted(){
    //1.通过聚合平台接口API调用
    // this.$axios.get('/xzqh/query?fid=0&key=eacc450fabf1d3d029ddd6a411d52c81').then(res =>{
    //   console.log(res)
    // },res =>{
    //   console.log(res.message);
    // })

    //2.通过vue.config.js  before(pp)调用模拟数据
    // try {
    //   const result = await this.$axios.get('/citylist')
    //   console.log(result);
    // } catch (error) {
    //   console.log(error);
    // }

    //3通过mock模拟数据接口调用城市数据
    const result = await reqGetCityList()
    if (result.data.code == 200) {
      this.cities =  result.data.data.cities
      this.cities.forEach(item => {
        //定义第一个字母
        var firstName = item.name.substring(0,1)
        var firstLetter = codefans_net_CC2PY(firstName).substring(0,1).toUpperCase()
        this.$set(item,'fistN',firstLetter)
      });
    }else{
      console.log(result);
    }

    this.cities.sort((n1,n2)=>{
      if (n1.fistN>n2.fistN) {
        return 1
      }else if (n1.fistN<n2.fistN) {
        return -1
      }else{
        return 0
      }
    })
  }
};
</script>

<style scoped>
/* #content .city_body {
  margin-top: 45px;
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
} */
.city_body .city_list {
  flex: 1;
  overflow: auto;
  background: #fff5f0;
}
.city_body .city_list::-webkit-scrollbar {
  background-color: transparent;
  width: 0;
}
.city_body .city_hot {
  margin-top: 20px;
}
.city_body .city_hot h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_hot ul li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
}
.city_body .city_sort div {
  margin-top: 20px;
}
.city_body .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}
.city_body .city_sort ul li {
  line-height: 30px;
  line-height: 30px;
}
.city_body .city_index {
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-left: 1px #e6e6e6 solid;
}
</style>