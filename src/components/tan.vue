<template>
    <transition>
      <div class="tan">
        <div class="tttt"></div>
        <div class="tan-top">
          <h1>{{tan.name}}</h1>
          <div class="tan-score">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>
        <div class="tan-mess" v-if="tan.supports">
          <div class="xian1"></div>
          <div class="xian2"></div>
          <h2>优惠信息</h2>
          <ul>
            <li class="tan-main" v-for="(t,index) in tan.supports" :key="index" v-if="t.type < 3">
              <span :class="'t' + t.type"></span>
              <p class="tan-main-mess">{{t.description}}</p>
            </li>
          </ul>
        </div>
        <div class="tan-seller">
          <div class="xian1"></div>
          <div class="xian2"></div>
          <h2>商家公告</h2>
          <p>{{tan.bulletin}}</p>
        </div>
        <span class="icon-close" @click="close"></span>
      </div>
    </transition>
</template>

<script>
    export default {
        name: "tan",
        props: ['tan'],
        data(){
          return {

          }
        },
        methods: {
          close(){
            this.$emit('close')
          }
        }
    }
</script>

<style scoped lang="less" ref="stylesheet/less">
  @import '../../static/style.css';
  .v-enter{
    opacity: 0;
  }
  .v-enter-to{
    opacity: 1;
  }
  .v-enter-active, .v-leave-active{
    transition: all 1s;
  }
  .v-leave{
    opacity: 1;
  }
  .v-leave-to{
    opacity: 0;
  }
  .tan{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(7,17,27,0.8);
    z-index: 10;
    padding: 64px 36px 32px;
    box-sizing: border-box;
    /*filter: blur(10px);*/
    .tttt{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      filter: blur(10px);
      /*background-color: rgba(7,17,27,0.8);*/
      z-index: -1;
    }
    .tan-top{
      width: 100%;
      h1{
        font-size: 16px;
        font-weight: 700;
        color: rgb(255,255,255);
        line-height: 16px;
        margin-bottom: 16px;
        text-align: center;
      }
      .tan-score{
        width: 100%;
        height: 24px;
        span{
          display: inline-block;
          width: 24px;
          height: 24px;
          background-image: url("../img/star36_on@2x.png");
          background-size: cover;
          margin-right: 18px;
        }
      }
    }
    .tan-mess{
      width: 100%;
      margin-top: 28px;
      position: relative;
      .xian1{
        width: 112px;
        height: 1px;
        background-color: rgba(255,255,255,0.2);
        position: absolute;
        left: 0px;
        top: 5px;
      }
      .xian2{
        width: 112px;
        height: 1px;
        background-color: rgba(255,255,255,0.2);
        position: absolute;
        right: 0px;
        top: 5px;
      }
      h2{
        font-size: 14px;
        font-weight: 700;
        color: #FFFFFF;
        line-height: 14px;
      }
      ul{
        width: 100%;
        padding: 24px 12px 28px;
        .tan-main{
          width: 100%;
          display: flex;
          margin-bottom: 12px;
          .tan-main-mess{
            font-size: 12px;
            font-weight: 200;
            color: #FFFFFF;
            line-height: 16px;
            margin-left: 6px;
          }
          span{
            display: inline-block;
            width: 16px;
            height: 16px;
            background-size: cover;
            &.t2{
              background-image: url("../img/special_2@2x.png");
            }
            &.t1{
              background-image: url("../img/discount_2@2x.png");
            }
            &.t0{
              background-image: url("../img/decrease_2@2x.png");
            }
          }
        }
      }
    }
    .tan-seller{
      width: 100%;
      position: relative;
      .xian1{
        width: 112px;
        height: 1px;
        background-color: rgba(255,255,255,0.2);
        position: absolute;
        left: 0px;
        top: 5px;
      }
      .xian2{
        width: 112px;
        height: 1px;
        background-color: rgba(255,255,255,0.2);
        position: absolute;
        right: 0px;
        top: 5px;
      }
      h2{
        font-size: 14px;
        font-weight: 700;
        color: #FFFFFF;
        line-height: 14px;
      }
      p{
        margin-top: 24px;
        font-size: 12px;
        font-weight: 200;
        color: #FFFFFF;
        line-height: 24px;
        text-align: left;
      }
    }
    .icon-close{
      font-size: 32px;
      color: rgba(255,255,255,0.5);
      position: absolute;
      bottom: 32px;
      left: 50%;
      margin-left: -16px;
    }
  }

</style>
