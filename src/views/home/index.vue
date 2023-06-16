<template>
  <div class="home">
    {{ category }}
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
import { useStore } from "vuex";
import { IGlobalState } from "@/store";

export default defineComponent({
  components: {
    HomeHeader,
    HomeSwiper,
    HomeList,
  },
  setup() {
    let store = useStore<IGlobalState>();
    let category = computed(() => {
      return store.state.home.currentCategory;
    });
    return {
      category,
    };
  },
});
</script>
