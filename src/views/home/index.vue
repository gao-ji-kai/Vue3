<template>
  <div class="home">
    <!-- 首页头部 -->
    <HomeHeader></HomeHeader>

    <!-- 轮播图 -->
    <HomeSwiper></HomeSwiper>

    <!-- 课程列表 -->
    <HomeList></HomeList>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import HomeHeader from "./home-header.vue";
import HomeSwiper from "./home-swiper.vue";
import HomeList from "./home-list.vue";
import { Store, useStore } from "vuex";
import { IGlobalState } from "@/store";

function useCategory(store: Store<IGlobalState>) {
 let category= computed(() => store.state.home.currentCategory);//vuex 中的状态
}

export default defineComponent({
  components: {
    HomeHeader,
    HomeSwiper,
    HomeList,
  },
  setup() {
    //1.需要获取vuex中的分类状态 ,有个更改状态的功能
    let store = useStore<IGlobalState>();
    //使用这函数 可以返回两个参数  一个参数是当前的分类  另一个是可以设置当前份额里
    let { category, setCurrentCategory } = useCategory(store);
  },
});
</script>
