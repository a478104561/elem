<template>
  <div id="app">
    <my-header :seller="seller"></my-header>

    <div class="tab">
      <div class="tab_main">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab_main">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab_main">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>

    <div class="main">
      <router-view :goodprice="seller"></router-view>
    </div>
    <!--<router-view/>-->
    <!--<my-footer :footer="seller" :footgood="goods"></my-footer>-->
  </div>
</template>

<script>

  import Header from './components/header'
  import axios from 'axios'
export default {
  name: 'App',
  data(){
    return {
      num: 1,
      seller: {},
      goods: []
    }
  },
  components: {
    'my-header': Header
  },
  methods: {
    change(n){
      return this.num = n
      console.log(this.num)
    }
  },
  created(){
    axios.get('/page/seller')
      .then(res => {
        if (res.data.mes === 0) {
          this.seller = res.data.data
          // console.log(this.seller)
        }
      })
    axios.get('/page/goods')
      .then(res => {
        if (res.data.mes === 0) {
          this.goods = res.data.data
          // console.log(this.goods)
        }
      })
  }
}
</script>

<style lang="less" ref="stylesheet/less">
  .active{
    color: rgb(240,20,20) !important;
  }
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    /*position: relative;*/
    /*background-color: yellow;*/
    .tab{
      width: 100%;
      height: 40px;
      background-color: white;
      font-size: 14px;
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid rgba(7,17,27,0.1);
      .tab_main{
        width: 100%;
        height: 100%;
        a{
          display: block;
          height: 100%;
          width: 100%;
          text-align: center;
          line-height: 40px;
          color: rgb(77,85,93);
          &.active{
            color: rgb(240,20,20) !important;
          }
        }
      }

    }
  }

</style>
