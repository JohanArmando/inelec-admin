<template lang="html">
  <ul class='nav nav-tabs' role='tablist' style='background: #F5F7F9 !important;'>
    <li role="presentation" v-bind:class="{'active': this.$route.path == '/admin/users' }">
      <router-link to="/admin/users">Usuarios</router-link>
    </li>
    <li v-bind:class="{'active': subIsActive('/admin/users/new-users')}" role="presentation">
      <router-link to="/admin/users/new-users">Agregar Usuario</router-link>
    </li>
    <li v-bind:class="{'active': subIsActive('/admin/users/rol-users')}" role="presentation">
      <router-link to="/admin/users/rol-users">Rol</router-link>
    </li>
    <li v-bind:class="{'active': subIsActive('/admin/users/permissions-users')}" role="presentation">
      <router-link to="/admin/users/permissions-users">Permisos</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
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
</style>
