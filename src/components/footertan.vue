<template>
    <div class="footertan">
      <div class="change" @click="change"></div>
      <div class="ftan">
        <div class="ftan-top">
          <span>购物车</span>
          <span v-show="taninfo != ''">清空</span>
        </div>
        <ul class="ftan-bot" ref="ftanwrap">
          <li v-show="taninfo == '' ? 123 : ''">你的购物车为空</li>
          <li v-for="(info,index) in taninfo">
            <h2>{{info.name}}</h2>
            <div class="ftan-content">
              <span>￥</span>
              <span>{{info.price}}</span>
              <div class="btn">
                <span class="icon-remove_circle_outline jian" @click="info.count--"></span>
                <span class="foottext">{{info.count}}</span>
                <span class="icon-add_circle jia" @click="info.count++"></span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Vue from 'vue'

  export default {
        name: "footertan",
        components: {

        },
        props: {
          taninfo: {
            type: Array
          }
        },
        methods: {
          change(){
            this.$emit('ch')
          }
        }
    }
</script>

<style scoped lang="less" ref="stylesheet/less">
  @import '../../static/style.css';
.footertan{
  width: 100%;
  background-color: rgba(7,17,27,0.6);
  position: fixed;
  top: 0;
  bottom: 47px;
  left: 0;
  right: 0;
  .change{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 310px;
  }
  .ftan{
    width: 100%;
    height: 258px;
    position: absolute;
    bottom: 0;
    left: 0;
    .ftan-top{
      width: 100%;
      height: 40px;
      background-color: #f3f5f7;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 18px;
      box-sizing: border-box;
      border-bottom: 1px solid rgba(7,17,27,0.1);
      span:nth-of-type(1){
        gont-size: 14px;
        font-weight: 200;
        color: rgb(7,17,27);
        line-height: 40px;
      }
      span:nth-of-type(2){
        gont-size: 12px;
        color: rgb(0,160,220);
        line-height: 40px;
      }
    }
    .ftan-bot{
      width: 100%;
      height: 218px;
      background-color: #fff;
      overflow: hidden;
      li{
        width: 100%;
        height: 48px;
        border-bottom: 1px solid rgba(7,17,27,0.1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 18px;
        box-sizing: border-box;
        h2{
          font-size: 14px;
          color: rgb(7,17,27);
          line-height: 24px;
        }
        .ftan-content{
          color: rgb(240,20,20);
          line-height: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          span:nth-of-type(1){
            font-size: 10px;
          }
          span:nth-of-type(2){
            font-size: 14px;
            font-weight: 700;
          }
          .btn{
            display: flex;
            justify-content: center;
            align-items: center;
            .jian, .jia{
              font-size: 24px;
              color: rgb(0,160,220);
              line-height: 24px;
            }
            .jian{
              margin-left: 12px;
            }
            .foottext{
              display: inline-block;
              width: 24px;
              height: 24px;
              font-size: 10px;
              color: rgb(147,153,159);
              line-height: 24px;
            }
          }
        }
      }
    }
  }
}
</style>
