import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const  state = {
  count : 44
};
const mutations = {
  // jia(state,n){
  //   state.count+=n
  // },
  jia(state,n){
    state.count+=n.a
  },
  jian(state){
    state.count--
  }
};
const getters = {
  count:function (state) {
    // return state.count+=100
    return state.count+=0
  }
};
const actions = {
  jiaplus(context){
    context.commit('jia',{a:1});
    setTimeout(()=>{ context.commit('jian',{a:1})},3000);
    console.log('我先被执行了');
  },
  jianplus({commit}){
    commit('jian')
  }
};

// export default new Vuex.Store({
//   state,
//   mutations,
//   getters,
//   actions
// });
const moduleA = {
  state,
  mutations,
  getters,
  actions
};
export default new Vuex.Store({
  modules:{
    a:moduleA
  }
});
