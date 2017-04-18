<template lang="html">
  <div class="wrap">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 col-md-4">
          <div class="widget">
            <div class="widget-header">
              <h4 class="widget-title">{{ user.name }} {{ user.last_name }}</h4>
            </div>
            <hr class="widget-separator">
            <div class="widget-body clearfix text-center">
              <div class="big-icon m-b-md watermark">
                <img v-if="!user.avatar_url" src='../../../assets/logo/user.png' class="img-circle img-responsive center-block user-image" alt="">
                <img v-else :src="user.avatar_url" alt="" class="img-circle img-responsive center-block user-image">
              </div>

              <div class="widget-footer">
                <span v-if="!user.avatar" href="#">
                  <input type="file" class="hidden" id="file" @change="onFileChange">
                  <label for="file" class="btn btn-primary">
                      Cambiar imagen
                  </label>
                </span>
                <button v-else @click="removeImage" class="btn btn-primary text-center">Remover imagen</button>
              </div>
              <p class="text-muted m-b-lg">
                Identificacion: {{ user.identity }}<br>
                Email: {{ user.email }}<br>
                Rol:<span v-if="user.roles"> {{ user.roles[0].name }}</span>
              </p>
            </div>
          </div>
          <div class="widget">
            <router-link class="list-group-item" v-bind:class="{'active-inelec-v': this.$route.path == '/admin/users/'+$route.params.id }" :to="'/admin/users/'+$route.params.id+''">Informacion General</router-link>
            <router-link class="list-group-item" active-class="active-inelec-v" :to="'/admin/users/'+$route.params.id+'/phones'" >Telefonos</router-link>
            <router-link class="list-group-item" active-class="active-inelec-v" :to="'/admin/users/'+$route.params.id+'/permissions'" >Permisos</router-link>
            <router-link class="list-group-item" active-class="active-inelec-v" :to="'/admin/users/'+$route.params.id+'/history'" >Historial</router-link>
          </div>
        </div>
        <div class="col-lg-9 col-md-8">

          <transition
          name="custom-classes-transition"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          :duration="{ enter: 1500, leave: 0 }">>
            <router-view></router-view>
          </transition>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      user: 'getCurrentUser'
    })
  },
  beforeMount () {
    this.getUser(this.$route.params.id).then(users => {

    })
    .catch(message => {

    })
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
      'storeUser',
      'getUser'
    ]),
    saveUser () {
      this.storeUser(this.user).then(user => {
        console.log(user)
      })
    },
    subIsActive (input) {
      const paths = Array.isArray(input) ? input : [input]
      return paths.some(path => {
        return this.$route.path.indexOf(path) === 0 // current path starts with this path string
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .list-group-item:first-child, .list-group-item:last-child{
    border-radius: 0px;
  }
  .active-inelec-v {
    border-left: 3px solid #188AE2;
    padding-left: 13px;
  }
</style>
