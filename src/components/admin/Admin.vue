<template>
  <div class="animated fadeIn menubar-left menubar-unfold theme-default  theme-primary menubar-light pace-done">
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
export default {
  components: {
    NavBar,
    SideBar,
    FooterApp
  }
}
</script>

<style lang="css">
</style>
