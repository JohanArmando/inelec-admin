<template lang="html">
  <ul class='nav nav-tabs' role='tablist' style='background: #F5F7F9 !important;'>
    <li role="presentation">
      <router-link to="/admin/users/list-users">Usuarios</router-link>
    </li>
    <li role="presentation">
      <router-link to="/admin/users/new-users">Agregar Usuario</router-link>
    </li>
    <li role="presentation">
      <router-link to="/admin/users/rol-users">Rol</router-link>
    </li>
    <li role="presentation">
      <router-link to="/admin/users/permissions-users">Permisos</router-link>
    </li>
  </ul>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
