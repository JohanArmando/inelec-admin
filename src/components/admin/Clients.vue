<template lang="html">
  <div class='promo'>
    <div class='promo-footer'>
      <div class='row no-gutter'>
        <div class='col-md-12'>
          <div class='widget'>
            <div class='m-b-lg nav-tabs-horizontal'>
              <nav-clients></nav-clients>
              <transition
              name="custom-classes-transition"
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
              :duration="{ enter: 1500, leave: 0 }">>
                <router-view></router-view>
              </transition>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import NavClients from '@/components/admin/clients/NavClients'
export default {
  components: {
    NavClients
  }
}
</script>

<style lang="css">
</style>
