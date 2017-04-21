<template lang="html">
  <div class='wrap'>
    <div class='container'></div>
    <div class='row'>
      <div class='col-md-3'>
        <div class='widget'>
          <header class='widget-header'>
            <h4 class='widget-title'>Perfil Cliente</h4>
          </header>
          <hr class='widget-separator'>
          <div class='widget-body text-center'>
            <div class='big-icon m-b-md watermark'>
              <i class='fa fa-5x fa-user-circle'></i>
            </div>
            <h4 class='m-b-md'>Nombre del Cliente</h4>
            <p>Cargo:</p>
            <a class='btn p-v-xl btn-primary' href='#'>Agregar Imagen de Perfil</a>
          </div>
        </div>
      </div>
      <div class='col-md-9'>
        <div class='widget'>
          <header class='widget-header'>
            <h4 class='widget-title'>Informacion Adicional de Cliente </h4>
          </header>
          <hr class='widget-separator'>
          <div class='widget-body'>
            <form>
              <div class='m-b-lg'>
                <small>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</small>
              </div>
              <div class='form-group col-sm-6'>
                <label for='exampleInputEmail1'>Nombre</label>
                <input class='form-control' id='exampleInputEmail1' type='text'>
              </div>
              <div class='form-group col-sm-6'>
                <label for='exampleInputPassword1'>Apellido</label>
                <input class='form-control' id='exampleInputPassword1' type='text'>
              </div>
              <div class='form-group col-sm-12'>
                <label for='exampleInputFile'>Email</label>
                <input class='form-control' id='exampleInputFile' type='email'>
              </div>
              <div class='form-group col-sm-6'>
                <label for=''>Contraseña</label>
                <input class='form-control' type='password'>
              </div>
              <div class='form-group col-sm-6'>
                <label for=''>Repetir Contraseñe</label>
                <input class='form-control' type='password'>
              </div>
              <div class='form-group col-sm-6'>
                <label for=''>
                  Rol
                  <span>
                    <i class='fa fa-info-circle'></i>
                  </span>
                </label>
                <select class='form-control'>
                  <option>Administrador</option>
                  <option>Vendedor</option>
                  <option>Tecnico</option>
                  <option>Cliente</option>
                  <option>Secretaria</option>
                </select>
              </div>
              <div class='form-group col-sm-6'>
                <label for=''>Area de Trabajo</label>
                <select class='form-control'>
                  <option>Inelec SAS</option>
                  <option>Agente Externo</option>
                </select>
              </div>
              <div class='form-group col-sm-10 text-right'>
                <button class='btn btn-success' type='submit'>
                  <i class='fa fa-check'></i>
                  Registro
                </button>
              </div>
              <button class='btn btn-danger' type='reset'>
                <i class='fa fa-times'></i>
                Cancelar
              </button>
            </form>
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
