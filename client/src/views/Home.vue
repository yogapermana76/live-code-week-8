<template>
  <div class="home">
    <div class="container my-4">
      <div class="row justify-content-center">
        <div class="col-4">

          <!-- login -->
          <login></login>
          <!-- end of login -->

        </div>
      </div>

      <!-- jumbotron -->
      <AddApodForm />
      <!-- jumbotron -->

      <hr v-if="isLogin">

      <div v-if="isLogin" class="row">
        <div class="col-6">

          <!-- search -->
          <SearchBar />
          <!-- search -->

          <!-- card-apod -->
          <ApodItem />
          <!-- end of card-apod -->

        </div>

        <div class="col-6">

          <!-- apod-detail -->
          <ApodDetail />
          <!-- end of apod-detail -->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import AddApodForm from '@/components/AddApodForm.vue'
import ApodItem from '@/components/ApodItem.vue'
import ApodDetail from '@/components/ApodDetail.vue'
import SearchBar from '@/components/SearchBar.vue'
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    Login,
    AddApodForm,
    ApodDetail,
    ApodItem,
    SearchBar
  },
  computed: {
    ...mapState([
      'isLogin'
    ])
  },
}
</script>
