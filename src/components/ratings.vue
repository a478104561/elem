<template>
    <div class="ratings">
      <div class="ratins-top">
        <div class="tatin-top-left">
          <h2>{{seller.score}}</h2>
          <p>综合评分</p>
          <p>高于周边商家{{seller.rankRate}}%</p>
        </div>
        <ul class="tatin-top-right">
          <li><span>服务</span><el-rate v-model="seller.serviceScore" disabled show-score text-color="#ff9900" score-template="{value}">
          </el-rate></li>
          <li><span>食品</span><el-rate v-model="seller.foodScore" disabled show-score text-color="#ff9900" score-template="{value}">
          </el-rate></li>
          <li><p>送达时间</p><p>{{seller.deliveryTime}}分钟</p></li>
        </ul>
      </div>
      <div class="ratings-bottom" ref="ratingsscr">
        <ul class="ratins-bottom">
          <li class="ratins-wrap" v-for="(rating,index) in ratings">
            <div class="ratins-img">
              <img :src="rating.avatar">
            </div>
            <div class="ratins-text">
              <p class="ratin-name">{{rating.username}}</p>
              <p class="ratin-text">{{rating.text}}</p>
              <p class="time">{{foodtime}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  import Vue from 'vue'
  import moment from 'moment'
    export default {
        name: "ratings",
        data(){
          return {
            ratings: [],
            seller: {}
          }
        },
        components: {

        },
        computed:{
          foodtime(){
            return moment().format('l')
          }
        },
        created(){
          axios.get('/page/ratings')
            .then(res => {
              if(res.data.mes === 0){
                this.ratings = res.data.data
                // console.log(this.ratings)
              }
            })
          console.log(moment(12312312334234).format('l'))

          axios.get('/page/seller')
            .then(res => {
              if(res.data.mes === 0){
                this.seller = res.data.data
                // console.log(this.seller)
                Vue.nextTick(() => {
                  this.ratinscroll()
                })
              }
            })
        },
        methods: {
          ratinscroll(){
            this.ratingsscr = new BScroll(this.$refs.ratingsscr)
            // console.log(this.ratingsscr)
          }
        }
    }
</script>

<style scoped lang="less" ref="stylesheet/less">
.ratings{
  width: 100%;
  height: 480px;
  .ratins-top{
    width: 100%;
    display: flex;
    border-bottom: 1px solid rgba(7,17,27,0.3);
    .tatin-top-left{
      flex-grow: 1;
      margin: 18px 0;
      box-sizing: border-box;
      text-align: center;
      border-right: 1px solid rgba(7,17,27,0.2);
      h2{
        font-size: 24px;
        color: rgb(255,153,0);
        line-height: 28px;
        margin-bottom: 6px;
      }
      p:nth-of-type(1){
        font-size: 12px;
        color: rgb(7,17,27);
        line-height: 12px;
        margin-bottom: 8px;
      }
      p:nth-of-type(2){
        font-size: 10px;
        color: rgb(7,17,27);
        line-height: 10px;
        margin-bottom: 6px;
      }
    }
    .tatin-top-right{
      width: 237px;
      padding: 18px 24px;
      box-sizing: border-box;
      li{
        font-size: 12px;
        color: rgb(7,17,27);
        line-height: 18px;
        display: flex;
        justify-content: space-between;
        span:nth-of-type(1){
          margin-right: 12px;
          margin-bottom: 8px;
        }
        span:nth-of-type(2){
          font-size: 12px;
          color: rgb(255,153,0);
          line-height: 18px;
        }
      }
    }
  }
  .ratings-bottom{
    width: 100%;
    height: 380px;
    overflow: hidden;
    position: relative;
    .ratins-bottom{
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      .ratins-wrap{
        width: 100%;
        position: relative;
        padding: 18px 18px 18px 58px;
        box-sizing: border-box;
        border-bottom: 1px solid rgba(7,17,27,0.3);
        .ratins-img{
          width: 28px;
          height: 28px;
          position: absolute;
          left: 18px;
          top: 18px;
          border-radius: 50%;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .ratins-text{
          width: 100%;
          text-align: left;
          .ratin-name{
            font-size: 10px;
            color: rgb(7,17,27);
            line-height: 12px;
            margin-bottom: 4px;
          }
          .ratin-text{
            font-size: 12px;
            color: rgb(7,17,27);
            line-height: 18px;
          }
          .time{
            position: absolute;
            top: 18px;
            right: 18px;
            font-size: 10px;
            font-weight: 200;
            color: rgb(147,153,159);
            line-height: 12px;
          }
        }
      }
    }
  }

}
</style>
