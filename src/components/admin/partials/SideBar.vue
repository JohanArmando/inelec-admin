<template lang="html">
  <aside class='menubar light in' id='menubar' style="display: block !important;">
      <div class='app-user'>
        <div class='media'>
          <div class='media-left'>
            <div class='avatar avatar-md avatar-circle'>
              <a href=''>
                <img class="img-responsive" :src="user.avatar" alt="User" />
              </a>
            </div>
          </div>
          <div class='media-body'>
            <div class='foldable'>
              <h5>
                <a class='username' href='javascript:void(0)'>{{ user.name }} {{ user.last_name }}</a>
              </h5>
              <ul>
                <li class='dropdown'>
                  <a aria-expanded='false' aria-haspopup='true' class='dropdown-toggle usertitle' data-toggle='dropdown' href='javascript:void(0)'>
                    <small v-if="user.roles">{{ user.roles[0].name }}</small>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class='menubar-scroll'>
        <div class='menubar-scroll-inner'>
          <ul class='app-menu'>
            <li class='has-submenu' v-bind:class="{'open': this.$route.path == '/admin' }">
              <router-link to="/admin">
                <i class='menu-icon fa fa-home'></i>
                <span class='menu-text'>Inicio</span>
              </router-link>
            </li>
            <li class='has-submenu' v-bind:class="{'open': subIsActive('/admin/users')}">
              <router-link to="/admin/users">
                <i class='menu-icon fa fa-users'></i>
                <span class='menu-text'>Usuarios</span>
              </router-link>
            </li>
            <li class='has-submenu' v-bind:class="{'open': subIsActive('/admin/clients')}">
              <router-link to="/admin/clients">
                <i class='menu-icon fa fa-address-card-o'></i>
                <span class='menu-text'>Clientes</span>
              </router-link>
            </li>
            <li class='has-submenu' v-bind:class="{'open': subIsActive('/admin/budgets')}">
              <router-link to="/admin/budgets">
                <i class="menu-icon fa fa-file-text"></i>
                <span class="menu-text">Presupuesto</span>
              </router-link>
            </li>
            <li class='has-submenu' v-bind:class="{'open': subIsActive('/admin/emails')}">
              <a href=''>
                <i class='menu-icon fa fa-envelope-o'></i>
                <span class='menu-text'>Correos</span>
              </a>
            </li>
            <li class='has-submenu'  v-bind:class="{'open': subIsActive('/admin/web')}">
              <a class='submenu-toggle' href='javascript:void(0)'>
                <i class='menu-icon fa fa-globe'></i>
                <span class='menu-text'>Web</span>
              </a>
            </li>
            <li class='has-submenu'  v-bind:class="{'open': subIsActive('/admin/calendar')}">
              <a class='submenu-toggle' href='javascript:void(0)'>
                <i class='menu-icon fa fa-calendar'></i>
                <span class='menu-text'>Calendario</span>
              </a>
            </li>
            <li class='has-submenu'  v-bind:class="{'open': subIsActive('/admin/contacts')}">
              <a class='submenu-toggle' href='javascript:void(0)'>
                <i class='menu-icon fa fa-user-circle'></i>
                <span class='menu-text'>Contactos</span>
              </a>
            </li>
            <li class='menu-separator'>
              <hr>
            </li>
            <li class='has-submenu'  v-bind:class="{'open': subIsActive('/admin/help')}">
              <a href=''>
                <i class='menu-icon fa fa-question'></i>
                <span class='menu-text'>Ayuda</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      status: 'getStatus',
      user: 'getUser'
    })
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    subIsActive (input) {
      const paths = Array.isArray(input) ? input : [input]
      return paths.some(path => {
        return this.$route.path.indexOf(path) === 0 // current path starts with this path string
      })
    }
  }
}
</script>

<style lang="css">
  .has-submenu a:hover, .has-submenu a:active, .has-submenu a:visited, .has-submenu a {
    text-decoration: none !important;
  }
</style>
