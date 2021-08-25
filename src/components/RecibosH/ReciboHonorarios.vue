<template>
  <div class="component">
    <titulo-header>Registre su recibo por Honorarios</titulo-header>
    <div class="contenido">
      <div class="ml-5" style="text-align: left">
        <table width="80%">
          <tbody>
            <tr>
              <td>
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
                </div>
              </td>
              <td>
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
                  </el-upload>
                </div>
              </td>
              <td>
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
                  </el-upload>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <div style="width: 70vw; text-align: right">
        <div class="mx-5">
          <el-button type="primary" @click="validarCargaFiles"
            >Cargar Recibo
          </el-button>
          <el-button
            :disabled="btnEnviar"
            type="success"
            @click="validacionCargaFactura"
            >Enviar</el-button
          >
        </div>
      </div>
      <hr />
      <div  v-if="mostrarFactura" class="pie-factura mx-5" style="max-width: 60vw; display: flex">
        <table>
          <thead>
            <tr>
              <td><label class="mr-5">Nro. de Orden</label></td>
              <td>
                <el-input
                  :disabled="disabledOrden"
                  v-model="ordenNumeroInput"
                  @keypress.native="btnEnviar = false"
                ></el-input>
              </td>
              <td><label class="mx-5">Nro. de Contrato</label></td>
              <td>
                <el-input
                  :disabled="disabledContrato"
                  v-model="ordenContratoInput"
                  @keypress.native="btnEnviar = false"
                ></el-input>
              </td>
            </tr>
          </thead>
        </table>
      </div>
      <br/><br/>
      <div class="recibo-honorarios" v-if="mostrarFactura">
        <div class="cabecera">
          <table width="100%">
            <tr style="margin-top: 15px" >
              <td>
                <h4>{{jsonFormulario.proveedorNombre}}</h4>
                <p>{{jsonFormulario.proveedorDireccion}}</p>
                <p><b>TELEFONO</b> {{jsonFormulario.proveedorTelefono}}</p>
              </td>
              <td style="border: solid; margin: 10px">
                <h4><b>RUC</b> {{jsonFormulario.proveedorNumeroDocumento}}</h4>
                <h4><b>RECIBO POR HONORARIOS ELECTRONICO</b></h4>
                <h3>Nro: {{jsonFormulario.serie+" - "+jsonFormulario.numero}}</h3>
              </td>
            </tr>
            <tr style="margin-top: 15px" >
              <td class="my-5" colspan="2" style="text-align: left">
                <p><b>Recibí de:</b> {{jsonFormulario.enteContratante}} </p>
                <p><b>Identificado con</b> {{jsonFormulario.enteTipoDocumento}} &nbsp;<b style="margin-left: 30px">número</b> {{jsonFormulario.enteNroDocumento}}</p>
                <p><b>Domiciliado en</b> {{jsonFormulario.enteDireccion}}</p>
                <p><b>La suma</b> {{jsonFormulario.montoRecibidoTexto}}</p>
                <p><b>Por concepto de</b> {{jsonFormulario.concepto}} </p>
                <p><b>Observación</b> {{jsonFormulario.observacion}}</p>
                <p><b>Inciso</b> {{jsonFormulario.incisoTipo + "  " + jsonFormulario.incisoDescripcion}}</p>
                <p><b>Fecha de emisión</b> {{jsonFormulario.fechaEmisionDia}} <b>de</b> {{jsonFormulario.fechaEmisionMes}} <b>del</b> {{jsonFormulario.fechaEmisionAnio}}</p>
              </td>
            </tr>
            <tr style="margin-top: 15px" >
              <td>
                <br/> 
              </td>
              <td>
                <div class="total-detalle">
                  <br />
                  <table width="60%" style="margin: auto">
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
                        <td class="alinieado-izquierda"><b>Total Neto Recibido </b></td>
                        <td><b> : </b></td>
                        <td class="alinieado-derecha">
                          {{ jsonFormulario.importeTotal }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TituloHeader from "@/components/utils/TituloHeader.vue";
import axios from "axios";
export default {
  components: {
    TituloHeader,
  },
  data() {
    return {
      cargando: false,
      btnEnviar: true,
      ordenNumeroInput: null,
      ordenContratoInput: null,
      mostrarFactura: null,
      disabledContrato: null,
      disabledOrden: null,
      jsonFormulario:{}
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
      
          if(!this.cargando)this.cargando = true;
      const url =
        "http://localhost:8090/api/admin/crear-recibo-honorarios-proveedor";
      let dataPost = new FormData();
      if(idFacturaGenerada!= null)dataPost.append("archivoPdf", this.$refs.uploadPdf.uploadFiles[0].raw);
      dataPost.append("archivoZip", this.$refs.uploadZip.uploadFiles[0].raw);
      if(idFacturaGenerada!= null)dataPost.append("idDocumento", idFacturaGenerada);
      if(idFacturaGenerada!= null  && this.$refs.uploadInforme.uploadFiles.length > 0)dataPost.append("archivoInforme", this.$refs.uploadZip.uploadFiles[0].raw);
      await axios
        .post(url, dataPost)
        .then((response) => {
          this.jsonFormulario= {};
          this.jsonFormulario = response.data.resultado;
          // if(this.jsonFormulario.proveedorNumeroDocumento!=localStorage.getItem("numeroDocumento")){
          //   return this.modal("info", "El recibo ingresada no corresponde a "+localStorage.getItem("nombreUsuario"),"");
          // }
          this.btnEnviar = false;
          this.mostrarFactura = true;
        })
        .catch((e) => {
          console.log("errro" + e);
          if(idFacturaGenerada!= null){
            this.modal("info", "No se pudo guardar documentos", "");
          }else{
            this.modal("info", "No se pudo procesar documento electrónico", "");
          }
        })
        .finally(() => {
          this.cargando = false;
          if(idFacturaGenerada != null){
            this.$refs.uploadZip.clearFiles();
            this.$refs.uploadPdf.clearFiles();
            this.$refs.uploadInforme.clearFiles();
            this.$refs.uploadGuia.clearFiles();
            this.btnEnviar = true;
          }
        });
    },
    validacionCargaFactura() {
      this.jsonFormulario.ordenNumero = this.ordenNumeroInput
      this.jsonFormulario.ordenContrato = this.ordenContratoInput
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
        this.modal("info","Ingrese número de orden y/o contrato", "");
        return; 
      } else {
        this.btnEnviar = true;
        this.cargando = true;
        this.guardarFacturaJson();
      }
    },
    guardarFacturaJson() {
      const url = "http://localhost:8090/api/admin/guardar-comprobante";
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
        .catch((e)=>{
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
    modal(icono, titulo, texto){
      this.$swal({
          icon: icono,
          title: titulo,
          text: texto,
        });
      if(this.cargando)this.cargando=false;
    },
  },
};
</script>

<style lang="scss" scoped>
p{
  margin-top: 8px;
}
.component {
  min-height: 98vh;
  max-width: 100%;
}
  // background-color: red;
.recibo-honorarios {
  height: 20vh;
  width: 60%;
}
</style>