<template lang="html">
  <ul class='nav nav-tabs' role='tablist' style='background: #F5F7F9 !important;'>
    <li v-bind:class="{'active': this.$route.path == '/admin/clients' }" role='presentation'>
      <router-link to="/admin/clients">Listar Clientes</router-link>
    </li>
    <li v-bind:class="{'active': subIsActive('/admin/clients/new-client')}" role='presentation'>
      <router-link to="/admin/clients/new-client">Agregar Cliente</router-link>
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
