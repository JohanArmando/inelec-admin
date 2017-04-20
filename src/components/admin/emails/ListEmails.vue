<template lang="html">
    <div class="wrap">
      <section class="app-content">
        <div class="row">
          <div class="col-md-2">
            <div class="app-action-panel" id="inbox-action-panel">
                  <div class="action-panel-toggle" data-toggle="class" data-target="#inbox-action-panel" data-class="open">
                    <i class="fa fa-chevron-right"></i> <i class="fa fa-chevron-left"></i>
                  </div>
                  <div class="m-b-lg">
                    <a href="#" type="button" data-toggle="modal" data-target="#composeModal" class="btn action-panel-btn btn-default btn-block"><i class="fa fa-send"></i> Compose</a>
                  </div>
                  <div class="widget app-actions-list scrollable-container ps-container ps-theme-default" style="height: 240px;">
                      <div class="list-group">
                        <a href="#" class="text-color list-group-item">
                          <i class="m-r-sm fa fa-envelope"></i>Bandeja
                        </a>
                        <hr class="widget-separator">
                        <a href="#" class="text-color list-group-item">
                          <i class="m-r-sm fa fa-star" style="color: yellow;"></i>Leidos
                        </a>
                        <hr class="widget-separator">
                        <a href="#" class="text-color list-group-item">
                          <i class="m-r-sm fa fa-bookmark" style="color: blue;"></i>Importantes
                        </a>
                        <hr class="widget-separator">
                        <a href="#" class="text-color list-group-item">
                          <i class="m-r-sm fa fa-paper-plane" style="color: green"></i>Enviados
                        </a>
                        <hr class="widget-separator">
                        <a href="#" class="text-color list-group-item">
                          <i class="m-r-sm fa fa-trash-o" style="color: red"></i>Eliminados
                        </a>
                      </div>
                  </div>
              </div>
            </div>
            <div class="col-md-10">
              <div class="row">
                <div class="col-md-12">
                  <div class="mail-toolbar m-b-lg">
                    <div class="input-group">
                      <div class="input-group-btn search-panel">
                          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" style="height: 36px;">
                          	<span id="search_concept">Ordenar por</span> <span class="caret"></span>
                          </button>
                          <ul class="dropdown-menu" role="menu">
                            <li><a href="#contains">Fecha</a></li>
                            <li><a href="#less_than">A-Z </a></li>
                            <li><a href="#less_than">Z-A </a></li>
                            <li class="divider"></li>
                            <li><a href="#less_than">Importancia </a></li>
                          </ul>
                      </div>
                      <input type="hidden" name="search_param" value="all" id="search_param">
                      <input type="text" class="form-control" name="x" placeholder="Buscar en la Bandeja...">
                      <span class="input-group-btn">
                          <button class="btn btn-default" type="button" style="height: 36px;"><span class="glyphicon glyphicon-search"></span></button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="widget">
                    <div class="table-responsive">
                      <table class="table table-hover table-bordered" cellspacing="100">
                        <tbody>
                            <tr>
                              <td style="width: 1%;"><input type="checkbox" name="" value=""></td>
                              <td style="width: 1%;"><i class="fa fa-star" style="color: yellow;"></i></td>
                              <td style="width: 80%">
                                <p style="font-size: 12px;">
                                  Asunto Asunto Asunto <i class="fa fa-paperclip text-right"></i>
                                </p>
                              </td>
                              <td>dd/mm/aaaa</td>
                            </tr>
                            <tr>
                              <td style="width: 1%;"><input type="checkbox" name="" value=""></td>
                              <td style="width: 1%;"><i class="fa fa-star" style="color: yellow;"></i></td>
                              <td style="width: 80%">
                                <p>
                                  Asunto Asunto Asunto <i class="fa fa-paperclip text-right"></i>
                                </p>
                              </td>
                              <td>dd/mm/aaaa</td>
                            </tr>
                            <tr>
                              <td style="width: 1%;"><input type="checkbox" name="" value=""></td>
                              <td style="width: 1%;"><i class="fa fa-star" style="color: yellow;"></i></td>
                              <td style="width: 80%">
                                <p>
                                  Asunto Asunto Asunto <i class="fa fa-paperclip text-right"></i>
                                </p>
                              </td>
                              <td>dd/mm/aaaa</td>
                            </tr>
                            <tr>
                              <td style="width: 1%;"><input type="checkbox" name="" value=""></td>
                              <td style="width: 1%;"><i class="fa fa-star" style="color: yellow;"></i></td>
                              <td style="width: 80%">
                                <p>
                                  Asunto Asunto Asunto <i class="fa fa-paperclip text-right"></i>
                                </p>
                              </td>
                              <td>dd/mm/aaaa</td>
                            </tr><tr>
                              <td style="width: 1%;"><input type="checkbox" name="" value=""></td>
                              <td style="width: 1%;"><i class="fa fa-star" style="color: yellow;"></i></td>
                              <td style="width: 80%">
                                <p>
                                  Asunto Asunto Asunto <i class="fa fa-paperclip text-right"></i>
                                </p>
                              </td>
                              <td>dd/mm/aaaa</td>
                            </tr><tr>
                              <td style="width: 1%;"><input type="checkbox" name="" value=""></td>
                              <td style="width: 1%;"><i class="fa fa-star" style="color: yellow;"></i></td>
                              <td style="width: 80%">
                                <p>
                                  Asunto Asunto Asunto <i class="fa fa-paperclip text-right"></i>
                                </p>
                              </td>
                              <td>dd/mm/aaaa</td>
                            </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
