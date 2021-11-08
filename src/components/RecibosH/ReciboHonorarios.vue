<template>
  <div class="neo-recibos">
    <titulo-header>Registre su recibo por Honorarios</titulo-header>
    <!-- <div class="contenido"> -->
    <div class="container-body">
      <div class="ml-5" style="text-align: left">
        <el-row :gutter="10">
          <el-col :md="8">
            <div>
              <h3 class="mb-2">Documento PDF</h3>
              <el-upload
                ref="uploadPdf"
                :auto-upload="false"
                accept=".pdf"
                :limit="1"
                action="https://jsonplaceholder.typicode.com/posts/"
              >
                <el-button slot="trigger" size="small" type="primary"
                  >Selecciona un archivo</el-button
                >
              </el-upload>
              <template
                v-if="tokenTMP != null && archivos.archivoGuia == 1"
              >
                <el-button
                  @click="verFile(4, tokenTMP)"
                  size="small"
                  type="warning"
                  >Ver</el-button
                >
              </template>
            </div>
          </el-col>
          <el-col :md="8">
            <div>
              <h3 class="mb-2">Documento XML</h3>
              <el-upload
                ref="uploadZip"
                :auto-upload="false"
                accept=".zip, .xml"
                :limit="1"
                action="https://jsonplaceholder.typicode.com/posts/"
              >
                <el-button slot="trigger" size="small" type="primary"
                  >Selecciona un archivo</el-button
                >
                <template
                  v-if="tokenTMP != null && archivos.archivoGuia == 1"
                >
                  <el-button
                    @click="verFile(4, tokenTMP)"
                    size="small"
                    type="warning"
                    >Ver</el-button
                  >
                </template>
              </el-upload>
            </div>
          </el-col>
          <el-col :md="8">
            <div>
              <h3 class="mb-2">Informe técnico</h3>
              <el-upload
                ref="uploadInforme"
                :auto-upload="false"
                accept=".pdf"
                :limit="1"
                action="https://jsonplaceholder.typicode.com/posts/"
              >
                <el-button slot="trigger" size="small" type="primary"
                  >Selecciona un archivo</el-button
                >
                <template
                  v-if="tokenTMP != null && archivos.archivoGuia == 1"
                >
                  <el-button
                    @click="verFile(4, tokenTMP)"
                    size="small"
                    type="warning"
                    >Ver</el-button
                  >
                </template>
              </el-upload>
            </div>
          </el-col>
        </el-row>
      </div>
      <hr />
      <div style="width: 70vw; text-align: right">
        
        <el-row :gutter="10">
          <el-button type="primary" @click="validarCargaFiles"
            >Cargar Recibo
          </el-button>
          <el-button
            :disabled="btnEnviar"
            type="success"
            @click="validacionCargaFactura"
            >Enviar</el-button
          >
        </el-row>
      </div>
      <hr />
      <div
        v-if="mostrarFactura"
        class="pie-factura mx-5"
      >
        <div
          class="ml-5 titulo" 
        >
          <h2><b>Vista previa</b></h2>
        </div>
        <el-row :gutter="10">
          <el-col :md="12">
            <el-row>
              <el-col :md="12">
                <label class="mr-2"><b>Nro. de Orden</b></label>
              </el-col>
              <el-col :md="12">
                <el-input
                  :disabled="disabledOrden"
                  v-model="ordenNumeroInput"
                  @keypress.native="btnEnviar = false"
                ></el-input>
              </el-col>
            </el-row>
          </el-col>
          <el-col :md="12">
            <el-row>
              <el-col :md="12">
                <label class="mx-2"><b>Nro. de Contrato</b></label>
              </el-col>
              <el-col :md="12">
                <el-input
                  :disabled="disabledContrato"
                  v-model="ordenContratoInput"
                  @keypress.native="btnEnviar = false"
                ></el-input>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <br />
      <div class="body-comprobante" v-if="mostrarFactura">
        <br />
        <el-row :gutter="10">
          <el-col :md="12">
            <h4>{{ jsonFormulario.proveedorNombre }}</h4>
            <p>{{ jsonFormulario.proveedorDireccion }}</p>
            <p><b>TELEFONO</b> {{ jsonFormulario.proveedorTelefono }}</p>
          </el-col>
          <el-col :md="12" style="border: solid;">
              <h4>
                <b>RUC</b> {{ jsonFormulario.proveedorNumeroDocumento }}
              </h4>
              <h4><b>RECIBO POR HONORARIOS ELECTRONICO</b></h4>
              <h3>
                Nro:
                {{ jsonFormulario.serie + " - " + jsonFormulario.numero }}
              </h3>
          </el-col>
        </el-row>
        <div class="cabecera">
          <el-row>
            <el-col :md="20">
              <p><b>Recibí de:</b> {{ jsonFormulario.enteContratante }}</p>
            </el-col>
            <el-col :md="20">
                <p>
                  <b>Identificado con</b>
                  {{ jsonFormulario.enteTipoDocumento }} &nbsp;<b
                    style="margin-left: 30px"
                    >número</b
                  >
                  {{ jsonFormulario.enteNroDocumento }}
                </p>
            </el-col>
            <el-col :md="20">
                <p><b>Domiciliado en</b> {{ jsonFormulario.enteDireccion }}</p>
            </el-col>
            <el-col :md="20">
                <p><b>La suma</b> {{ jsonFormulario.montoRecibidoTexto }}</p>
            </el-col>
            <el-col :md="20">
                <p><b>Por concepto de</b> {{ jsonFormulario.concepto }}</p>
            </el-col>
            <el-col :md="20">
                <p><b>Observación</b> {{ jsonFormulario.observacion }}</p>
            </el-col>
            <el-col :md="20">
                <p>
                  <b>Inciso</b>
                  {{
                    jsonFormulario.incisoTipo +
                    "  " +
                    jsonFormulario.incisoDescripcion
                  }}
                </p>
            </el-col>
            <el-col :md="20">
                <p>
                  <b>Fecha de emisión</b> {{ jsonFormulario.fechaEmisionDia }}
                  <b>de</b> {{ jsonFormulario.fechaEmisionMes }} <b>del</b>
                  {{ jsonFormulario.fechaEmisionAnio }}
                </p>
            </el-col>
          </el-row>
          <div class="footer"> 
            <table width="40%">
              <tbody>
                <tr>
                  <td class="alinieado-izquierda">
                    <div><b>Total por honorarios </b></div>
                  </td>
                  <td><b> : </b></td>
                  <td class="alinieado-derecha">
                    <div>{{ jsonFormulario.importeSubTotal }}</div>
                  </td>
                </tr>
                <tr>
                  <td class="alinieado-izquierda">
                    <div><b>Retención (8 %) IR </b></div>
                  </td>
                  <td><b> : </b></td>
                  <td class="alinieado-derecha">
                    <div>{{ jsonFormulario.importeIgv }}</div>
                  </td>
                </tr>
                <tr>
                  <td class="alinieado-izquierda">
                    <b>Total Neto Recibido </b>
                  </td>
                  <td><b> : </b></td>
                  <td class="alinieado-derecha">
                    {{ jsonFormulario.importeTotal }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TituloHeader from "@/components/utils/TituloHeader.vue";
import axios from "axios";
import constantes from "../../store/Constantes";
import '../../assets/style/recibos.scss';
export default {
  components: {
    TituloHeader,
  },
  data() {
    return {
      tokenTMP: null,
      cargando: false,
      btnEnviar: true,
      ordenNumeroInput: null,
      ordenContratoInput: null,
      mostrarFactura: null,
      disabledContrato: null,
      disabledOrden: null,
      jsonFormulario: {},
    };
  },
  methods: {
    validarCargaFiles() {
      this.mostrarFactura = false;
      this.ordenNumeroInput = null;
      this.ordenContratoInput = null;
      this.facturaJson = {};
      if (this.$refs.uploadZip.uploadFiles.length == 0) {
        this.modal("info", "Seleccione archivo xml", "");
        return;
      } else if (this.$refs.uploadPdf.uploadFiles.length == 0) {
        this.modal("info", "Seleccione archivo pdf", "");
        return;
      } else if (this.$refs.uploadInforme.uploadFiles.length == 0) {
        this.modal("info", "Debe ingresar informe técnico", "");
        return;
      } else {
        this.cargando = true;
        this.guardarArchivosAdjuntos();
      }
    },
    async guardarArchivosAdjuntos(idFacturaGenerada) {
      if (!this.cargando) this.cargando = true;
      const url =
        constantes.rutaAdmin+"/crear-recibo-honorarios-proveedor";
      let dataPost = new FormData();
      if (idFacturaGenerada != null)
        dataPost.append("archivoPdf", this.$refs.uploadPdf.uploadFiles[0].raw);
      dataPost.append("archivoZip", this.$refs.uploadZip.uploadFiles[0].raw);
      if (idFacturaGenerada != null)
        dataPost.append("idDocumento", idFacturaGenerada);
      if (
        idFacturaGenerada != null &&
        this.$refs.uploadInforme.uploadFiles.length > 0
      )
        dataPost.append(
          "archivoInforme",
          this.$refs.uploadZip.uploadFiles[0].raw
        );
      await axios
        .post(url, dataPost)
        .then((response) => {
          this.jsonFormulario = {};
          this.jsonFormulario = response.data.resultado;
          // if(this.jsonFormulario.proveedorNumeroDocumento!=localStorage.getItem("numeroDocumento")){
          //   return this.modal("info", "El recibo ingresada no corresponde a "+localStorage.getItem("nombreUsuario"),"");
          // }
          this.btnEnviar = false;
          this.mostrarFactura = true;
        })
        .catch((e) => {
          console.log("errro" + e);
          if (idFacturaGenerada != null) {
            this.modal("info", "No se pudo guardar documentos", "");
          } else {
            this.modal("info", "No se pudo procesar documento electrónico", "");
          }
        })
        .finally(() => {
          this.cargando = false;
          if (idFacturaGenerada != null) {
            this.$refs.uploadZip.clearFiles();
            this.$refs.uploadPdf.clearFiles();
            this.$refs.uploadInforme.clearFiles();
            this.$refs.uploadGuia.clearFiles();
            this.btnEnviar = true;
          }
        });
    },
    validacionCargaFactura() {
      this.jsonFormulario.ordenNumero = this.ordenNumeroInput;
      this.jsonFormulario.ordenContrato = this.ordenContratoInput;
      if (this.$refs.uploadZip.uploadFiles.length == 0) {
        this.modal("info", "Seleccione archivo xml", "");
        return;
      } else if (this.$refs.uploadPdf.uploadFiles.length == 0) {
        this.modal("info", "Seleccione archivo pdf", "");
        return;
      } else if (
        (this.jsonFormulario.ordenNumero == null ||
          this.jsonFormulario.ordenNumero.length == 0) &&
        (this.jsonFormulario.ordenContrato == null ||
          this.jsonFormulario.ordenContrato.length == 0)
      ) {
        this.modal("info", "Ingrese número de orden y/o contrato", "");
        return;
      } else {
        this.btnEnviar = true;
        this.cargando = true;
        this.guardarFacturaJson();
      }
    },
    guardarFacturaJson() {
      const url = constantes.rutaAdmin+"/guardar-comprobante";
      axios
        .post(url, this.jsonFormulario)
        .then((response) => {
          this.$swal({
            icon: "success",
            title: "Registro exitoso",
          });
          console.log("Comprobante detalle exitoso");
          console.log(response.data);
          console.log(response.data.resultado);
          this.guardarArchivosAdjuntos(response.data.resultado);
          this.mostrarFactura = false;
        })
        .catch((e) => {
          this.$swal({
            icon: "info",
            title: e.response.data.mensajeError,
          });
        })
        .finally(() => {
          this.cargando = false;
          this.btnEnviar = true;
        });
    },
    modal(icono, titulo, texto) {
      this.$swal({
        icon: icono,
        title: titulo,
        text: texto,
      });
      if (this.cargando) this.cargando = false;
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  margin-top: 8px;
}
.component {
  max-width: 100%;
}
</style>