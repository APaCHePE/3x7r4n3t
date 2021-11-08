<template>
  <div class="neo-facturas ">
    <div>
      <titulo-header>Registre su factura electrónica</titulo-header>
    </div>
    <div class="container-body">
      <div class="cabecera-factura">
        <el-row :gutter="10">
          <el-col :md="12">
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
                <template v-if="tokenTMP != null">
                  <el-button
                    @click="verFile(1, tokenTMP)"
                    size="small"
                    type="warning"
                    >Ver</el-button
                  >
                </template>
              </el-upload>
            </div>
          </el-col>
          <el-col :md="12">
            <div>
              <h3 class="mb-2">Documento ZIP/XML</h3>
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
                <template v-if="tokenTMP != null">
                  <el-button
                    @click="verFile(2, tokenTMP)"
                    size="small"
                    type="warning"
                    >Ver</el-button
                  >
                </template>
              </el-upload>
            </div>
          </el-col>
        </el-row>
        <hr />
        <el-row :gutter="10">
          <el-col :md="12">
            <div>
              <h3 class="mb-2">Guía*</h3>
              <el-upload
                ref="uploadGuia"
                :auto-upload="false"
                accept=".pdf"
                :limit="1"
                action="https://jsonplaceholder.typicode.com/posts/"
              >
                <el-button slot="trigger" size="small" type="primary"
                  >Selecciona un archivo</el-button
                >
                <template v-if="tokenTMP != null && archivos.archivoGuia ==1">
                  <el-button
                    @click="verFile(3, tokenTMP)"
                    size="small"
                    type="warning"
                    >Ver</el-button
                  >
                </template>
              </el-upload>
            </div>
          </el-col>
          <el-col :md="12">
            <div>
              <h3 class="mb-2">Informe técnico**</h3>
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
                <template v-if="tokenTMP != null && archivos.archivoInforme == 1">
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
          <el-col :md="24" class="mt-2">
            <span style="color: red"
              >*Si el producto entregado es un bien adjunte guía</span
            ><br />
            <span style="color: red"
              >**Si el producto es un servicio adjunte informe técnico</span>
          </el-col>
        </el-row>
        <hr />
      </div>
      <div class="botonera-factura" style="text-align: right">
        <el-row :gutter="10">
          <el-button type="primary" @click="validarCargaFiles"
            >Cargar Factura
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
        style="display: flex"
      >
        <el-row :gutter="10">
          <el-col :md="12">
            <el-row>
              <el-col :md="12">
                <label class="mr-5"><b>Nro. de Orden</b></label>
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
                <label class="mx-5"><b>Nro. de Contrato</b></label>
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
      <div v-if="mostrarFactura">
        <div
          class="ml-5 titulo"
        >
          <h2><b>Vista previa</b></h2>
        </div>
        <div>
          <div class="body-comprobante">
            <br />
            <div id="cabecera" class="cabecera">
              <div style="text-align: left">
                <p><b> </b>{{ facturaJson.proveedorNombre }}</p>
                <p>
                  <b>{{ facturaJson.proveedorNombreComercial }} </b>
                </p>
                <p><b> </b>{{ facturaJson.proveedorDireccion }}</p>
                <p><b> </b>{{ facturaJson.proveedorZona }}</p>
              </div>
              <br />
              <div class="cabecera-detalle">
                <p><b>FACTURA</b></p>
                <p><b>RUC : </b>{{ facturaJson.codigoCliente }}</p>
                <p><b></b>{{ facturaJson.serie + " - " + facturaJson.numero }}</p>
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
                                  class="cabecera-factura"
                                  cellpadding="3"
                                  cellspacing="1"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr>
                                      <td width="30%" class="bgn">
                                        <b>Fecha de Emisión</b>
                                      </td>
                                      <td width="5%" class="bgn">:</td>
                                      <td width="70%" class="bgn">
                                        {{
                                          transformarFecha(
                                            facturaJson.fechaEmision
                                          )
                                        }}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td width="30%" class="bgn">
                                        <b>Fecha de Vencimiento</b>
                                      </td>
                                      <td width="5%" class="bgn">:</td>
                                      <td width="70%" class="bgn">
                                        {{
                                          transformarFecha(
                                            facturaJson.fechaVencimiento
                                          )
                                        }}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td width="30%" class="bgn">
                                        <b> Señor (es)</b>
                                      </td>
                                      <td width="5%" class="bgn">:</td>
                                      <td width="70%" class="bgn">
                                        {{ facturaJson.clienteEmitido }}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td width="30%" class="bgn">
                                        <b> RUC</b>
                                      </td>
                                      <td width="5%" class="bgn">:</td>
                                      <td width="70%" class="bgn">
                                        {{
                                          facturaRecibida[
                                            "cac:AccountingCustomerParty"
                                          ]["cac:Party"][
                                            "cac:PartyIdentification"
                                          ]["cbc:ID"].content
                                        }}
                                      </td>
                                    </tr>
                                    <tr>
                                      <td width="30%" class="bgn">
                                        <b>Tipo de Moneda</b>
                                      </td>
                                      <td width="5%" class="bgn">:</td>
                                      <td width="70%" class="bgn">
                                        {{
                                          facturaRecibida[
                                            "cbc:DocumentCurrencyCode"
                                          ].content
                                        }}
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
            <div class="div-items mx-3">
              <table class="tabla-items table table-hover table-sm mb-2">
                <thead width="100%">
                  <tr>
                    <th class="text-center">Cantidad</th>
                    <th class="text-center">Unidad Medida</th>
                    <th class="text-center">Código</th>
                    <th class="text-center">Descripción</th>
                    <th class="text-center">Valor Unitario</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(itemJ, index) of facturaJson.listaComprobanteDetalle"
                    :key="'items' + index"
                  >
                    <!-- <tr> -->
                    <td>
                      {{ itemJ.cantidad }}
                    </td>
                    <td>{{ itemJ.unidadMedida }}</td>
                    <td>{{ itemJ.codigo }}</td>
                    <td style="text-align: left">
                      <div>{{ itemJ.descripcion }}</div>
                    </td>
                    <td style="text-align: right">
                      <div>{{ itemJ.valorUnitario }}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <div id="detalle" class="detalle">
              <div class="detalle-izquierda">
                <br /><br /><br />
                <label>{{ facturaJson.descripcionImporte }}</label>
                <br /><br /><br /><br /><br /><br /><br /><br />
              </div>
              <div class="total-detalle">
                <br />
                <table width="60%" style="margin: auto">
                  <tbody>
                    <tr>
                      <td class="alinieado-izquierda">
                        <div><b>Sub total Ventas </b></div>
                      </td>
                      <td><b> : </b></td>
                      <td class="alinieado-derecha">
                        <div>{{ facturaJson.importeSubTotal }}</div>
                      </td>
                    </tr>
                    <tr>
                      <td class="alinieado-izquierda">
                        <div><b>Anticipios </b></div>
                      </td>
                      <td><b> : </b></td>
                      <td class="alinieado-derecha">
                        <div>{{ facturaJson.importeAnticipios }}</div>
                      </td>
                    </tr>
                    <tr>
                      <td class="alinieado-izquierda">
                        <div><b>Descuentos </b></div>
                      </td>
                      <td><b> : </b></td>
                      <td class="alinieado-derecha">
                        <div>{{ facturaJson.importeAnticipios }}</div>
                      </td>
                    </tr>
                    <tr>
                      <td class="alinieado-izquierda"><b>Valor de Ventas </b></td>
                      <td><b> : </b></td>
                      <td class="alinieado-derecha">
                        {{ facturaJson.importeValorVenta }}
                      </td>
                    </tr>
                    <tr>
                      <td class="alinieado-izquierda"><b>IGV </b></td>
                      <td><b> : </b></td>
                      <td class="alinieado-derecha">
                        {{ facturaJson.importeIgv }}
                      </td>
                    </tr>
                    <tr>
                      <td class="alinieado-izquierda"><b>Otros Cargos </b></td>
                      <td><b> : </b></td>
                      <td class="alinieado-derecha">
                        {{ facturaJson.importeOtrosTributos }}
                      </td>
                    </tr>
                    <tr>
                      <td class="alinieado-izquierda"><b>Importe Total </b></td>
                      <td><b> : </b></td>
                      <td class="alinieado-derecha">
                        {{ facturaJson.importeTotal }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <br />
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
              >Confirmar</el-button
            >
          </span>
        </el-dialog>
      </div>
      <div>
        <el-dialog :visible.sync="cargando" width="30%">
          <div
            class="spinner-border"
            style="width: 3rem; height: 3rem"
            role="status"
          >
            <span class="sr-only">Loading...</span>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
// import moment from "moment";
import TituloHeader from "@/components/utils/TituloHeader.vue";
import axios from "axios";
import constantes from "../../store/Constantes.js";
import '../../assets/style/facturas.scss';
export default {
  components: {
    TituloHeader,
  },
  data() {
    return {
      cargando: false,
      factura: null,
      dialogFormVisible: false,
      mostrarFactura: null,
      tableData: null,
      fileList: [],
      fileListZIP: [],
      orden: null,
      contrato: null,
      facturaRecibida: {},
      facturaEnvio: {},
      disabledOrden: true,
      disabledContrato: true,
      facturaJson: {},
      btnEnviar: true,
      ordenNumeroInput: null,
      ordenContratoInput: null,
      tokenTMP: null,
      archivos: {
        archivoPdf: 0,
        archivoZip: 0,
        archivoGuia: 0,
        archivoInforme: 0,
      },
    };
  },
  methods: {
    verFile(param, token) {
      console.log("mostrando file clickeado");
      var urlFiles =
        constantes.rutaAdmin +
        "/recuperarEntidadArchivo/1/0/" +
        param +
        "/" +
        token;
      console.log(urlFiles);
      window.open(urlFiles, "_blank");
    },
    validarCargaFiles() {
      this.mostrarFactura = false;
      this.ordenNumeroInput = null;
      this.ordenContratoInput = null;
      this.facturaJson = {};
      if (this.$refs.uploadZip.uploadFiles.length == 0) {
        this.modal("info", "Seleccione archivo .zip", "");
        return;
      } else if (this.$refs.uploadPdf.uploadFiles.length == 0) {
        this.modal("info", "Seleccione archivo .pdf", "");
        return;
      } else if (
        this.$refs.uploadInforme.uploadFiles.length == 0 &&
        this.$refs.uploadGuia.uploadFiles.length == 0
      ) {
        this.modal("info", "Debe ingresar Informe técnico o Guía", "");
        return;
      } else {
        this.archivos.archivoInforme = 0;
        this.archivos.archivoGuia = 0;
        this.guardarArchivosAdjuntos();
        this.cargando = true;
      }
    },
    async guardarArchivosAdjuntos() {
      const url =
        constantes.rutaAdmin+"/crear-documento-comprobante-proveedor";
      let dataPost = new FormData();
      dataPost.append("archivoPdf", this.$refs.uploadPdf.uploadFiles[0].raw);
      dataPost.append("archivoZip", this.$refs.uploadZip.uploadFiles[0].raw);
      if (this.$refs.uploadInforme.uploadFiles.length > 0) {
        dataPost.append(
          "archivoInforme",
          this.$refs.uploadInforme.uploadFiles[0].raw
        );
        this.archivos.archivoInforme = 1;
      }
      if (this.$refs.uploadGuia.uploadFiles.length > 0) {
        dataPost.append(
          "archivoGuia",
          this.$refs.uploadGuia.uploadFiles[0].raw
        );
        this.archivos.archivoGuia = 1;
      }

      let facRecibida = null;
      await axios
        .post(url, dataPost)
        .then((response) => {
          facRecibida = response.data.resultado.factura.Invoice;
          this.facturaRecibida = response.data.resultado.factura.Invoice;
          this.tokenTMP = response.data.resultado.token;
          this.btnEnviar = false;
        })
        .catch((e) => {
          console.log("errro" + e);
          facRecibida = e.response.data;
        })
        .finally(() => {
          this.cargando = false;
          // this.mostrarFactura=false;
          // this.$refs.uploadZip.clearFiles();
          // this.$refs.uploadPdf.clearFiles();
          // this.$refs.uploadInforme.clearFiles();
        });
      this.rellenarJsonFactura(facRecibida);
    },
    transformarFecha(fechaRecibida) {
      if (fechaRecibida == null) return fechaRecibida;
      fechaRecibida = fechaRecibida.trim();
      fechaRecibida =
        fechaRecibida.substring(8, 10) +
        "-" +
        fechaRecibida.substring(5, 8) +
        "-" +
        fechaRecibida.substring(0, 4);
      return fechaRecibida;
    },
    validacionCargaFactura() {
      this.btnEnviar = true;
      this.facturaJson.ordenNumero = this.ordenNumeroInput;
      this.facturaJson.ordenContrato = this.ordenContratoInput;
      if (this.$refs.uploadZip.uploadFiles.length == 0) {
        this.modal("info", "Seleccione archivo zip", "");
        return;
      } else if (this.$refs.uploadPdf.uploadFiles.length == 0) {
        this.modal("info", "Seleccione archivo pdf", "");
        return;
      } else if (
        this.$refs.uploadInforme.uploadFiles.length == 0 &&
        this.$refs.uploadGuia.uploadFiles.length == 0
      ) {
        this.modal("info", "Debe ingresar informe técnico o guía", "");
        return;
      } else if (
        (this.facturaJson.ordenNumero == null ||
          this.facturaJson.ordenNumero.length == 0) &&
        (this.facturaJson.ordenContrato == null ||
          this.facturaJson.ordenContrato.length == 0)
      ) {
        this.modal("info", "Ingrese número de orden y/o contrato", "");
        return;
      } else {
        this.cargando = true;
        this.guardarFacturaJson();
      }
    },
    guardarFacturaJson() {
      const url = constantes.rutaAdmin+"/guardar-comprobante";
      axios
        .post(url, this.facturaJson)
        .then((response) => {
          this.$swal({
            icon: "success",
            title: "Registro exitoso",
          });
          console.log("Comprobante detalle exitoso");
          console.log(response.data.resultado);
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

    rellenarJsonFactura(facturaRecibida) {
      // if(facturaRecibida["cac:AccountingSupplierParty"]["cac:Party"]["cac:PartyIdentification"]["cbc:ID"].content != localStorage.getItem("User")){
      //   return this.modal("info", "La factura ingresada no corresponde a "+localStorage.getItem("nombreUsuario"),"");
      // }
      // CABECERA
      this.facturaJson["proveedorId003TipoDocumento"] = 1;
      this.facturaJson["id007TipoComprobante"] = 24;
      this.facturaJson["codigoCliente"] =
        facturaRecibida["cac:AccountingSupplierParty"]["cac:Party"][
          "cac:PartyIdentification"
        ]["cbc:ID"].content;
      this.facturaJson["proveedorNumeroDocumento"] =
        facturaRecibida["cac:AccountingSupplierParty"]["cac:Party"][
          "cac:PartyIdentification"
        ]["cbc:ID"].content;

      this.facturaJson.proveedorNombre =
        facturaRecibida["cac:AccountingSupplierParty"]["cac:Party"][
          "cac:PartyLegalEntity"
        ]["cbc:RegistrationName"];
      this.facturaJson.proveedorNombreComercial =
        facturaRecibida["cac:AccountingSupplierParty"]["cac:Party"][
          "cac:PartyLegalEntity"
        ]["cbc:RegistrationName"].length == 0
          ? this.facturaJson.proveedorNombre
          : facturaRecibida["cac:AccountingSupplierParty"]["cac:Party"][
              "cac:PartyLegalEntity"
            ]["cbc:RegistrationName"];

      this.facturaJson["id006TipoMoneda"] = 15;
      this.facturaJson["proveedorDireccion"] =
        facturaRecibida["cac:AccountingSupplierParty"]["cac:Party"][
          "cac:PartyLegalEntity"
        ]["cac:RegistrationAddress"]["cac:AddressLine"]["cbc:Line"];
      this.facturaJson["proveedorZona"] =
        facturaRecibida["cac:AccountingSupplierParty"]["cac:Party"][
          "cac:PartyLegalEntity"
        ]["cac:RegistrationAddress"]["cbc:District"] +
        " - " +
        facturaRecibida["cac:AccountingSupplierParty"]["cac:Party"][
          "cac:PartyLegalEntity"
        ]["cac:RegistrationAddress"]["cbc:CityName"] +
        " - " +
        facturaRecibida["cac:AccountingSupplierParty"]["cac:Party"][
          "cac:PartyLegalEntity"
        ]["cac:RegistrationAddress"]["cbc:CountrySubentity"];

      const guion = facturaRecibida["cbc:ID"].indexOf("-");
      this.facturaJson["serie"] = facturaRecibida["cbc:ID"].substring(0, guion);
      this.facturaJson["numero"] = facturaRecibida["cbc:ID"].substring(
        guion + 1,
        facturaRecibida["cbc:ID"].length
      );
      // SUB-CABECERA
      this.facturaJson["fechaEmision"] = facturaRecibida["cbc:IssueDate"];
      this.facturaJson["fechaVencimiento"] = facturaRecibida["cbc:DueDate"];
      this.facturaJson["clienteEmitido"] =
        facturaRecibida["cac:AccountingCustomerParty"]["cac:Party"][
          "cac:PartyLegalEntity"
        ]["cbc:RegistrationName"];
      this.ordenNumeroInput =
        facturaRecibida["cac:OrderReference"] != null
          ? facturaRecibida["cac:OrderReference"]["cbc:ID"]
          : null;
      if (this.ordenNumeroInput == null) {
        this.disabledOrden = false;
        this.disabledContrato = false;
      } else {
        this.disabledOrden = true;
        this.disabledContrato = true;
      }
      // LIST ITEMS
      this.facturaJson["listaComprobanteDetalle"] = [];
      if (Array.isArray(facturaRecibida["cac:InvoiceLine"])) {
        const arrayItems = facturaRecibida["cac:InvoiceLine"];
        arrayItems.forEach((item) => {
          let obj = {
            cantidad: item["cbc:InvoicedQuantity"].content,

            unidadMedida:
              item["cbc:Note"] != null ? item["cbc:Note"] : "UNIDAD",
            codigo: item["cac:Item"]["cac:SellersItemIdentification"]["cbc:ID"],
            descripcion: item["cac:Item"]["cbc:Description"],

            valorUnitario: item["cac:Price"]["cbc:PriceAmount"].content,
          };
          this.facturaJson["listaComprobanteDetalle"].push(obj);
        });
      } else {
        this.facturaJson["listaComprobanteDetalle"].push({
          cantidad:
            facturaRecibida["cac:InvoiceLine"]["cbc:InvoicedQuantity"].content,
          unidadMedida:
            facturaRecibida["cac:InvoiceLine"]["cbc:Note"] != null
              ? facturaRecibida["cac:InvoiceLine"]["cbc:Note"]
              : "UNIDAD",
          codigo:
            facturaRecibida["cac:InvoiceLine"]["cac:Item"][
              "cac:SellersItemIdentification"
            ]["cbc:ID"],
          descripcion:
            facturaRecibida["cac:InvoiceLine"]["cac:Item"]["cbc:Description"],
          valorUnitario:
            facturaRecibida["cac:InvoiceLine"]["cac:Price"]["cbc:PriceAmount"]
              .content,
        });
      }
      // PIE FACTURA
      this.facturaJson["descripcionImporte"] =
        facturaRecibida["cbc:Note"] != null
          ? facturaRecibida["cbc:Note"].content
          : "";
      this.facturaJson["importeSubTotal"] =
        facturaRecibida["cac:LegalMonetaryTotal"]["cbc:LineExtensionAmount"] !=
        null
          ? facturaRecibida["cac:LegalMonetaryTotal"]["cbc:LineExtensionAmount"]
              .content
          : 0.0 +
            (facturaRecibida["cac:LegalMonetaryTotal"]["cbc:PrepaidAmount"] !=
              null)
          ? facturaRecibida["cac:LegalMonetaryTotal"]["cbc:PrepaidAmount"]
              .content
          : 0.0 +
            (facturaRecibida["cac:LegalMonetaryTotal"][
              "cbc:AllowanceTotalAmount"
            ] !=
              null)
          ? facturaRecibida["cac:LegalMonetaryTotal"][
              "cbc:AllowanceTotalAmount"
            ].content
          : 0.0;
      this.facturaJson["importeAnticipios"] = 0.0;
      this.facturaJson["importeDescuentos"] =
        facturaRecibida["cac:LegalMonetaryTotal"]["cbc:AllowanceTotalAmount"] !=
        null
          ? facturaRecibida["cac:LegalMonetaryTotal"][
              "cbc:AllowanceTotalAmount"
            ].content
          : 0.0;
      this.facturaJson["importeValorVenta"] =
        facturaRecibida["cac:LegalMonetaryTotal"]["cbc:LineExtensionAmount"] !=
        null
          ? facturaRecibida["cac:LegalMonetaryTotal"]["cbc:LineExtensionAmount"]
              .content
          : 0.0;
      this.facturaJson["importeIsc"] =
        facturaRecibida["cac:TaxTotal"]["cac:TaxSubtotal"]["cbc:TaxAmount"] !=
        null
          ? facturaRecibida["cac:TaxTotal"]["cac:TaxSubtotal"]["cbc:TaxAmount"]
              .content
          : 0.0;
      this.facturaJson["importeIgv"] =
        facturaRecibida["cac:TaxTotal"]["cac:TaxSubtotal"]["cbc:TaxAmount"] !=
        null
          ? facturaRecibida["cac:TaxTotal"]["cac:TaxSubtotal"]["cbc:TaxAmount"]
              .content
          : 0.0;

      this.facturaJson["importeOtrosCargos"] = 0.0;
      this.facturaJson["importeOtrosTributos"] = 0.0;
      this.facturaJson["importeTotal"] = facturaRecibida[
        "cac:LegalMonetaryTotal"
      ]["cbc:PayableAmount"]
        ? facturaRecibida["cac:LegalMonetaryTotal"]["cbc:PayableAmount"].content
        : 0.0;

      this.mostrarFactura = true;
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
// .contenedor-factura {
//   label {
//     font-size: 14px;
//   }
//   hr {
//     width: 50vw !important;
//     position: relative;
//     float: left;
//   }
// }
.alinieado-derecha {
  text-align: right;
}
.alinieado-izquierda {
  text-align: left;
}
.pie-factura {
  display: flex;
  margin: 15px 15px 30px 15px;
}
.cabecera-factura {
  td {
    margin-top: 10px;
  }
}
.contenedor-principal {
  width: 100%;
  margin: auto;
  align-content: center;
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
  align-content: center;
  padding-bottom: 10px;
}
</style>>
