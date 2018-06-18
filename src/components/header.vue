<template>
    <div class="header">
        <my-tan v-if="flog" v-bind:tan="seller" @close="flog = !flog"></my-tan>
        <div class="bg">
          <img :src="seller.avatar" alt="">
        </div>
        <div class="top">
          <div class="tan" @click="flog = !flog">
            {{seller.deliveryPrice}}个 <span> > </span>
          </div>
          <div class="img">
            <img v-bind:src="seller.avatar">
          </div>
          <div class="main">
            <div class="main_top">
              <span class="pai"></span><h1>{{seller.name}}</h1>
            </div>
            <h2>{{seller.description}}</h2>
            <div class="main_bottom" v-if="seller.supports">
              <span class="jian" v-bind:class="'type'+seller.supports[0].type"></span>
              <p>{{seller.supports[0].description}}</p>
            </div>
          </div>
        </div>
        <div class="bottom" @click="flog = !flog">
          <span></span>
          <p>{{seller.bulletin}}</p>
          <span> > </span>
        </div>
    </div>
</template>

<script>
  import Tan from './tan'
    export default {
        name: "header",
        props: {
          seller: {
            type: Object,
            default: ''
          }
        },
        components: {
            'my-tan': Tan
        },
        data(){
          return {
            flog: false
          }
        }
    }
</script>

<style scoped lang="less" ref="stylesheet/less">
  @import '../../static/style.css';

.header{
  width: 100%;
  overflow: hidden;
  .bg{
    width: 100%;
    height: 138px;
    background-color: rgba(7,17,27,0.5);
    filter: blur(10px);
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .top{
    width: 100%;
    padding: 24px 24px 18px;
    box-sizing: border-box;
    /*border: 1px solid red;*/
    display: flex;
    position: relative;
    .tan{
      position: absolute;
      right: 12px;
      bottom: 12px;
      color: #FFFFFF;
      padding: 7px 8px;
      height: 24px;
      font-size: 10px;
      background-color: rgba(0,0,0,0.2);
      text-align: center;
      line-height: 12px;
      box-sizing: border-box;
      border-radius: 8px;
      span{
        font-size: 5px;
        font-weight: 200;
      }
    }
    .img{
      width: 64px;
      height: 64px;
      border-radius: 2px;
      margin-right: 16px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .main{
      width: 50%;
      text-align: left;
      flex-grow: 1;
      .main_top{
        display: flex;
        width: 100%;
        align-items: center;
        margin-bottom: 8px;
        .pai{
          display: block;
          width: 30px;
          height: 18px;
          background-image: url("../img/brand@2x.png");
          background-size: cover;
          margin-right: 6px;
        }
        h1{
          color: #FFFFFF;
          font-size: 16px;
          font-weight: bold;
        }
      }
      h2{
        color: #FFFFFF;
        font-size: 12px;
        font-weight: 200;
        margin-bottom: 10px;
      }
      .main_bottom{
        width: 100%;
        display: flex;
        align-items: center;
        .jian{
          display: block;
          width: 12px;
          height: 12px;
          background-size: cover;
          margin-right: 4px;
          &.type1{
             background-image: url("../img/discount_3@2x.png");
           }
          &.type2{
            background-image: url("../img/special_3@2x.png");
          }
          &.type3{
            background-image: url("../img/invoice_3@2x.png");
          }
          &.type4{
            background-image: url("../img/guarantee_3@2x.png");
          }
          &.type0{
            background-image: url("../img/decrease_3@2x.png");
          }
        }
        p{
          font-size: 10px;
          color: #FFFFFF;
          font-weight: 200;
        }
      }
    }
  }
  .bottom{
    width: 100%;
    height: 28px;
    padding: 0px 12px;
    box-sizing: border-box;
    background-color: rgba(7,17,27,0.2);
    display: flex;
    align-items: center;
    span:nth-of-type(1){
      width: 22px;
      height: 12px;
      display: block;
      background-image: url('../img/bulletin@2x.png');
      background-size: cover;
      margin-right: 4px;
    }
    p{
      font-size: 10px;
      width: 90%;
      height: 28px;
      line-height: 28px;
      text-align: left;
      overflow: hidden;
      color: #FFFFFF;
      margin-right: 4px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    span:nth-of-type(2){
      color: #FFFFFF;
      display: block;
      font-size: 6px;
    }
  }
}
</style>
