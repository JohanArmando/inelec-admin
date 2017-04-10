<template>
  <div id="app">
    <loading-app v-if="loading"></loading-app>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import LoadingApp from '@/components/admin/partials/LoadingApp'
import { mapActions } from 'vuex'
export default {
  name: 'app',
  components: {
    LoadingApp
  },
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    if (localStorage.token) {
      this.session().then(user => {
        this.loading = false
        this.$router.replace(this.$route.path || '/admin/dashboard')
      })
      .catch(message => {
        this.loading = false
        this.$router.replace(this.$route.query.redirect || '/auth/login')
      })
    } else {
      this.loading = false
      this.$router.replace('/auth/login')
    }
  },
  methods: {
    ...mapActions([
      'session'
    ])
  }
}
</script>

<style lang="scss">
    @import 'src/assets/css/main';
</style>
