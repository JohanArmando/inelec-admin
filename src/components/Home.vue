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
      <div class='simple-page-form animated fadeIn' id='login-form'>
        <!-- %h4.form-title.m-b-xl.text-center Plataforma Administradora Inelec -->
        <h2>is login</h2>
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
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
