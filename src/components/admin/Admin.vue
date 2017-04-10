<template>
  <div class="animated fadeIn menubar-left theme-default menubar-unfold theme-primary menubar-light pace-done" v-bind:class="[sidebar ? 'menubar-in' : '']">
    <nav-bar></nav-bar>
    <side-bar></side-bar>
    <div class='app-main in' id='app-main'>
      <div class='wrapper'>
        <div class='app-content'>
          <transition
          name="custom-classes-transition"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          :duration="{ enter: 1500, leave: 0 }">>
            <router-view></router-view>
          </transition>
          <div class='wrap p-t-0'>
            <footer-app></footer-app>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/admin/partials/NavBar'
import SideBar from '@/components/admin/partials/SideBar'
import FooterApp from '@/components/admin/partials/FooterApp'
import { mapGetters } from 'vuex'
export default {
  components: {
    NavBar,
    SideBar,
    FooterApp
  },
  computed: {
    ...mapGetters({
      sidebar: 'sidebarStatus'
    })
  }
}
</script>

<style lang="css">
</style>
