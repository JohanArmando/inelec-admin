<template lang="html">
  <div class="">
    <h1>Mostrar clients</h1>
    <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="{ enter: 1500, leave: 0 }">>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
