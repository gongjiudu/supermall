<template>
  <tab-bar>
    <!--   这里本来应该写替换插槽位置的东西，就是item的几个div，
    再次使用插槽，替换每个item里的具体内容,具名插槽-->
    <!--      path是父传子，子组件中定义的接受的名称，因为后面的内容是写死的，不是变量，所以不需要":"-->
    <!--      活跃颜色自定义-->
    <tab-bar-item path="/home" activeColor="deeppink">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg"/>
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg"/>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="deeppink">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg"/>
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg"/>
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="deeppink">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg"/>
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg"/>
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="deeppink">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg"/>
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg"/>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/tabbar/TabBar'
  import TabBarItem from 'components/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
