<template lang="html">
  <div class="wrap">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 col-md-4">
          <div class="widget">
            <div class="widget-header">
              <h4 class="widget-title">Nombre del Usuario</h4>
            </div>
            <hr class="widget-separator">
            <div class="widget-body clearfix text-center">
                <div v-if="!user.avatar">
                  <img src='../../../assets/logo/user.png' class="img-circle img-responsive center-block user-image" alt="">
                </div>
                <div v-else>
                  <img :src="user.avatar" class="img-circle img-responsive center-block user-image" />
                </div>
              <div class="widget-footer">
                <span v-if="!user.avatar" href="#">
                  <input type="file" class="hidden" id="file" @change="onFileChange">
                  <label for="file" class="btn btn-primary">
                      Agregar imagen
                  </label>
                </span>
                <button v-else @click="removeImage" class="btn btn-primary text-center">Remover imagen</button>

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
        <div class="col-lg-9 col-md-8">
    <div class="widget">
        <header class="widget-header">
            <h4 class="widget-title">Informacion Adicional de Usuario</h4></header>
        <hr class="widget-separator">
        <div class="widget-body">
            <form v-on:submit.prevent="saveUser">
                <div class="m-b-lg"><small></small></div>
                <div class="form-group col-sm-6">
                  <label for="exampleSelectID">Tipo de Documento</label>
                  <select v-model="user.type_identity" class="form-control" name="" required="">
                    <option value="1">C.C</option>
                    <option value="2">T.I</option>
                    <option value="3">T.E</option>
                  </select>
                </div>
                <div class="form-group col-sm-6">
                  <label for="exampleNumberID">Numero de indentificacion</label>
                  <input v-model="user.identity" type="text" name="" value="" class="form-control" required="">
                </div>
                <div class="form-group col-sm-6">
                    <label for="exampleInputEmail1">Nombre</label>
                    <input v-model="user.name" id="exampleInputEmail1" type="text" class="form-control" required="">
                </div>
                <div class="form-group col-sm-6">
                    <label for="exampleInputPassword1">Apellido</label>
                    <input v-model="user.last_name" id="exampleInputPassword1" type="text" class="form-control" required="">
                </div>
                <div class="form-group col-sm-12">
                    <label for="exampleInputFile">Email</label>
                    <input v-model="user.email" id="exampleInputFile" type="email" class="form-control" required="">
                </div>
                <div class="form-group col-sm-6">
                    <label for="">Contraseña</label>
                    <input v-model="user.password" type="password" class="form-control" required="">
                </div>
                <div class="form-group col-sm-6">
                    <label for="">Repetir Contraseñe</label>
                    <input type="password" class="form-control" required="">
                </div>
                <div class="form-group col-sm-12">
                  <label for="">Informacion Adicional</label>
                  <textarea v-model="user.description" class="form-control" name="name" rows="8" cols="80" placeholder="Agregar informacion Adicional al usuario"></textarea>
                </div>
                <div class="form-group col-sm-12">
                  <button type="submit" id="btn-register" class="btn btn-success"><i class="fa fa-check"></i> Registro
                  </button>
                  <button type="reset" class="btn btn-danger"><i class="fa fa-times"></i> Cancelar
                  </button>
                </div>
                <div>
                  .
                </div>
            </form>
        </div>
    </div>
</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      user: {
        identity: '',
        type_identity: '',
        description: '',
        name: '',
        last_name: '',
        email: '',
        password: '',
        avatar: '',
        role: ''
      }
    }
  },
  methods: {
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.createImage(files[0])
    },
    createImage (file) {
      // var image = new Image()
      var reader = new FileReader()
      var vm = this
      reader.onload = (e) => {
        vm.user.avatar = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage: function (e) {
      this.user.avatar = ''
    },
    ...mapActions([
      'storeUser'
    ]),
    saveUser () {
      window.$('#btn-register').button('loading')
      this.storeUser(this.user)
      .then(user => {
        window.$('#btn-register').button('reset')
        console.log(user)
        this.$router.replace('/admin/users/' + user.id)
      })
      .catch(error => {
        console.log(error)
        window.$('#btn-register').button('reset')
      })
    }
  }
}
</script>

<style lang="css">
</style>
