<template>
  <div>
    <div class="movie_body">
      <ul>
        <li v-for="commovie in comingMovies" :key="commovie.id" >
          <div class="pic_show"><img :src="commovie.img" /></div>
          <div class="info_list">
            <h2>{{commovie.nm}}</h2>
            <p><span class="person">{{commovie.wish}}</span> 人想看</p>
            <p>主演: {{commovie.star}}</p>
            <p>{{commovie.showInfo}}</p>
          </div>
          <div class="btn_pre">预售</div>
        </li>
        <!-- <li v-for="(commovie,index) in hotVedio" :key="index" >
          <div class="pic_show"><img :src="commovie.item_cover" /></div>
          <div class="info_list">
            <h2>{{commovie.title}}</h2>
            <p><span class="person">{{commovie.hot_value}}</span> 热度℃</p>
            <p>主演: {{commovie.author}}</p>
            <p>{{commovie.comment_count}}评论数</p>
          </div>
          <div class="btn_pre"><a :href="commovie.share_url">播放</a></div>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import {comingRequests,juheRequests} from '@/api'

export default {
  name:'ComingSoon',
  data(){
    return {
      comingMovies: {},
      hotVedio: []
    }
  },
  async mounted(){
    await comingRequests().then(req=>{
      console.log(req)
      this.comingMovies = req.data.coming
    },res=>{
      console.log(res)
    })
    // await juheRequests().then(req=>{
    //   console.log(req)  
    //   this.hotVedio = req.data.result
    // },res=>{
    //   console.log(res)
    // })
  },
};
</script>

<style scoped>
#content .movie_body {
  flex: 1;
  overflow: auto;
}
.movie_body ul {
  margin: 0 12px;
  overflow: hidden;
}
.movie_body ul li {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px #e6e6e6 solid;
  padding-bottom: 10px;
}
.movie_body .pic_show {
  width: 64px;
  height: 90px;
}
.movie_body .pic_show img {
  width: 100%;
}
.movie_body .info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}
.movie_body .info_list h2 {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list p {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}
.movie_body .info_list img {
  width: 50px;
  position: absolute;
  right: 10px;
  top: 5px;
}
.movie_body .btn_mall,
.movie_body .btn_pre {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}
.movie_body .btn_pre {
  background-color: #3c9fe6;
}
</style>