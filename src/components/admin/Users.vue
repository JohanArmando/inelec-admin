<template lang="html">
  <div class="promo">
    <nav-user></nav-user>

    <transition
    name="custom-classes-transition"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    :duration="{ enter: 1500, leave: 0 }">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import NavUser from '@/components/admin/users/NavUser'
export default {
  components: {
    NavUser
  }
}
</script>

<style lang="css">
</style>
