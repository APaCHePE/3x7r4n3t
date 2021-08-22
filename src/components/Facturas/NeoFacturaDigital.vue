t<template>
  <div class="contenedor-principal">
    <div>
      <titulo-header>Registre su factura digital</titulo-header>
    </div>
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
                <h3 class="mb-2">Documento ZIP</h3>
                <el-upload
                  ref="uploadZip"
                  :auto-upload="false"
                  accept=".zip"
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
          >Cargar Factura
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
            <td><label class="mr-5">Orden de Compra</label></td>
            <td>
              <el-input
                :disabled="disabledOrden"
                v-model="ordenNumeroInput"
                @change="btnEnviar = true"
              ></el-input>
            </td>
            <td><label class="mx-5">Nro. de Contrato</label></td>
            <td>
              <el-input
                :disabled="disabledContrato"
                v-model="ordenContratoInput"
                @change="btnEnviar = false"
              ></el-input>
            </td>
          </tr>
        </thead>
      </table>
    </div>
    <div v-if="mostrarFactura">
      <div
        class="ml-5"
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
                                      <b>Fecha de Vencimiento</b>
                                    </td>
                                    <td width="5%" class="bgn">:</td>
                                    <td width="70%" class="bgn">
                                      {{ facturaJson.fechaVencimiento }}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width="30%" class="bgn">
                                      <b>Fecha de Emisión</b>
                                    </td>
                                    <td width="5%" class="bgn">:</td>
                                    <td width="70%" class="bgn">
                                      {{ facturaJson.fechaEmision }}
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
                  <td>
                    {{ itemJ.descripcion }}
                  </td>
                  <td>
                    {{ itemJ.valorUnitario }}
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
</template>

