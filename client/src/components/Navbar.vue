<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="/"><a class="navbar-brand" href="/">From NASA with love</a></router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/"><a class="nav-link" href="#">Home</a></router-link>
          </li>
        </ul>
      </div>

      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
          <!--<li class="nav-item">-->
          <!--<a class="nav-link" href="/login">Login</a>-->
          <!--</li>-->
          <!--<li class="nav-item">-->
          <!--<a class="nav-link" href="/register">Register</a>-->
          <!--</li>-->
          <li class="nav-item">
            <a href="#" class="nav-link" v-if="isLogin" @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Navbar',
  computed: {
    ...mapState([
      'isLogin'
    ])
  },
  methods: {
    logout() {
      this.$store.commit('successLogout')
      localStorage.clear()
    }
  },
}
</script>

<style>

</style>