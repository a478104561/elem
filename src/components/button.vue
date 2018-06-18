<template>
    <div class="button">
      <span class="icon-remove_circle_outline button-left" @click="pull" v-show="btn.count > 0"></span><span class="button-text" v-show="btn.count > 0">{{btn.count}}</span><span class="icon-add_circle button-right" @click="add"></span>
    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
      name: "button",
      props: {
        btn: {
          type: Object
        }
      },
      data(){
        return {

        }
      },
      methods: {
        pull(e){
          e.preventDefault();
          if(this.count === 0){
            return
          }
            this.btn.count --
        },
        add(e){
          e.preventDefault();
          if(e._constructed){
              if(!this.btn.count){
                Vue.set(this.btn, 'count')
                this.btn.count = 1
              }else{
                this.btn.count ++
              }
            }
          }
        }

    }
</script>

<style scoped lang="less" ref="stylesheet/less">
  @import '../../static/style.css';
  .qw-enter{
    transform: translateX(-100%);
  }
  .qw-enter-to{
    transform: translateX(0px);
  }
  .qw-enter-active{
    transition: all 1s;
  }
  .button{
    width: 100%;
    .button-left{
      font-size: 24px;
      color: rgb(0,160,220);
      line-height: 24px;
    }
    .button-right{
      font-size: 24px;
      color: rgb(0,160,220);
      line-height: 24px;
    }
    .button-text{
      display: inline-block;
      width: 24px;
      height: 24px;
      font-size: 10px;
      color: rgb(147,153,159);
      line-height: 24px;
      vertical-align: top;
    }
  }

</style>
