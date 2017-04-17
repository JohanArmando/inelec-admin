<template lang="html">
  <div class='user-card'>
    <div class='media'>
      <div class='media-left'>
        <div class='avatar avatar-lg avatar-circle'>
          <a href='#'>
            <img v-bind:src="client.avatar_url" class="img-responsive" alt="">
          </a>
        </div>
      </div>
      <div class='media-body'>
        <h5 class='media-heading'>
          <a class='title-color' href='#'>{{ client.name }} {{ client.last_name }}</a>
        </h5>
        <p>Correo: {{ client.email }}</p>
        <p>
          <router-link :to="'/admin/clients/'+client.id">Ver cliente</router-link>
          <a class='text-danger' href='#'>Eliminar</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['client']
}
</script>

<style lang="css">
  .user-card{
    margin-top: 15px;
    margin-left: 15px;
    margin-right: 15px;
  }
</style>
