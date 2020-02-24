<template>
<!--  每一个抽取出来的组件，题目和src不应该固定，
  相同的结构，不同的内容，同样需要使用插槽-->
<!--  监听点击-->
  <div class="tab-bar-item" @click="itemClick">
    <!--      图标点击之后应该显示活跃状态，两个状态切换需要不同的图片，由外部传入两张图片，内部确定显示哪张图片-->
    <div v-if="!isActive">
      <slot  name="item-icon"></slot>
    </div>
    <div v-else >
      <slot name="item-icon-active"></slot>
    </div>
<!--    文字内容也需要同时改变,这个avtive的class不能放在slot里，会被替换掉-->
    <div :style="activeStyle">
      <slot  name="item-text"></slot>
    </div>

  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
      //传递点击之后要跳转到哪里去的数据,指定为字符串形式
      //父传子，这里是子组件，和父组件传递来的东西对应起来
      props:{
          path:String,
          activeColor: {
            type:String,
            default:'red'
        }
      },
      data(){
          return{

          }
      },
      computed:{
        isActive(){
          //判断当前活跃的路由的路径和哪个路由相同，相同则为true，否则为false
          // /home->item(/home) = true
          // /home->item(/category) = false
          //indexOf找不到则为-1,当他不等于-1的时候就是找到了，则这个item颜色改变
          //这四个item渲染的时候会依次分别渲染，这个时候的this.path会依次改变，
          //当他和当前活跃的一样的时候，就显示红色
          // console.log(this.$route.path);
          // console.log(this.path);
          return this.$route.path.indexOf(this.path) !== -1

        },
        activeStyle(){
          return this.isActive ? {color:this.activeColor}:{}
        }
      },
      methods:{
          //这里的函数代替了路由里的router-link
          itemClick(){
            this.$router.replace(this.path);

          }
      }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex:1;
    text-align:center;
    height:49px;
    font-size:14px;
  }
  .tab-bar-item img{
    width:24px;
    height:24px;
    margin-top:3px;
    vertical-align:middle ;
  }
</style>
