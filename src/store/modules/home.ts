import { CATEGORY_TYPES, IHomeState } from "./../../typing/home";
import { Module } from "vuex";
import { IGlobalState } from "../index";


const state: IHomeState = {
  currentCategory: CATEGORY_TYPES.ALL,
  sliders: [],
  lessons: {
    hasMore: true, //有没有更多数据
    loading: false, //默认没有正在加载
    offset: 0,
    limit: 5,
    list: [], //当前已经显示到页面的课程有哪些
  },

  
};

// Module里的参数  第一个参数是自己本页的状态   第二个参数是项目的全部状态
const home: Module<IHomeState, IGlobalState> = {
  namespaced: true,
  state,
  // 修改分类
  mutations: {
    

    
  }
};

export default home;
