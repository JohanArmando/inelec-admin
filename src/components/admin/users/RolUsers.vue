<template lang="html">
  <div class="wrap">
    <div class="">
      <div class="row">
        <div class="col-md-3">
          <div class="m-b-lg">
            <a href="#" type="button" data-toggle="modal" data-target="#create-role" class="btn action-panel-btn btn-default btn-block">Crear Rol</a>
          </div>
        </div>
        <div class="col-md-9 col-sm-12">
          <div class="row">
            <div class="col-md-12" v-for="role in roles">
              <div class="widget">
                <header class="widget-header"><h4 class="widget-title">{{ role.name }}</h4></header>
                <hr class="widget-separator">
                <div class="widget-body p-h-lg">
                  {{ role.description }}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="create-role" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" id="">Crear role</h4>
            </div>
            <form v-on:submit.prevent="submitRole" class="form" action="#" method="post">
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="Name_rol">Nombre del Rol</label>
                      <input v-model="role.name" type="text" name="" value="" class="form-control" required="">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="description-rol">Descripcion del Rol y / o Funciones del Rol</label>
                      <textarea v-model="role.description" name="name" rows="8" cols="80" class="form-control"></textarea>
                    </div>
                  </div>
                  <div v-for="section in sections" class="col-md-4">
                    <div class="form-group">
                      <label for="">{{ section.name }}</label>
                      <select class='form-control'>
                        <option value="0">Ninguno</option>
                        <option value="1">leer</option>
                        <option value="2">Agregar</option>
                        <option value="3">Modificar</option>
                        <option value="4">Eliminar</option>
                      </select>
                    </div>
                  </div>


                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="submit" name="button" id="create-role-btn" class="btn btn-primary">
                  Agregar Rol
                </button>
              </div>
              </form>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      role: {
        name: '',
        description: '',
        permissions: [
          {
            section: '',
            level: ''
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters({
      roles: 'getRoles',
      sections: 'getSections'
    })
  },
  methods: {
    ...mapActions([
      'getRoles',
      'storeRole',
      'getSections'
    ]),
    submitRole () {
      window.$('#create-role-btn').button('loading')
      this.storeRole(this.role)
      .then(() => {
        window.$('#create-role-btn').button('reset')
        window.$toast.success('Se han guardado correctamente los cambios')
        window.$('#create-role').modal('hide')
      })
      .catch(() => {
        window.$('#create-role').modal('hide')
        window.$toast.error('Ha ocurrido un incoveniente')
        window.$('#create-role-btn').button('reset')
      })
    }
  },
  beforeMount () {
    this.getRoles().then(users => {

    })
    .catch(message => {

    })
    this.getSections().then(users => {

    })
    .catch(message => {

    })
  }
}
</script>

<style lang="css">

</style>
