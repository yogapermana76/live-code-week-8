<template>
  <div v-if="isLogin" class="jumbotron">
    <div class="row justify-content-center text-center">
      <div class="col-6">
        <div>
          <h2>Add Astronomy Picture</h2>
          <p>
            Please input date</em>, etc.
          </p>
          <form @submit.prevent="addApod" class="input-group">
            <datepicker v-model="date"></datepicker>
            <div class="input-group-append">
              <button class="btn btn-sm btn-primary" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Datepicker from 'vuejs-datepicker';

export default {
  name: 'Jumbotron',
  data() {
    return {
      date: ''
    }
  },
  components: {
    Datepicker
  },
  computed: {
    ...mapState([
      'isLogin'
    ])
  },
  methods: {
    ...mapActions([
      'addApodAction'
    ]),
    addApod() {
      this.addApodAction({
        date: this.date.toISOString().slice(0, 10)
      })
    }
  },
}
</script>