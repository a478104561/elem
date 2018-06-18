<template>
    <div class="footer">
      <footer-tan v-show="flog" :taninfo="fgoodlist" @ch="flog = !flog"></footer-tan>
      <div class="footer_img" v-bind:class="{footactive : totalmount != 0}" @click="flog = !flog">
        <span class="icon-shopping_cart"></span>
        <span class="footer-count" v-show="totalmount != 0">{{totalmount}}</span>
      </div>
      <div class="footer_left">
        <span v-bind:class="{'footer-left': totalprice != 0}">￥{{totalprice}}</span><span>另需配送费￥{{footseller.deliveryPrice}}元</span>
      </div>
      <div class="footer_right" :class="{'foot-right-active' : totalprice>=footseller.minPrice}">
        {{total}}
      </div>
    </div>
</template>

<script>
  import Foot from './footertan'
    export default {
        name: "footer",
        props: {
          footseller:{
            type: Object
          },
          footer: {
            type: Object
          },
          footgood: {
            type: Array
          },
          fgoodlist: {
            type: Array,
            default(){
              return [
                {
                  count: 5,
                  price: 3
                },
                {
                  count: 2,
                  price: 23
                }
              ]
            }
          }
        },
        data(){
          return {
            flog: false
          }
        },
        components: {
          'footer-tan': Foot
        },
        methods: {
          footshow(){
            console.log(this.fgoodlist)
          }
        },
        computed: {
          totalmount(){
            var mount = 0
            this.fgoodlist.forEach(ele => {
              mount += ele.count;
            })
            return mount
          },
          totalprice(){
            var totalprice = 0
            this.fgoodlist.forEach(ele => {
              totalprice += ele.count * ele.price;
            })
            return totalprice
          },
          total(){
            if(this.totalprice === 0){
              return `￥${this.footseller.minPrice}起送`;
            }
            else if(this.totalprice > 0 && this.totalprice < 20){
              return `还差￥${this.footseller.minPrice - this.totalprice}起送`;
            }
            else{
              return `立即支付`
            }
          }
        }
    }
</script>

<style scoped lang="less" ref="stylesheet/less">
  @import '../../static/style.css';
.footer{
  width: 100%;
  height: 47px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: #141d27;
  display: flex;
  .footer_img{
    position: absolute;
    left: 18px;
    bottom: 8px;
    width: 44px;
    height: 44px;
    background-color: rgb(0,0,0);
    border-radius: 50%;
    text-align: center;
    border: 6px solid #141d27;
    z-index: 1;
    &.footactive{
      background-color: rgb(0,160,220);
    }
    .icon-shopping_cart{
      font-size: 24px;
      color: rgb(255,255,255);
      line-height: 48px;
    }
    .footer-count{
      position: absolute;
      top: -12px;
      right: -5px;
      width: 24px;
      height: 16px;
      background-color: rgb(240,20,20);
      color: #FFFFFF;
      font-size: 9px;
      font-weight: 700;
      line-height: 16px;
      border-radius: 8px 8px;
    }
  }
  .footer_left{
    font-size: 14px;
    color: rgba(255,255,255,0.4);
    line-height: 24px;
    margin-left: 70px;
    margin-top: 11px;
    span:nth-of-type(1){
      padding: 8px 12px;
      border-right: 1px solid rgba(255,255,255,0.1);
      margin-right: 12px;
      font-weight: 700;
      &.footer-left{
        color: #FFFFFF;
      }
    }
  }
  .footer_right{
    font-size: 12px;
    color: rgba(255,255,255,0.4);
    font-weight: 700;
    line-height: 47px;
    width: 105px;
    height: 100%;
    text-align: center;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.2);
    &.foot-right-active{
      background-color: darkgreen;
    }
  }
}
</style>
