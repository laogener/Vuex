<template>
    <div id="app">
      <h1>Hello Vuex</h1>
      <p>{{$store.state.count}} -{{ count }}</p>
      <p>{{$store.state.a.count}}</p>
      <p>
        <!--<button @click="$store.commit('jia',10)">+</button>-->
        <button @click="$store.commit('jia',{a:10})">+</button>
        <button @click="$store.commit('jian',{a:10})">-</button>
      </p>
      <p>
        <button @click="jiaplus">+plus</button>
        <button @click="jianplus">-plus</button>
      </p>
    </div>
</template>

<script>
  import { mapState,mapMutations,mapGetters,mapActions } from 'vuex'
    export default {
        name: "vuex",
      // computed:{
      //     count(){
      //       return this.$store.state.count+1
      //     }
      // },
      // computed:mapState({
      //   count:state=>state.count+1
      // }),
      computed:mapState([
        'count'
      ]),
      // computed:{
      //   ...mapState([
      //     'count'
      //   ]),
      //   // count(){
      //   //   return this.$store.getters.count
      //   // }
      //   ...mapGetters([
      //     'count'
      //   ])
      // },
      // computed:{
      //   ...mapState([
      //     'count'
      //   ]),
      //
      // },
      // methods:mapMutations([
      //   'jia',
      //   'jian'
      // ])
      methods:{
        ...mapMutations([
          'jia',
            'jian'
         ]),
        ...mapActions([
          'jiaplus',
        ]),
        ...mapActions({
          jianplus:'jianplus'
        }),
      }
    }
</script>

<style scoped>

</style>
