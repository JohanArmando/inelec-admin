<template>
  <div class='simple-page animated fadeIn'>
    <div id='back-to-home'>
      <a class='btn btn-primary' href='/'>
        <i class='fa fa-arrow-left'></i>
      </a>
    </div>
    <div class='simple-page-wrap'>
      <div class='simple-page-logo'>
        <a href='/'>
          <img class="img-responsive" style="width: 50%; margin-left: 25%;" src="../../assets/logo/logo.png" alt="Logo" />
        </a>
      </div>
      <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp"
      :duration="{ enter: 1500, leave: 300 }">>
      <div v-if="error" class="alert alert-danger">
        <button type="button" class="close" v-on:click="error=false">
          <span aria-hidden="true">&times;</span>
        </button>
        {{ message }}
      </div>
      </transition>

      <div v-bind:class="[!error ? '' : 'animated shake']"  class='simple-page-form'  id='login-form'>
        <!-- %h4.form-title.m-b-xl.text-center Plataforma Administradora Inelec -->
        <form class="" v-on:submit.prevent="onSubmit">
          <div class="form-group" v-bind:class="{ 'has-error': error }">
            <input v-model="user.email" type="email" class="form-control"id='sign-in-email' placeholder='Email Coorporativo' required="">
          </div>
          <div class="form-group" v-bind:class="{ 'has-error': error }">
            <input v-model="user.password" class="form-control" id='sign-in-password' placeholder='Password' type='password' required="">
          </div>
          <div class='form-group m-b-xl'>
            <div class='checkbox checkbox-primary'>
              <input id='keep_me_logged_in' type='checkbox'>
              <label for='keep_me_logged_in'>Mantenerme conectado</label>
            </div>
          </div>
          <button class="btn btn-primary" v-bind:class="{ 'disabled': loading }" id="btn-login" type="submit" name="button">
            <i v-show="loading" class="fa fa-spin fa-spinner"></i>Ingresar
          </button>
        </form>
      </div>

      <div class='simple-page-footer'>
        <p>
          <router-link :to="{ name: 'Recovery' }">Recupera tu cuenta ?</router-link>
        </p>
        <p></p>
      </div>
    </div>
  </div>

</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      loading: false,
      error: false,
      message: ''
    }
  },
  methods: {
    onSubmit: function () {
      this.error = false
      this.loading = true
      this.login(this.user).then(user => {
        this.loading = false
        this.$router.replace(this.$route.query.redirect || '/admin')
      })
      .catch(error => {
        console.log(error.response)
        if (error.response === undefined || error.response === null) {
          this.message = 'Error en la plataforma, por favor intente mas tarde'
        } else {
          this.message = error.response.data.message
        }
        this.loading = false
        this.error = true
      })
    },
    ...mapActions([
      'login'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
