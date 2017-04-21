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
          <a class='text-danger' data-toggle="modal" data-target="#modalConfirmationDeleteClient">Eliminar</a>
        </p>
      </div>
    </div>
    <div id="modalConfirmationDeleteClient" class="modal fade" tabindex="-1" role="dialog" aira-labelledby="gridSystemModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="panel panel-danger">
            <div class="panel-heading">
              <h4 class="panel-title"> ¿ Desactivar este Cliente ?</h4>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <p class="text-center"> ¿ Realmente Desactivarias este cliente ? </p>
                <br>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" name="button" class="btn btn-danger" data-dismiss="modal"><i class="fa fa-check"></i>  Si</button>
            <button type="button" name="button" class="btn btn-default"><i class="fa fa-times-circle"></i> No</button>
          </div>
        </div>
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
