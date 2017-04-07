<template>
  <section class='app-content'>
    <div class='row'>
      <div class='col-md-4'>
        <send-emails></send-emails>
      </div>
      <div class='col-md-4'>
        <ready-butge></ready-butge>
      </div>
      <div class='col-md-4'>
        <assigned-butge></assigned-butge>
      </div>
    </div>
    <div class='row'>
      <div class='col-md-8'>
        <average-butge></average-butge>

      </div>
      <div class='col-md-4'>
        <last-clients></last-clients>
      </div>
    </div>
    <div class='row'>
      <div class='col-md-12'>
        <list-butge></list-butge>
      </div>
    </div>
  </section>
</template>
<script>
import SendEmails from '@/components/admin/dashboard/SendEmails'
import ReadyButge from '@/components/admin/dashboard/ReadyButge'
import AssignedButge from '@/components/admin/dashboard/AssignedButge'
import AverageButge from '@/components/admin/dashboard/AverageButge'
import LastClients from '@/components/admin/dashboard/LastClients'
import ListButge from '@/components/admin/dashboard/ListButge'

export default {
  components: {
    SendEmails,
    ReadyButge,
    AssignedButge,
    AverageButge,
    LastClients,
    ListButge
  }
}
</script>

<style lang="css">
</style>
