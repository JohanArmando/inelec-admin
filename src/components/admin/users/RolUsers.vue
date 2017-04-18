<template lang="html">
  <div class="wrap">
    <div class="">
      <div class="row">
        <!-- <div class="col-md-3">
          <div class="widget">
            <div class="widget-header">
              <h4 class="widget-title">
                <i class="fa fa-lock"></i> Informacion rol Administrativos</h4>
            </div>
            <hr class="widget-separator">
            <div class="widget-body clearfix">
              <p class="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
          <div class="widget">
            <div class="widget-header">
              <h4 class="widget-title">
                <i class="fa fa-lock"></i> Informacion rol Vendedor</h4>
            </div>
            <hr class="widget-separator">
            <div class="widget-body clearfix">
              <p class="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
          <div class="widget">
            <div class="widget-header">
              <h4 class="widget-title">
                <i class="fa fa-lock"></i> Informacion rol Tecnico</h4>
            </div>
            <hr class="widget-separator">
            <div class="widget-body clearfix">
              <p class="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
          <div class="widget">
            <div class="widget-header">
              <h4 class="widget-title">
                <i class="fa fa-lock"></i> Informacion rol de Cliente</h4>
            </div>
            <hr class="widget-separator">
            <div class="widget-body clearfix">
              <p class="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
        </div> -->
        <div class="col-md-12">
          <div class="widget">
            <div class="widget-header">
              <h4 class="widget-title">
                <i class="fa fa-unlock-alt"></i> Inforacion para creacion de Rol</h4>
            </div>
            <hr class="widget-separator">
            <div class="widget-body clearfix">
              <form class="form" action="#" method="post">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="Name_rol">Nombre del Rol</label>
                      <input type="text" name="" value="" class="form-control">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="description-rol">Descripcion del Rol y / o Funciones del Rol</label>
                      <textarea name="name" rows="8" cols="80" class="form-control"></textarea>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <label for="permissions-rol">Permisos para el Rol</label>
                    <div class="table-responsive">
                      <table class="table table-hover table-striped" cellspacing="100">
                        <thead>
                          <tr>
                            <th width="30%">Rol</th>
                            <th>Nivel</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div class="col-lg-12 col-md-5">
                                <label for="">Nombre del Rol</label>
                                <select class="form-control" name="">
                                  <option value="0">Selecciona Rol</option>
                                  <option value="1">Gerente</option>
                                  <option value="2">Adminstrador Web</option>
                                  <option value="3">Cliente</option>
                                  <option value="4">Vendedor</option>
                                  <option value="5">Soporte</option>
                                  <option value="6">Contabilidad</option>
                                </select>
                              </div>
                            </td>
                            <td>
                              <div class="col-lg-6 col-md-6">
                                <label for="">Seccion de Trabajo</label>
                                <select class="form-control" name="">
                                  <option value="">Usuarios</option>
                                  <option value="">Clientes</option>
                                  <option value="">Presupuesto</option>
                                  <option value="">Correos</option>
                                  <option value="">Web</option>
                                  <option value="">Calendario</option>
                                  <option value="">Contactos</option>
                                </select>
                              </div>
                              <div class="col-lg-6 col-md-6">
                                <label for="">Permiso</label>
                                <select class="form-control" name="">
                                  <option value="">Ver</option>
                                  <option value="">Registrar</option>
                                  <option value="">Consultar</option>
                                  <option value="">Modificar</option>
                                  <option value="">Eliminar</option>
                                </select>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="clearfix"></div>
                      <br>
                      <div class="col-lg-12 col-md-12 text-center">
                        <button type="button" name="button" class="btn btn-default">
                          <i class="fa fa-plus"></i> Agregar Rol
                        </button>
                        <button type="button" name="button" class="btn btn-danger">
                          <i class="fa fa-times-circle"></i> Cancelar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <br>

              </form>
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
