<template lang="html">
  <div class="promo">
    <div class="">
      <div class="row no-gutter">
        <div class="col-md-12">
            <div class="wrap">
              <section class="app-content">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-4">
                      <form class="" action="#" method="post">
                        <div class="form-group has-feedback">
                          <input type="text" name="" value="" class="form-control" placeholder="Nombre del usurio">
                          <span class="glyphicon glyphicon-search form-control-feedback" aria-hidden="true"></span>
                        </div>
                      </form>
                    </div>
                    <div class="col-lg-2 col-md-4">
                        <a href="#" class="dropdown-toggle btn btn-default" id="drop6" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
                          Ordenar <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-shadow" id="menu3" aria-labelledby="drop6">
                          <li><a href="#">Action</a></li>
                          <li><a href="#">Another action</a></li>
                          <li><a href="#">Something else here</a></li>
                          <li role="separator" class="divider"></li>
                          <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>
                  </div>
                </div>
                <div class= "container-fluid">
                  <div class="row">
                    <div class="col-md-4 col-lg-3 col-sm-6" v-for="user in users">
                      <card-user v-bind:user="user"></card-user>
                    </div>

                  </div>
                  <pagination-list></pagination-list>
                </div>
              </section>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { mapActions, mapGetters } from 'vuex'
import PaginationList from '@/components/admin/partials/PaginationList'
import CardUser from '@/components/admin/users/CardUser'

export default {
  computed: {
    ...mapGetters({
      users: 'getUsers'
    })
  },
  beforeMount () {
    this.getUsers().then(users => {

    })
    .catch(message => {

    })
  },
  components: {
    PaginationList,
    CardUser
  },
  methods: {
    ...mapActions([
      'getUsers'
    ])
  }
}
</script>

<style lang="css">
  [class*="col-"] {
    padding-right: .75rem !important;
    padding-left: .75rem !important;
  },
  .dropdown-menu-shadow {
    border: solid #cfcfcf 1px;
  }
</style>
