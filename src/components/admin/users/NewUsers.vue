<template lang="html">
  <div class="wrap">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="widget">
            <div class="widget-header">
              <h4 class="widget-title">Nombre del Usuario</h4>
            </div>
            <hr class="widget-separator">
            <div class="widget-body clearfix text-center">
              <div class="big-icon">
                <i class="fa fa-user-circle fa-5x watermark"></i>
              </div>
              <div class="widget-footer">
                <a href="#" class="btn btn-primary">Cargar imagen</a>
              </div>
            </div>
          </div>
          <div class="widget">
            <div class="widget-header">
              <h4 class="widget-title">
                <i class="fa fa-unlock"></i>
                 Rol y Permisos
              </h4>
            </div>
            <hr class="widget-separator">
            <div class="widget-body clearfix">
              <p class="text-center text-danger">
                Debe asignar un rol y permiso adecuado el usuario
              </p>
              <form role="form" class="" action="#" method="post">
                <div class="form-group">
                  <select class="form-control" name="">
                    <option value="0" selected>Selecciona el Rol</option>
                    <option value="1">Administrador</option>
                    <option value="2">Vendedor</option>
                    <option value="3">Tecnico</option>
                    <option value="4">Cliente</option>
                  </select>
                </div>
                <div class="form-group">
                  <select class="form-control" name="">
                    <option value="0" selected>Selecciones Nivel</option>
                    <option value="1">Total - Administrador</option>
                    <option value="2">Cliente</option>
                    <option value="3">Vendedor</option>
                    <option value="4">Tecnico</option>
                  </select>
                </div>
                <div class="form-group text-center">
                  <button type="submit" name="button" class="btn btn-primary btn-xs"><i class="fa fa-lock"></i> Asignar Permisos</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-9">
    <div class="widget">
        <header class="widget-header">
            <h4 class="widget-title">Informacion Adicional de Usuario</h4></header>
        <hr class="widget-separator">
        <div class="widget-body">
            <form>
                <div class="m-b-lg"><small></small></div>
                <div class="form-group col-sm-6">
                  <label for="exampleSelectID">Tipo de Documento</label>
                  <select class="form-control" name="">
                    <option value="1">C.C</option>
                    <option value="2">T.I</option>
                    <option value="3">T.E</option>
                  </select>
                </div>
                <div class="form-group col-sm-6">
                  <label for="exampleNumberID">Numero de indentificacion</label>
                  <input type="text" name="" value="" class="form-control">
                </div>
                <div class="form-group col-sm-6">
                    <label for="exampleInputEmail1">Nombre</label>
                    <input id="exampleInputEmail1" type="text" class="form-control">
                </div>
                <div class="form-group col-sm-6">
                    <label for="exampleInputPassword1">Apellido</label>
                    <input id="exampleInputPassword1" type="text" class="form-control">
                </div>
                <div class="form-group col-sm-12">
                    <label for="exampleInputFile">Email</label>
                    <input id="exampleInputFile" type="email" class="form-control">
                </div>
                <div class="form-group col-sm-6">
                    <label for="">Contraseña</label>
                    <input type="password" class="form-control">
                </div>
                <div class="form-group col-sm-6">
                    <label for="">Repetir Contraseñe</label>
                    <input type="password" class="form-control">
                </div>
                <div class="form-group col-sm-12">
                  <label for="">Informacion Adicional</label>
                  <textarea class="form-control" name="name" rows="8" cols="80" placeholder="Agregar informacion Adicional al usuario"></textarea>
                </div>

                <div class="form-group col-sm-10 text-right">
                    <button type="submit" class="btn btn-success"><i class="fa fa-check"></i> Registro
                    </button>
                </div>
                <button type="reset" class="btn btn-danger"><i class="fa fa-times"></i> Cancelar
                </button>
            </form>
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
