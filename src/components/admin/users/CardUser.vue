<template lang="html">
  <div class="widget">
    <header class="widget-header"><h4 class="widget-title">{{ user.name }} {{ user.last_name }}</h4></header>
    <hr class="widget-separator">
    <div class="widget-body clearfix text-center">
      <div class="big-icon m-b-md watermark">
        <img v-if="!user.avatar_url" src='../../../assets/logo/user.png' class="img-circle img-responsive center-block user-image" alt="">
        <img v-else :src="user.avatar_url" alt="" class="img-circle img-responsive center-block user-image">
      </div>
      <!-- <h4 class="m-b-md">Usuario.nombre</h4> -->
      <a href="#">{{ user.name }} {{ user.last_name }}</a>
      <p class="text-muted m-b-lg">
        Identificacion:<br>
        Permisos:<br>
        Rol: {{ user.roles[0].name }}
      </p>
      <!--<a href="#" class="btn p-v-xl btn-primary btn-xs">Detalles</a>-->
      <button class="btn btn-danger btn-xs">
        Desactivar
        <i class="fa fa-times-circle"></i>
      </button>
      <router-link class="btn  btn-success btn-xs" :to="'/admin/users/'+user.id">Ver usuario <i class="fa fa-times-circle"></i></router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['user'],
  methods: {
    ...mapActions([
      'deleteUser'
    ])
  }
}
</script>

<style lang="css">
  .user-image{
    padding-left: 30%;
    padding-right: 30%;
  }
</style>
