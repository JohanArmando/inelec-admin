<template lang="html">
  <nav class="navbar navbar-inverse navbar-fixed-top primary in" id="app-navbar">
      <div class="navbar-header">
        <button class="navbar-toggle visible-xs-inline-block navbar-toggle-left hamburger hamburger--collapse js-hamburger" v-bind:class="{ 'is-active': sidebar }" v-on:click="toggleSideBar()" id="menubar-toggle-btn" type="button">
          <span class="sr-only">Toggle navigation</span>
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        <button aria-expanded="false" class="navbar-toggle navbar-toggle-right collapsed" data-target="#app-navbar-collapse" data-toggle="collapse" type="button">
          <span class="sr-only">Toggle navigation</span>
          <span class="fa fa-plus"></span>
        </button>
        <a class="navbar-brand" href="">
          <span class="brand-icon">
            <!-- %i.fa.fa-gg -->
            <span class="brand-name">Inelec SAS</span>
          </span>
        </a>
      </div>
      <div class="navbar-container container-fluid">
        <div class="collapse navbar-collapse" id="app-navbar-collapse">
          <ul class="nav navbar-toolbar navbar-toolbar-left navbar-left">
            <!-- %li.hidden-float.hidden-menubar-top -->
            <!-- %a#menubar-fold-btn.hamburger.hamburger--arrowalt.is-active.js-hamburger{:href => "javascript:void(0)", :role => "button"} -->
            <!-- %span.hamburger-box -->
            <!-- %span.hamburger-inner -->
            <li>
              <h5 class="page-title hidden-menubar-top hidden-float">CRM | Inelec International SAS</h5>
            </li>
          </ul>
          <ul class="nav navbar-toolbar navbar-toolbar-right navbar-right">
            <li class="dropdown">
              <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0)" role="button">
                <i class="fa fa-cog fa-2x"></i>
              </a>
              <ul class="dropdown-menu animated fadeIn">
                <li>
                  <a href="javascript:void(0)">
                    <i class="fa fa-user"></i>
                    Mi Perfil
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i class="fa fa-check" style="color: green;"></i>
                    Balance General
                  </a>
                </li>
                <li>
                  <a v-on:click="doLogout">
                    <i class="fa fa-times" style="color: red;"></i>
                    Salir
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        <div class="app-user">
        <div class="media">
          <div class="media-left">
            <div class="avatar avatar-md avatar-circle dropdown">
              <a href="" data-toggle="dropdown">
                <img class="img-responsive" src="../../../assets/logo/user.png" alt="User">
              </a>
            </div>
          </div>
          <div class="media-body">
            <div class="foldable">
              <h5>
                <a class="username" href="javascript:void(0)">Administrador</a>
              </h5>
              <ul>
                <li class="dropdown">
                  <a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle usertitle" data-toggle="dropdown" href="javascript:void(0)">
                    <small>Gerente</small>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div></div>
      </div>
    </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      status: 'getStatus',
      user: 'getUser',
      sidebar: 'sidebarStatus'
    })
  },
  methods: {
    doLogout () {
      this.logout().then(log => {
        this.$router.replace('/auth/login')
      })
    },
    ...mapActions([
      'logout',
      'toggleSideBar'
    ])
  }
}
</script>

<style lang="css">
</style>
