<template lang="html">
  <div class="wrap">
    <div class="app-content">
      <div class="row">
        <div class="col-md-2">
          <div class="app-action-panel" id="contact-action-panel">
            <div class="m-b-lg">
              <button type="button" name="button" class="btn btn-default">
                <i class="fa fa-plus-circle"></i>
                Agregar Contacto
              </button>
            </div>

          </div>
        </div>
        <div class="container row col-md-10 panel panel-default panel-body panel-content">
          <div class="container row">
            <div class="col-md-12">
              <div class="btn-group" role="group">
                <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Filtar contactos <span class="caret"></span></button>
                <ul class="dropdown-menu">
                    <li><a href="#">A-Z</a></li>
                </ul>
              </div>
              <div class="btn-group">
                <div class="col-lg-12 col-md-4">

                </div>
              </div>
              <div class="row" id="contacts-list">
                <div class="col-lg-4">
                  <div class="user-card contact-item p-md">
                      <div class="media">
                          <div class="media-left">
                              <div class="avatar avatar-xl avatar-circle">
                                <i class="fa fa-user-circle fa-5x"></i>
                              </div>
                          </div>
                          <div class="media-body">
                              <h5 class="media-heading title-color">Nombre Empresa</h5>
                              <small class="media-meta">Cargo en la empresa</small>
                              <i class=""></i>
                          </div>

                      </div>
                      <div class="contact-item-actions">
                        <a href="javascript:void(0)" class="btn btn-success" data-toggle="modal" data-target="#contactModal">
                            <i class="fa fa-pencil"></i>
                        </a>
                        <a href="javascript:void(0)" class="btn btn-danger" data-toggle="modal" data-target="#deleteItemModal">
                            <i class="fa fa-trash"></i>
                        </a>
                      </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="user-card contact-item p-md">
                    <div class="media media-left">
                      <i class="fa fa-user-circle fa-5x"></i>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
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
