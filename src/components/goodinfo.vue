<template>
    <transition name="info">
      <div class="goodinfo">
        <div class="goodinfo-top">
          <img :src="infoshow.image">
        </div>
        <div class="goodinfo-middle">
          <h2>{{infoshow.name}}</h2>
          <p>
            <span>月售{{infoshow.sellCount}}份</span><span>好评率{{infoshow.rating}}%</span>
          </p>
          <p class="goodinfo-mon">
            <span>￥</span>{{infoshow.price}}<span v-if="infoshow.oldPrice">￥{{infoshow.oldPrice}}</span>
          </p>
          <div class="goodinfo-btn">加入购物车</div>
        </div>
        <div class="goodinfo-bottom">
          <div class="goodinfo-bt">商品评价</div>
          <div class="goodinfo-wrap" ref="wrap">
            <ul class="goodinfo-bb">
              <li class="goodinfo-main" v-for="(rating, index) in infoshow.ratings" :key="index">
                <p>{{rating.username}}</p>
                <h3 v-if="rating.text">{{rating.text}}</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  import Vue from 'vue'

    export default {
        name: "goodinfo",
        methods: {
          goodinfoclose(){
            this.$emit('aaa')
          }
        },
        data(){
          return {
            goodlist: [],
            showlist: []
          }
        },
        computed: {
          infoshow(){
            this.goodlist.forEach((ele) => {
              ele.foods.forEach((item) => {
                // console.log(item.name)
                if(item.name == this.$route.params.id){
                  this.showlist = item
                  console.log(this.showlist)
                }
              })
            })
            return this.showlist
          }
        },
        created(){
          axios.get('/page/goods')
            .then((res) => {
              this.goodlist = res.data.data;
              // console.log(this.goodlist)
            })
          Vue.nextTick(() => {
            this.wrap = new BScroll(this.$refs.wrap, {
              startY: 0,
              scrollY: true
            })
          })
        }
    }
</script>

<style scoped lang="less" ref="stylesheet/less">

  .info-enter{
    opacity: 0;
  }
  .info-enter-to{
    opacity: 1;
  }
  .info-enter-active, .info-leave-active{
    transition: all 1s;
  }
  .info-leave{
    opacity: 1;
  }
  .info-leave-to{
    opacity: 0;
  }
  .goodinfo{
    width: 100%;
    background-color: #f3f5f7;
    .goodinfo-top{
      width: 100%;
      height: 375px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .goodinfo-middle{
      position: relative;
      width: 100%;
      padding: 18px;
      box-sizing: border-box;
      text-align: left;
      background-color: #fff;
      margin-bottom: 16px;
      h2{
        font-size: 14px;
        font-weight: 700;
        color: rgb(7,17,27);
        line-height: 14px;
      }
      p{
        margin-top: 8px;
        margin-bottom: 18px;
        span{
          font-size: 10px;
          color: rgb(147,153,159);
          line-height: 10px;
          &:nth-of-type(1){
            margin-right: 12px;
          }
        }
      }
      .goodinfo-mon{
        font-size: 14px;
        color: rgb(240,20,20);
        font-weight: 700;
        line-height: 24px;
        height: 24px;
        span{
          font-size: 10px;
          color: rgb(240,20,20);
          line-height: 24px;
        }
      }
      .goodinfo-btn{
        width: 74px;
        height: 24px;
        padding: 6px 12px;
        color: #FFFFFF;
        background-color: rgb(0,160,220);
        border-radius: 12px;
        font-size: 10px;
        line-height: 12px;
        text-align: center;
        box-sizing: border-box;
        position: absolute;
        right: 18px;
        bottom: 36px;
      }
    }
    .goodinfo-bottom{
      width: 100%;
      .goodinfo-bt{
        width: 100%;
        height: 50px;
        padding: 18px;
        box-sizing: border-box;
        background-color: #fff;
        text-align: left;
        font-weight: 700;
      }
      .goodinfo-wrap{
        width: 100%;
        border-top: 1px solid rgba(7,17,27,0.1);
        height: 100px;
        overflow: hidden;
        position: relative;
        .goodinfo-bb{
          width: 100%;
          padding: 0 18px;
          box-sizing: border-box;
          background-color: #fff;
          position: absolute;
          left: 0;
          top: 0;
          .goodinfo-main{
            width: 100%;
            padding: 16px;
            box-sizing: border-box;
            text-align: left;
            border-bottom: 1px solid #f3f5f7;
          }
        }
      }
    }
  }

</style>
