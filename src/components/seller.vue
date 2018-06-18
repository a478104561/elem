<template>
    <div class="seller">
        <div class="seller-top">
          <div class="seller-title">
            <h2>{{sellerList.name}}</h2>
            <p>
              <el-rate v-model="sellerList.score" disabled show-score text-color="#ff9900" score-template="{value}" class="ping">
              </el-rate>
              <span>月售{{sellerList.sellCount}}单</span>
            </p>
          </div>
          <div class="seller-mon">
            <div><span>起送价</span>{{sellerList.minPrice}}<span>元</span></div>
            <div><span>商家配送</span>{{sellerList.deliveryPrice}}<span>元</span></div>
            <div><span>平均配送时间</span>{{sellerList.deliveryTime}}<span>分钟</span></div>
          </div>
        </div>
        <div class="seller-main">
          <div class="seller-main-title">
            <h2>公告与活动</h2>
            <p>{{sellerList.bulletin}}</p>
          </div>
          <ul class="seller-sourlist">
            <li class="seller-sourmain" v-if="sellerList.supports" v-for="(support,index) in sellerList.supports" :key="index">
              <span class="seller-tu" :class="'sellertype'+ support.type"></span>
              <p>{{support.description}}</p>
            </li>
          </ul>
        </div>
        <div class="seller-bottom">
          <div class="seller-pic">
            <h2>商家实景</h2>
            <div class="seller-picshow">
              <el-carousel :interval="4000" type="card" height="90px">
                <el-carousel-item v-for="(item,index) in sellerList.pics" :key="index">
                  <img :src="item">
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <div class="seller-info">
            <h2>商家信息</h2>
            <ul>
              <li v-for="(info,index) in sellerList.infos" :key="index">
                <p>{{info}}</p>
              </li>
            </ul>
          </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'

    export default {
        name: "seller",
        data(){
          return {
            sellerList: {},
            value5: 4
          }
        },
        created(){
          axios.get('/page/seller')
            .then((res) => {
              this.sellerList = res.data.data
              console.log(this.sellerList)
            })
        }
    }
</script>

<style scoped lang="less" ref="stylesheet/less">
  @import url("//unpkg.com/element-ui@2.4.1/lib/theme-chalk/index.css");
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }


  .seller{
    width: 100%;
    background-color: #f3f5f7;
    .seller-top{
      width: 100%;
      padding: 0 18px;
      box-sizing: border-box;
      background-color: #fff;
      margin-bottom: 20px;
      .seller-title{
        padding: 18px 0;
        box-sizing: border-box;
        text-align: left;
        h2{
          font-size: 14px;
          color: rgb(7,17,27);
          line-height: 14px;
          margin-bottom: 8px;
        }
        p{
          width: 100%;
          .ping{
            display: inline-block;
          }
          span{
            font-size: 10px;
            color: rgb(77,85,93);
            line-height: 18px;
            margin-left: 12px;
          }
        }
      }
      .seller-mon{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-top: 1px solid rgba(7,17,27,0.1);
        div{
          margin: 18px;
          text-align: center;
          font-size: 24px;
          font-weight: 200;
          color: rgb(7,17,27);
          line-height: 24px;
          box-sizing: border-box;
          span:nth-of-type(1){
            display: block;
            font-size: 10px;
            color: rgb(147,153,159);
            line-height: 10px;
            margin-bottom: 4px;
          }
          span:nth-of-type(2){
            font-size: 10px;
            font-weight: 200;
            color: rgb(7,17,27);
            line-height: 24px;
          }
        }
      }
    }
    .seller-main{
      width: 100%;
      background-color: #fff;
      .seller-main-title{
        text-align: left;
        padding: 18px 18px 16px 18px;
        box-sizing: border-box;
        h2{
          font-size: 14px;
          color: rgb(7,17,27);
          line-height: 14px;
          margin-bottom: 8px;
        }
        p{
          padding: 0 12px;
          box-sizing: border-box;
          color: rgb(240,20,20);
          font-size: 12px;
          font-weight: 200;
          line-height: 24px;
        }
      }
      .seller-sourlist{
        text-align: left;
        padding: 0 18px;
        box-sizing: border-box;
        .seller-sourmain{
          padding: 16px 12px;
          box-sizing: border-box;
          display: flex;
          border-top: 1px solid rgba(7,17,27,0.1);
          span{
            display: inline-block;
            width: 16px;
            height: 16px;
            background-size: cover;
            margin-right: 6px;
            &.sellertype0{
              background-image: url("../img/decrease_3@2x.png");
            }
            &.sellertype1{
              background-image: url("../img/discount_3@2x.png");
            }
            &.sellertype2{
              background-image: url("../img/special_3@2x.png");
            }
            &.sellertype3{
              background-image: url("../img/invoice_3@2x.png");
            }
            &.sellertype4{
              background-image: url("../img/guarantee_3@2x.png");
            }
          }
          p{
            font-size: 12px;
            font-weight: 200;
            color: rgb(7,17,27);
            line-height: 16px;
          }
        }
      }
    }
    .seller-bottom{
      width: 100%;
      text-align: left;
      margin-top: 20px;
      /*background-color: #fff;*/
      box-sizing: border-box;
      .seller-pic{
        width: 100%;
        background-color: #fff;
        padding: 18px;
        box-sizing: border-box;
        h2{
          font-size: 14px;
          color: rgb(7,17,27);
          line-height: 14px;
          margin-bottom: 8px;
        }
        .seller-picshow{
          width: 100%;
          height: 90px;
          &::after{
            display: block;
            content: '';
            clear: both;
          }
        }
      }
      .seller-info{
        width: 100%;
        margin-top: 20px;
        background-color: #fff;
        padding: 18px;
        box-sizing: border-box;
        h2{
          font-size: 14px;
          color: rgb(7,17,27);
          line-height: 14px;
          margin-bottom: 8px;
        }
        ul{
          width: 100%;
          li{
            width: 100%;
            padding: 16px 12px;
            box-sizing: border-box;
            border-top: 1px solid rgba(7,17,27,0.1);
            p{
              font-size: 12px;
              font-weight: 200;
              color: rgb(7,17,27);
              line-height: 16px;
            }
          }
        }
      }
    }
  }

</style>
