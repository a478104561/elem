<template>
    <div class="goods">
      <div class="goodsleft" ref="goodlist">
        <ul class="left">
          <li v-for="(good, index) in goods" :key="index" @click="selectIndex(index,$event)"><span class="tu" v-if="good.type > 0" :class="'type' + good.type"></span>{{good.name}}</li>
        </ul>
      </div>
      <div class="goodsright" ref="itemlist">
        <ul class="right">
          <li class="right_list" v-for="(good1, index) in goods" :key="index" ref="rlist">
            <div class="good_title">{{good1.name}}</div>
            <router-link :info="good1" v-for="(food, index) in good1.foods" class="link" :to="{path:'/goods/goodinfo/'+food.name}" :key="index">
              <div class="good_main">
                <div class="good_img" @click="block1 = !block1">
                  <img :src="food.image">
                </div>
                <h2 @click="block1 = !block1">{{food.name}}</h2>
                <p v-if="food.description">{{food.description}}</p>
                <p>
                  <span class="sc">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </p>
                <p class="jiage">
                  <span>￥</span><span>{{food.price}}</span>
                  <span v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                </p>
                <div class="good-btn" @click="foodbtn">
                  <my-btn :btn="food"></my-btn>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <my-footer :footseller="goodprice" :fgoodlist="selectfood" class="goodf"></my-footer>
      <div class="goodview" v-if="block1" @click="block1 = !block1">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  import BScroll from 'better-scroll'
  import Button from './button'
  import Footer from './footer'
  import Goodinfo from './goodinfo'
  export default {
      name: "goods",
      data(){
        return {
          goods: [],
          scrollY: 0,
          heightlist: [],
          block1: false,
          ll: false
        }
      },
      components:{
        'my-btn': Button,
        'my-footer': Footer,
        'my-goodinfo': Goodinfo
      },
      props: ['goodprice'],
      created(){
        axios.get('/page/goods')
          .then(res => {
            if(res.data.mes === 0){
              this.goods = res.data.data
              console.log(this.goods)
              Vue.nextTick(() => {
                this._initscroll()
                this.initheight()
              })
            }
          })
      },
      computed:{

        selectfood(){
          var f = []
          this.goods.forEach(ele => {
            ele.foods.forEach(food => {
              if(food.count){
                f.push(food)
              }
            })
          })
          return f
        }
      },
      methods: {
        foodbtn(e){
        },

        selectIndex($index, $event) {
          if (!$event._constructed) {
            return;
          }
          var f = this.$refs.rlist
          // console.log(f[$index])
          this.itemlist.scrollToElement(f[$index], 300)
        },
        _initscroll(){
          this.goodlist = new BScroll(this.$refs.goodlist, {
            click: true
          })
          this.itemlist = new BScroll(this.$refs.itemlist, {
            probeType: 3,
            click: true
          })
          this.itemlist.on('scroll', (pos) => {
            this.scrollY = Math.abs(Math.round(pos.y));
            // console.log(this.scrollY)
          })
          // console.log(itemlist)
        },
        initheight(){
          console.log(2)
          var rlist = this.$refs.rlist
          // console.log(rlist);
          var height = 0
          this.heightlist.push(height)
          // console.log(rlist.length)
          for(var i = 0; i < rlist.length; i++){
            height += rlist[i].clientHeight
          }
          this.heightlist.push(height)
        }
      }
    }
</script>

<style scoped lang="less" ref="stylesheet/less"> //使用less，需要下载loader
.goods{
    display: flex;
    position: absolute;
    top: 174px;
    bottom: 48px;
    left: 0;
    right: 0;
    /*width: 100%;*/
    /*height: 100%;*/
    overflow: hidden;
  .goodview{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: white;
    bottom: 0;
    z-index: 100;
  }
  .goodsleft{
    width: 80px;
    .left{
      width: 100%;
      background-color: #f3f5f7;
      padding: 12px;
      box-sizing: border-box;
      li{
        height: 54px;
        box-sizing: border-box;
        width: 56px;
        border-bottom: 2px solid rgba(7,17,27,0.1);
        font-size: 12px;
        color: black;
        font-weight: 200;
        line-height: 14px;
        padding: 12px 0;
        text-align: left;
        &.current{
          background-color: #fff;
        }
        .tu{
          float: left;
          width: 12px;
          height: 12px;
          background-size: cover;
          margin-right: 4px;
          &.type1{
            background-image: url("../img/discount_3@3x.png");
          }
          &.type2{
            background-image: url("../img/special_2@2x.png");
          }
          &.type3{
            background-image: url("../img/invoice_3@3x.png");
          }
          &.type4{
            background-image: url("../img/guarantee_3@3x.png");
          }
          &.type0{
            background-image: url("../img/decrease_3@3x.png");
          }
        }
      }
    }
  }
  .goodsright{
    flex-grow: 1;
    .right{
      width: 100%;
      .right_list{
        width: 100%;
        .good_title{
          width: 100%;
          height: 26px;
          font-size: 12px;
          padding-left: 14px;
          box-sizing: border-box;
          color: rgb(147,153,159);
          line-height: 26px;
          background-color: #f3f5f7;
          border-left: 1px solid #d9dde1;
          text-align: left;
        }
        .link{
          display: inline-block;
          width: 100%;
          .good_main{
            width: 100%;
            padding: 18px;
            box-sizing: border-box;
            background-color: white;
            border: 1px solid rgba(7,17,27,0.1);
            position: relative;
            .good_img{
              width: 64px;
              height: 64px;
              float: left;
              margin-right: 10px;
              img{
                width: 100%;
                height: 100%;
              }
            }
            h2{
              font-size: 14px;
              color: rgb(7,17,27);
              line-height: 14px;
              text-align: left;
              margin-bottom: 8px;
              vertical-align: top;
              margin-top: 2px;
            }
            p{
              height: 10px;
              overflow: hidden;
              font-size: 10px;
              color: rgb(147,153,159);
              line-height: 10px;
              text-align: left;
              margin-bottom: 8px;
              .sc{
                margin-right: 12px;
              }
            }
            .jiage{
              width: 50%;
              height: 20px;
              font-size: 10px;
              color: rgb(147,153,159);
              font-weight: normal/700;
              line-height: 24px;
              span:nth-of-type(1){
                color: red;
              }
              span:nth-of-type(2){
                color: red;
                font-size: 14px;
                vertical-align: top;
              }
              span:nth-of-type(3){
                vertical-align: top;
                text-decoration: line-through;
              }
            }
            .good-btn{
              position: absolute;
              bottom: 18px;
              right: 18px;
            }
          }
        }
      }
    }
  }
  .goodf{
    position: fixed;
    bottom: 0;
    left: 0;
  }
}

</style>
