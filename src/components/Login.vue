<template>
  <div class='simple-page'>
    <div id='back-to-home'>
      <a class='btn btn-primary' href='/'>
        <i class='fa fa-arrow-left'></i>
      </a>
    </div>
    <div class='simple-page-wrap'>
      <div class='simple-page-logo'>
        <a href='/'>
          <img class="img-responsive" style="width: 50%; margin-left: 25%;" src="../assets/logo/logo.png" alt="Logo" />
        </a>
      </div>
      <div v-bind:class="[!error ? 'animated fadeIn' : 'animated shake']"  class='simple-page-form'  id='login-form'>
        <!-- %h4.form-title.m-b-xl.text-center Plataforma Administradora Inelec -->
        <form class="" v-on:submit.prevent="onSubmit">
          <div class="form-group" v-bind:class="{ 'has-error': error }">
            <input v-model="user.email" type="email" class="form-control"id='sign-in-email' placeholder='Email Coorporativo' required="">
            <p class="help-block" v-show="error" >Email o password invalidos</p>
          </div>
          <div class="form-group" v-bind:class="{ 'has-error': error }">
            <input v-model="user.password" class="form-control" id='sign-in-password' placeholder='Password' type='password' required="">
            <p class="help-block" v-show="error" >Email o password invalidos</p>
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
          <a href='/auth/recovery'>Recupera tu cuenta ?</a>
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
      error: false
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
      .catch(message => {
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
