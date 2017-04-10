<template lang="html">
  <div class='simple-page animated fadeIn'>
  <div id='back-to-home'>
    <a class='btn btn-primary' href='javascript:history.back()'>
      <i class='fa fa-arrow-left'></i>
    </a>
  </div>
  <div class='simple-page-wrap'>
    <div class='simple-page-logo'>
      <img class="img-responsive" style="width: 50%; margin-left: 25%;"  src="../../assets/logo/logo.png" alt="Logo" />
    </div>
    <div class='simple-page-form animated fadeIn' id='reset-password-form'>
      <h4 class='form-title m-b-xl text-center'>Olvide mi  Contraseña ?</h4>
      <form action='#'>
        <div class='form-group'>
          <input class='form-control' id='reset-password-email' placeholder='Email coorporativo' type='email'>
        </div>
        <input class='btn btn-primary' type='submit' value='Restablecer Contraseña'>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