<script>
// import moment from "moment";
import TituloHeader from "@/components/utils/TituloHeader.vue";
import axios from "axios";
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
    };
  },
  methods: {
    validarCargaFiles() {
      this.mostrarFactura = false;
      this.ordenNumeroInput = null;
      this.ordenContratoInput = null;
      this.facturaJson = {};
      if (this.$refs.uploadZip.uploadFiles.length == 0) {
        alert("Seleccione archivo .zip");
        return; 
      } else if (this.$refs.uploadPdf.uploadFiles.length == 0) {
        alert("Seleccione archivo .pdf");
        return; 
      } else {
        this.cargando = true;
        this.guardarArchivosAdjuntos();
      }
    },
    async guardarArchivosAdjuntos() {
      const url =
        "http://localhost:8090/api/admin/crear-documento-comprobante-proveedor";
      let dataPost = new FormData();
      dataPost.append("archivoPdf", this.$refs.uploadPdf.uploadFiles[0].raw);
      dataPost.append("archivoZip", this.$refs.uploadZip.uploadFiles[0].raw);
      let facRecibida = null;
      await axios
        .post(url, dataPost)
        .then((response) => {
          facRecibida = response.data.resultado.Invoice;
          this.facturaRecibida = response.data.resultado.Invoice;
          this.btnEnviar = false;
        })
        .catch((e) => {
          console.log("errro" + e);
          facRecibida = e.response.data;

        })
        .finally(() => {
          this.cargando = false;
        });
      this.rellenarJsonFactura(facRecibida);
    },
    validacionCargaFactura() {
      this.facturaJson.ordenNumero = this.ordenNumeroInput
      this.facturaJson.ordenContrato = this.ordenContratoInput
      if (this.$refs.uploadZip.uploadFiles.length == 0) {
        alert("Seleccione archivo .zip");
        return;
      } else if (this.$refs.uploadPdf.uploadFiles.length == 0) {
        alert("Seleccione archivo .pdf");
        return; 
      } else if (
        (this.facturaJson.ordenNumero == null ||
          this.facturaJson.ordenNumero.length == 0) &&
        (this.facturaJson.ordenContrato == null ||
          this.facturaJson.ordenContrato.length == 0)
      ) {
        alert("Ingrese nro. de orden y/o contrato");
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
        .post(url, this.facturaJson)
        .then((response) => {
          this.$swal({
            icon: "success",
            title: "Registro exitoso",
          });
          console.log("Comprobante detalle exitoso");
          console.log(response.data);
        })
        .catch((e)=>{
          this.$swal({
          icon: "info",
          title: e.response.data.mensajeError,
        });
        })
        .finally(() => {
          // this.$refs.uploadZip.clearFiles();
          // this.$refs.uploadPdf.clearFiles();
          this.cargando = false;
          this.btnEnviar = true;
        });
    },

    rellenarJsonFactura(facturaRecibida) {
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
          "cac:PartyName"
        ]["cbc:Name"].length == 0
          ? facturaRecibida["cac:AccountingSupplierParty"]["cac:Party"][
              "cac:PartyLegalEntity"
            ]["cbc:RegistrationName"]
          : facturaRecibida["cac:AccountingSupplierParty"]["cac:Party"][
              "cac:PartyName"
            ]["cbc:Name"];
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
        (facturaRecibida["cac:OrderReference"] != null)
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
        arrayItems.forEach((item)=>{
          let obj = {
            cantidad:
              item["cbc:InvoicedQuantity"]
                .content,
  
            unidadMedida: "UNIDAD",
            codigo: item["cbc:ID"],
            descripcion:
              item["cac:Item"]["cbc:Description"],
  
            valorUnitario:
              item["cac:Price"]["cbc:PriceAmount"]
                .content
          };
          this.facturaJson["listaComprobanteDetalle"].push(obj);
        })

      } else {
        this.facturaJson["listaComprobanteDetalle"].push(
          {
            cantidad:
              facturaRecibida["cac:InvoiceLine"]["cbc:InvoicedQuantity"]
                .content,
            unidadMedida: "UNIDAD",
            codigo: facturaRecibida["cac:InvoiceLine"]["cbc:ID"],
            descripcion:
              facturaRecibida["cac:InvoiceLine"]["cac:Item"]["cbc:Description"],
            valorUnitario:
              facturaRecibida["cac:InvoiceLine"]["cac:Price"]["cbc:PriceAmount"]
                .content,
          },
        );
      }
      // PIE FACTURA
      this.facturaJson["descripcionImporte"] =
        (facturaRecibida["cbc:Note"] != null )?facturaRecibida["cbc:Note"].content: "";
      this.facturaJson["importeSubTotal"] =
        (facturaRecibida["cac:LegalMonetaryTotal"]["cbc:LineExtensionAmount"]!=null)?facturaRecibida["cac:LegalMonetaryTotal"]["cbc:LineExtensionAmount"].content:0.0 +
        (facturaRecibida["cac:LegalMonetaryTotal"]["cbc:PrepaidAmount"]!= null)?facturaRecibida["cac:LegalMonetaryTotal"]["cbc:PrepaidAmount"].content:0.0 +
        (facturaRecibida["cac:LegalMonetaryTotal"]["cbc:AllowanceTotalAmount"]!=null)?facturaRecibida["cac:LegalMonetaryTotal"]["cbc:AllowanceTotalAmount"]
          .content:0.0;
      this.facturaJson["importeAnticipios"] = 0.0;
      this.facturaJson["importeDescuentos"] =
        (facturaRecibida["cac:LegalMonetaryTotal"][
          "cbc:AllowanceTotalAmount"
        ]!=null)?facturaRecibida["cac:LegalMonetaryTotal"][
          "cbc:AllowanceTotalAmount"
        ].content:0.0;
      this.facturaJson["importeValorVenta"] =
        ( facturaRecibida["cac:LegalMonetaryTotal"][
          "cbc:LineExtensionAmount"
        ]!=null)?facturaRecibida["cac:LegalMonetaryTotal"][
          "cbc:LineExtensionAmount"
        ].content: 0.0;
      this.facturaJson["importeIsc"] =
       ( facturaRecibida["cac:TaxTotal"]["cac:TaxSubtotal"][
          "cbc:TaxAmount"
        ]!=null)? facturaRecibida["cac:TaxTotal"]["cac:TaxSubtotal"][
          "cbc:TaxAmount"
        ].content: 0.0 ;
      this.facturaJson["importeIgv"] = (facturaRecibida["cac:TaxTotal"]["cac:TaxSubtotal"][
          "cbc:TaxAmount"
        ]!= null)?
        facturaRecibida["cac:TaxTotal"]["cac:TaxSubtotal"][
          "cbc:TaxAmount"
        ].content:0.0;

      this.facturaJson["importeOtrosCargos"] = 0.0;
      this.facturaJson["importeOtrosTributos"] = 0.0;
      this.facturaJson["importeTotal"] = ( facturaRecibida["cac:LegalMonetaryTotal"]["cbc:PayableAmount"])?
        facturaRecibida["cac:LegalMonetaryTotal"]["cbc:PayableAmount"].content:0.0;

      this.mostrarFactura = true;
    },
  },
};
</script>

<style lang="scss" scoped>
hr {
  width: 70vw !important;
  position: relative;
}
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

.body-registro {
  width: 60%;
  box-shadow: 3px 2px 10px #c7c7c7;
  /* border: 1px solid #b0b0b0; */
  box-sizing: border-box;
  border-radius: 10px;
  background-color: white;
  margin-bottom: 50px;
  padding-bottom: 30px;
}
.cabecera {
  margin-left: 30px;
  margin-right: 30px;
  border-bottom: 3px solid rgb(225, 225, 228);
  columns: 2;
}
.cabecera-detalle {
  border: 3px solid #b0b0b0;
  margin-bottom: 30px;
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
