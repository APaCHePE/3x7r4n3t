<template>
  <div class="contenedor-principal">
    <div>
      <titulo-header>Registre su factura digital</titulo-header>
    </div>
    <div class="ml-5" style="text-align: left">
      <h3 class="mb-2">Documento PDF</h3>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :limit="1"
        :on-exceed="handleExceed"
        :file-list="fileList"
      >
      </el-upload>
      <h3 class="mb-2">Documento ZIP</h3>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-exceed="handleExceed"
        :file-list="fileListZIP"
      >
      </el-upload>
    </div>
    <div
      style="display: flex; justify-content: space-around; margin-bottom: 20px"
    >
      <el-button type="primary" @click="mostrarFactura = true"
        >Cargar Factura
      </el-button>
    </div>
    <div v-if="mostrarFactura">
      <div class="ml-5"
      style="display: flex; justify-content: left; margin-bottom: 20px"
    >
    <h2><b>Vista previa</b></h2>
    </div>
      <div
        class="content contentTG left-sidebar-toggle contenedor-opciones ml-5"
        style="min-height: 592px"
      >
        <div class="body-registro">
          <br />
          <div id="cabecera" class="cabecera">
            <div style="text-align: left">
              <p><b>Razon Social: </b><input /></p>
              <p><b>Dirección: </b><input /></p>
            </div>
            <br />
            <div class="cabecera-detalle">
              <p><b>REGISTRO FACTURA</b></p>
              <p><b>Ruc: </b><input /></p>
            </div>
            <br />
          </div>
          <div id="cuerpo" class="cuerpo">
            <form method="post" name="selectForm">
              <table cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                  <tr>
                    <td class="beta">
                      <table cellpadding="2" cellspacing="1" width="100%">
                        <tbody>
                          <tr>
                            <td
                              align="center"
                              class="bg"
                              valign="top"
                              width="100%"
                            >
                              <table
                                cellpadding="3"
                                cellspacing="1"
                                width="100%"
                              >
                                <tbody>
                                  <tr>
                                    <td width="30%" class="bgn"><b>RUC</b></td>
                                    <td width="5%" class="bgn">:</td>
                                    <td width="70%" class="bgn">20999999990</td>
                                  </tr>
                                  <tr>
                                    <td width="30%" class="bgn">
                                      <b> Tipo de comprobante</b>
                                    </td>
                                    <td width="5%" class="bgn">:</td>
                                    <td width="70%" class="bgn">
                                      <select
                                        id="tip_doc"
                                        class="bg"
                                        name="tip_doc"
                                      >
                                        <option value="">
                                          -- Seleccione --
                                        </option>
                                        <option value="00 - Factura">
                                          00 - Factura
                                        </option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width="30%" class="bgn">
                                      <b> Número de serie</b>
                                    </td>
                                    <td width="5%" class="bgn">:</td>
                                    <td width="70%" class="bgn">
                                      <input
                                        type="text"
                                        class="form-text"
                                        name="serie"
                                        maxlength="4"
                                        tabindex="3"
                                        onblur="completar()"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width="30%" class="bgn">
                                      <b> Número del comprobante</b>
                                    </td>
                                    <td width="5%" class="bgn">:</td>
                                    <td width="70%" class="bgn">
                                      <input
                                        type="text"
                                        class="form-text"
                                        name="correlativo"
                                        maxlength="15"
                                        tabindex="4"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width="30%" class="bgn">
                                      <b> Fecha de emisión</b>
                                    </td>
                                    <td width="5%" class="bgn">:</td>
                                    <td width="70%" class="bgn">
                                      <input
                                        type="text"
                                        name="myDateFrom"
                                        maxlength="10"
                                        class="form-text"
                                        tabindex="4"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width="30%" class="bgn">
                                      <b> Número de autorización</b>
                                    </td>
                                    <td width="5%" class="bgn">:</td>
                                    <td width="70%" class="bgn">
                                      <input
                                        type="text"
                                        class="form-text"
                                        name="autorizacion"
                                        maxlength="15"
                                        tabindex="8"
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
            <br />
          </div>
          <br />
          <div id="detalle" class="detalle">
            <div class="detalle-izquierda">
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
            <div class="total-detalle">
              <p><b>Sub total: </b><input /></p>
              <p><b>Descuentos: </b><input /></p>
              <p><b>IGV: </b><input /></p>
              <p><b>Anticipios: </b><input /></p>
              <p><b>Otros Tributos: </b><input /></p>
              <p><b>Importe Total: </b><input /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <el-dialog title="Cargar documentos" :visible.sync="dialogFormVisible">
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button
            type="primary"
            @click="
              dialogFormVisible = false;
              mostrarFactura = true;
            "
            >Confirm</el-button
          >
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
// import moment from "moment";
import TituloHeader from "@/components/utils/TituloHeader.vue";
// import axios from "axios";
export default {
  components: {
    TituloHeader,
  },
  data() {
    return {
      dialogFormVisible: false,
      mostrarFactura: null,
      tableData: null,
      fileList: [],
      fileListZIP: [],
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `El límite es 3, haz seleccionado ${
          files.length
        } archivos esta vez, añade hasta ${files.length + fileList.length}`
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.contenedor-principal {
  width: 100%;
  align-content: center;
}

.body-registro {
  width: 90%;
  box-shadow: 3px 2px 10px #c7c7c7;
  /* border: 1px solid #b0b0b0; */
  box-sizing: border-box;
  border-radius: 10px;
  background-color: white;
}
.cabecera {
  margin-left: 30px;
  margin-right: 30px;
  border-bottom: 3px solid rgb(225, 225, 228);
  columns: 2;
}
.cabecera-detalle {
  border: 3px solid #b0b0b0;
}
.cuerpo {
  margin-left: 30px;
  margin-right: 30px;
  border-bottom: 3px solid rgb(225, 225, 228);
}
.detalle {
  margin-left: 30px;
  margin-right: 30px;
  columns: 2;
}
.total-detalle {
  border: 1px solid #b0b0b0;
}
</style>>
