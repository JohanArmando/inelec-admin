<template lang="html">
  <div class="widget">
      <header class="widget-header">
          <h4 class="widget-title">Informacion Adicional de Usuario</h4></header>
      <hr class="widget-separator">
      <div class="widget-body">
          <form v-on:submit.prevent="updateUserSubmit">
              <div class="m-b-lg"><small></small></div>
              <div class="form-group col-sm-6">
                <label for="exampleSelectID">Tipo de Documento</label>
                <select :value="user.type_identity" v-on:input="updateValue('type_identity',$event)" class="form-control" name="">
                  <option value="1">C.C</option>
                  <option value="2">T.I</option>
                  <option value="3">T.E</option>
                </select>
              </div>
              <div class="form-group col-sm-6">
                <label for="exampleNumberID">Numero de indentificacion</label>
                <input :value="user.identity" type="text" name="" v-on:input="updateValue('identity',$event)" class="form-control">
              </div>
              <div class="form-group col-sm-6">
                  <label for="exampleInputEmail1">Nombre</label>
                  <input :value="user.name" id="exampleInputEmail1" v-on:input="updateValue('name',$event)" type="text" class="form-control">
              </div>
              <div class="form-group col-sm-6">
                  <label for="exampleInputPassword1">Apellido</label>
                  <input :value="user.last_name" id="exampleInputPassword1" v-on:input="updateValue('last_name',$event)" type="text" class="form-control">
              </div>
              <div class="form-group col-sm-12">
                  <label for="eidentityxampleInputFile">Email</label>
                  <input :value="user.email" id="exampleInputFile" v-on:input="updateValue('email',$event)" type="email" class="form-control">
              </div>
              <div class="form-group col-sm-6">
                  <label for="">Contraseña</label>
                  <input :value="user.password" type="password" v-on:input="updateValue('password',$event)" class="form-control">
              </div>
              <div class="form-group col-sm-6">
                  <label for=" value=""">Repetir Contraseñe</label>
                  <input type="password" class="form-control">
              </div>
              <div class="form-group col-sm-12">
                <label for="">Informacion Adicional</label>
                <textarea :value="user.description" v-on:input="updateValue('description',$event)" class="form-control" name="name" rows="8" cols="80" placeholder="Agregar informacion Adicional al usuario"></textarea>
              </div>
              <div class="form-group col-sm-12">
                <button type="submit" id="btn-update-user" class="btn btn-success"><i class="fa fa-check"></i> Guardar Cambios
                </button>
              </div>
              <div>
                .
              </div>
          </form>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      form: {}
    }
  },
  computed: {
    ...mapGetters({
      user: 'getCurrentUser'
    })
  },
  methods: {
    updateUserSubmit () {
      window.$('#btn-update-user').button('loading')
      this.form.id = this.user.id
      this.updateUser(this.form)
      .then(user => {
        console.log(user)
        window.$('#btn-update-user').button('reset')
        window.$toast.success('Se han guardado correctamente los cambios')
      })
      .catch(error => {
        console.log(error.response)
        window.$('#btn-update-user').button('reset')
        window.$toast.error('Ha ocurrido un incoveniente')
      })
    },
    updateValue (attribute, e) {
      this.form[attribute] = e.target.value
    },
    ...mapActions([
      'updateUser'
    ])
  }
}
</script>

<style lang="css">
</style>
