<template lang="html">
  <div class='wrap'>
    <section class='app-content'>
      <div class='panel panel-default'>
        <div class='panel-body'>
          <div class='promo-body'>
            <form action='#'>
              <div class='row'>
                <div class='col-xs-12 col-sm-8 col-md-offset-1'>
                  <div class='form-group'>
                    <input class='form-control promo-search-field' placeholder='Nombre del usuario' type='search'>
                  </div>
                </div>
                <div class='col-xs-12 col-sm-2'>
                  <input class='btn btn-primary btn-block promo-search-submit' type='submit' value='Buscar'>
                </div>
              </div>
            </form>
          </div>
          <div class='row m-b-lg'>
            <div class='col-md-4 col-sm-6' v-for="n in 10">
              <card-client></card-client>
            </div>
          </div>
          <div class='col-md-8'>
            <nav class='search-results-navigation'></nav>
            <ul class='pagination m-0'>
              <li>
                <a aria-label='Previous' href='#'>
                  <span aria-hidden='true'>
                    <i class='fa fa-chevron-left'></i>
                  </span>
                </a>
              </li>
              <li>
                <a href='#'>1</a>
              </li>
              <li>
                <a href='#'>2</a>
              </li>
              <li>
                <a href='#'>3</a>
              </li>
              <li>
                <a href='#'>4</a>
              </li>
              <li>
                <a href='#'>5</a>
              </li>
              <li>
                <a aria-label='Next' href='#'>
                  <span aria-hidden='true'>
                    <i class='fa fa-chevron-right'></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CardClient from '@/components/admin/clients/CardClient'
export default {
  components: {
    CardClient
  }
}
</script>

<style lang="css">
</style>
