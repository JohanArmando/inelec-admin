<template lang="html">
  <div class="promo">
    <div class="">
      <div class="row no-gutter">
        <div class="col-md-12">
          <div class="widget">

              <div class="wrap">
                <section class="app-content">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-4 pull-right">
                        <form class="" action="#" method="post">
                          <div class="form-group">
                            <label for="">
                              Buscar Usuario
                              <i class="fa fa-search"></i>
                            </label>
                            <input type="text" name="" value="" class="form-control" placeholder="Nombre del usurio">
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class= "container">
                    <div class="row">
                      <div class="col-md-3 ">
                        <div class="widget">
                          <div class="widget-header">
                            <h4 class="widget-title">Inelec SAS</h4>
                          </div>
                          <hr class="widget-separator">
                          <div class="widget-body clearfix text-center">
                            <div class="big-icon m-b-md watermark">
                              <i class="fa fa-5x dribbble fa-user-circle"></i>
                            </div>
                            <h4 class="m-b-md">Usuario.nombre</h4>
                            <p class="text-muted m-b-lg">
                              Identificacion:
                              Permisos:
                              Rol:
                            </p>
                            <!--<a href="#" class="btn p-v-xl btn-primary btn-xs">Detalles</a>-->
                            <a href="#" class="btn p-v-xl btn-danger btn-xs" data-toggle="modal" data-target="#myModal">
                              Desactivar
                              <i class="fa fa-times-circle"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <pagination-list></pagination-list>
                  </div>
                </section>
                <modal-delete-confirmation></modal-delete-confirmation>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PaginationList from '@/components/admin/partials/PaginationList'
import ModalDeleteConfirmation from '@/components/admin/partials/ModalDeleteConfirmation'
export default {
  components: {
    PaginationList,
    ModalDeleteConfirmation
  }
}
</script>

<style lang="css">

</style>
