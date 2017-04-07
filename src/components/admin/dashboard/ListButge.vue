<template lang="html">
  <div class='widget'>
    <header class='widget-header'>
      <h4 class='widget-title pull-left'>Status Actual de cotizaciones</h4>
      <small class='pull-right text-success'>Ultima actualizacion: Hoy</small>
    </header>
    <hr class='widget-separator'>
    <div class='widget-body clearfix'>
      <div class='table-responsive'>
        <table class='table table-hover'>
          <thead>
            <tr>
              <th class='text-center'>Nombre Encargado</th>
              <th class='text-center'>Empresa</th>
              <th class='text-center'>Valor total</th>
              <th class='text-center'>Estado Actual</th>
              <th class='text-center'>Fecha de Creacion</th>
            </tr>
          </thead>
          <tbody>
            <tr class='text-center'>
              <td>Firm Website</td>
              <td>John Doe</td>
              <td>120$</td>
              <td>
                <span class='label label-info'>En estudio</span>
              </td>
              <td>06/03/2016</td>
            </tr>
            <tr class='text-center'>
              <td>Security Test</td>
              <td>Jane Doe</td>
              <td>2500$</td>
              <td>
                <span class='label label-success'>Facturacion</span>
              </td>
              <td>05/15/2016</td>
            </tr>
            <tr class='text-center'>
              <td>Branches Linking</td>
              <td>Diana Aid</td>
              <td>1500$</td>
              <td>
                <span class='label label-warning'>Revision</span>
              </td>
              <td>05/26/2016</td>
            </tr>
            <tr class='text-center'>
              <td>Resources Optimization</td>
              <td>Sara Adams</td>
              <td>1300$</td>
              <td>
                <span class='label label-info'>En Estudio</span>
              </td>
              <td>06/02/2016</td>
            </tr>
            <tr class='text-center'>
              <td>Office Automation</td>
              <td>Ibrahim Ali</td>
              <td>7200$</td>
              <td>
                <span class='label label-success'>Facturacion</span>
              </td>
              <td>06/13/2016</td>
            </tr>
            <tr class='text-center'>
              <td>System Recovery</td>
              <td>Smith Adams</td>
              <td>1000$</td>
              <td>
                <span class='label label-danger'>Cancelada</span>
              </td>
              <td>06/02/2016</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
