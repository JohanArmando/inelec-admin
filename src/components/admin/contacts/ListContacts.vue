<template lang="html">
  <div class="wrap">
    <div class="app-content">
      <div class="row">
        <div class="col-md-2">
          <div class="app-action-panel" id="contact-action-panel">
            <div class="m-b-lg">
              <button type="button" name="button" class="btn btn-default" data-toggle="modal" data-target="#modalContact">
                <i class="fa fa-plus-circle"></i>
                Agregar Contacto
              </button>
            </div>

          </div>
        </div>
        <div class="col-md-10">
          <div class="row">
              <div class="col-md-12">
                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="fa fa-filter"></i> Ordenar <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a href="#">A-Z <i class="fa fa-arrow-up"></i> </a></li>
                        <li><a href="#">Z-A <i class="fa fa-arrow-down"></i></a></li>
                    </ul>
                </div>
              </div>
            <div id="contacts-list" class="row">
              <div class="col-sm-6">
                <div class="user-card contact-item p-md">
                    <div class="media">
                        <div class="media-left">
                            <div class="avatar avatar-xl avatar-circle">
                              <i class="fa fa-user-circle fa-4x"></i>
                            </div>
                        </div>
                        <div class="media-body">
                            <h5 class="media-heading title-color">nombre contacto</h5>
                            <small class="media-meta">cargo</small>
                            <div class="contact-links m-t-sm">
                              <i class="fa fa-phone"></i> (+57) 1234-5678
                              &nbsp;
                              <i class="fa fa-envelope"></i> email@email.co
                            </div>
                        </div>
                        <div class="contact-item-actions">
                          <button type="button" name="button" class="btn btn-default" data-toggle="modal" data-target="#modalContact"><i class="fa fa-edit"></i></button>
                          <button type="button" name="button" class="btn btn-danger" data-toggle="modal" data-target="#modalDeleteContact"><i class="fa fa-trash-o"></i></button>
                        </div>
                    </div>

                </div>
              </div>
              <div class="col-sm-6">
                <div class="user-card contact-item p-md">
                    <div class="media">
                        <div class="media-left">
                            <div class="avatar avatar-xl avatar-circle">
                              <i class="fa fa-user-circle fa-4x"></i>
                            </div>
                        </div>
                        <div class="media-body">
                            <h5 class="media-heading title-color">nombre contacto</h5>
                            <small class="media-meta">cargo</small>
                            <div class="contact-links m-t-sm">
                              <i class="fa fa-phone"></i> (+57) 1234-5678
                              &nbsp;
                              <i class="fa fa-envelope"></i> email@email.co
                            </div>
                        </div>
                    </div>

                </div>
              </div>
            </div>
            <div id="contacts-list" class="row">
              <div class="col-sm-6">
                <div class="user-card contact-item p-md">
                    <div class="media">
                        <div class="media-left">
                            <div class="avatar avatar-xl avatar-circle">
                              <i class="fa fa-user-circle fa-4x"></i>
                            </div>
                        </div>
                        <div class="media-body">
                            <h5 class="media-heading title-color">nombre contacto</h5>
                            <small class="media-meta">cargo</small>
                            <div class="contact-links m-t-sm">
                              <i class="fa fa-phone"></i> (+57) 1234-5678
                              &nbsp;
                              <i class="fa fa-envelope"></i> email@email.co
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="user-card contact-item p-md">
                    <div class="media">
                        <div class="media-left">
                            <div class="avatar avatar-xl avatar-circle">
                              <i class="fa fa-user-circle fa-4x"></i>
                            </div>
                        </div>
                        <div class="media-body">
                            <h5 class="media-heading title-color">nombre contacto</h5>
                            <small class="media-meta">cargo</small>
                            <div class="contact-links m-t-sm">
                              <i class="fa fa-phone"></i> (+57) 1234-5678
                              &nbsp;
                              <i class="fa fa-envelope"></i> email@email.co
                            </div>
                        </div>
                    </div>

                </div>
              </div>
            </div>
            <div id="contacts-list" class="row">
              <div class="col-sm-6">
                <div class="user-card contact-item p-md">
                  <div class="media">
                    <div class="media-left">
                      <div class="avatar avatar-xl avatar-circle">
                        <i class="fa fa-user-circle fa-4x"></i>
                      </div>
                    </div>
                    <div class="media-body">
                      <h5 class="media-heading title-color">nombre contacto</h5>
                      <small class="media-meta">cargo</small>
                      <div class="contact-links m-t-sm">
                        <i class="fa fa-phone"></i>
                        <i class="fa fa-envelope"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="user-card contact-item p-md">
                  <div class="media">
                    <div class="media-left">
                      <div class="avatar avatar-xl avatar-circle">
                        <i class="fa fa-user-circle fa-4x"></i>
                      </div>
                    </div>
                    <div class="media-body">
                      <h5 class="media-heading title-color">nombre contacto</h5>
                      <small class="media-meta">Cargo</small>
                      <div class="contact-link m-t-sm">
                        <i class="fa fa-phone"></i>
                        <i class="fa fa-envelope"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <pagination-list></pagination-list>
          </div>

          <!-- modal add contact -->
          <div id="modalContact" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 class="modal-title" id="gridSystemModalLabel">
                    <i class="fa fa-user-circle"></i>
                    Agregar Nuevo Contacto
                  </h4>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <form action="#" method="post" role="form">

                    </form>

                  </div>

                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                  <button type="button" class="btn btn-success">Guardar</button>
                </div>
              </div>
            </div>
          </div>
          <!-- Fin -->

          <!-- modal delete contact -->
          <div id="modalDeleteContact" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
            <div class="modal-dialog modal-sm" role="document">
              <div class="modal-content">
                <div class="panel panel-danger">
                  <div class="panel-heading">
                    <h5 class="panel-title">CRM Inelec S.A.S</h5>
                  </div>
                </div>
                <div class="modal-body">
                  <p class="text-center" style="font-size: 16px;"> ¿Deseas Eliminar realmente este contacto de la base de Datos? </p>
                </div>
                <div class="modal-footer">
                  <button type="button" name="button" class="btn btn-default btn-xs"><i class="fa fa-check"></i> Si</button>
                  <button type="button" name="button" class="btn btn-danger btn-xs" data-dismiss="modal"><i class="fa fa-times-circle"></i> No</button>
                </div>
              </div>
            </div>
          </div>
          <!-- Fin -->





        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PaginationList from '@/components/admin/partials/PaginationList'
export default {
  components: {
    PaginationList
  }
}
</script>
<style lang="css">
</style>
