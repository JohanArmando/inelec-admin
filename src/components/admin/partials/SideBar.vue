<template lang="html">
  <aside class='menubar light in' id='menubar' style="display: block !important;">
      <div class='app-user'>
        <div class='media'>
          <div class='media-left'>
            <div class='avatar avatar-md avatar-circle'>
              <a href=''>
                <img class="img-responsive" src="../../../assets/logo/user.png" alt="User" />
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
            <li class='has-submenu'>
              <a href='/admin/administrator'>
                <i class='menu-icon fa fa-home'></i>
                <span class='menu-text'>Inicio</span>
              </a>
            </li>
            <li class='has-submenu'>
              <a href='/admin/usuarios'>
                <i class='menu-icon fa fa-users'></i>
                <span class='menu-text'>Usuarios</span>
              </a>
            </li>
            <li class='has-submenu'>
              <a class='submenu-toggle' href='javascript:void(0)'>
                <i class='menu-icon fa fa-address-card-o'></i>
                <span class='menu-text'>Clientes</span>
              </a>
            </li>
            <li class='has-submenu'>
              <a class='submenu-toggle' href='javascript:void(0)'>
                <i class='menu-icon fa fa-file-o'></i>
                <span class='menu-text'>Presupuesto</span>
              </a>
            </li>
            <li>
              <a href=''>
                <i class='menu-icon fa fa-envelope-o'></i>
                <span class='menu-text'>Correos</span>
              </a>
            </li>
            <li class='has-submenu'>
              <a class='submenu-toggle' href='javascript:void(0)'>
                <i class='menu-icon fa fa-globe'></i>
                <span class='menu-text'>Web</span>
                <i class='menu-caret fa fa-caret-right'></i>
              </a>
              <ul class='submenu'>
                <li>
                  <a href=''>
                    <span class='menu-text'>Agregar articulo</span>
                  </a>
                </li>
                <li>
                  <a href=''>
                    <span class='menu-text'>Agregar imagen</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class='has-submenu'>
              <a class='submenu-toggle' href='javascript:void(0)'>
                <i class='menu-icon fa fa-calendar'></i>
                <span class='menu-text'>Calendario</span>
              </a>
            </li>
            <li class='has-submenu'>
              <a class='submenu-toggle' href='javascript:void(0)'>
                <i class='menu-icon fa fa-user-circle'></i>
                <span class='menu-text'>Contactos</span>
              </a>
            </li>
            <li class='menu-separator'>
              <hr>
            </li>
            <li>
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
  methods: mapActions([
    'logout'
  ])
}
</script>

<style lang="css">
</style>
