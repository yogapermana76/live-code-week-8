<template>
  <div id="app">
    <Navbar />
    
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import { mapState } from "vuex";

export default {
  components: {
    Navbar
  },
  created() {
    if(localStorage.getItem('token')) {
      this.$store.commit('successLogin')
    }
  },
  computed: {
    ...mapState([
      'isLogin'
    ])
  },
  methods: {
    
  }
}
</script>

<style>

</style>
