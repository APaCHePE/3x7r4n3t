<template>
  <div class="contenedor-principal">
    <div>
      <titulo-header>Registre su factura digital</titulo-header>
    </div>
    <div class="ml-5" style="text-align: left">
      <h3 class="mb-2">Documento PDF</h3>
      <el-upload
        class="upload-demo"
        ref="uploadPdf"
        action="https://jsonplaceholder.typicode.com/posts/"
        :auto-upload="false"
        accept=".pdf"
      >
        <el-button slot="trigger" size="small" type="primary"
          >Selecciona un archivo</el-button
        >
        <div slot="tip" class="el-upload__tip">
          Solo archivos PDF con un tamaño menor de 500kb
        </div>
      </el-upload>
      <h3 class="mb-2">Documento ZIP</h3>
      <el-upload
        class="upload-demo"
        ref="uploadZip"
        action="http://localhost:8090/api/admin/cargar-zip"
        :auto-upload="false"
        accept=".zip"
      >
        <el-button slot="trigger" size="small" type="primary"
          >Selecciona un archivo</el-button
        >
        <div slot="tip" class="el-upload__tip">
          Solo archivos .ZIP con un tamaño menor de 500kb
        </div>
      </el-upload>
    </div>
    <div
      style="display: flex; justify-content: space-around; margin-bottom: 20px"
    >
      <el-button type="primary" v-on:click="submitUploadZip" @click="submitUpload"
        >Cargar Factura
      </el-button>
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
              <p><b> </b>{{facturaRecibida["cac:AccountingSupplierParty"]["cac:Party"]["cac:PartyLegalEntity"]["cbc:RegistrationName"]}}</p>
              <p><b>{{facturaRecibida["cac:AccountingSupplierParty"]["cac:Party"]["cac:PartyLegalEntity"]["cbc:RegistrationName"]}} </b></p>
              <p><b> </b>{{facturaRecibida["cac:AccountingSupplierParty"]["cac:Party"]["cac:PartyLegalEntity"]["cac:RegistrationAddress"]["cac:AddressLine"]["cbc:Line"]}}
              <p><b> </b>{{facturaRecibida["cac:AccountingSupplierParty"]["cac:Party"]["cac:PartyLegalEntity"]["cac:RegistrationAddress"]["cbc:District"]}}-
              {{facturaRecibida["cac:AccountingSupplierParty"]["cac:Party"]["cac:PartyLegalEntity"]["cac:RegistrationAddress"]["cbc:CityName"]}} - {{facturaRecibida["cac:AccountingSupplierParty"]["cac:Party"]["cac:PartyLegalEntity"]["cac:RegistrationAddress"]["cbc:CountrySubentity"]}}</p>
            </div>
            <br />
            <div class="cabecera-detalle">
              <p><b>FACTURA</b></p>|
              <p><b>RUC : </b>{{facturaRecibida.codigoCliente}}</p>
              <p><b></b>{{facturaRecibida["cbc:ID"]}}</p>
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
                                    <td width="30%" class="bgn"><b>Fecha de Vencimiento</b></td>
                                    <td width="5%" class="bgn">:</td>
                                    <td width="70%" class="bgn">{{facturaRecibida["cbc:DueDate"]}}</td>
                                  </tr>
                                  <tr>
                                    <td width="30%" class="bgn"><b>Fecha de Emisión</b></td>
                                    <td width="5%" class="bgn">:</td>
                                    <td width="70%" class="bgn">{{facturaRecibida["cbc:IssueDate"]}}</td>
                                  </tr>
                                  <tr>
                                    <td width="30%" class="bgn">
                                      <b> Señor (es)</b>
                                    </td>
                                    <td width="5%" class="bgn">:</td>
                                    <td width="70%" class="bgn">{{facturaRecibida["cac:AccountingCustomerParty"]["cac:Party"]["cac:PartyLegalEntity"]["cbc:RegistrationName"]}}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width="30%" class="bgn">
                                      <b> RUC</b>
                                    </td>
                                    <td width="5%" class="bgn">:</td>
                                    <td width="70%" class="bgn">
                                      {{facturaRecibida["cac:AccountingCustomerParty"]["cac:Party"]["cac:PartyIdentification"]["cbc:ID"].content}}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width="30%" class="bgn">
                                      <b>Tipo de Moneda</b>
                                    </td>
                                    <td width="5%" class="bgn">:</td>
                                    <td width="70%" class="bgn">
                                      {{facturaRecibida["cbc:DocumentCurrencyCode"].content}}
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
              <tbody >
                <!-- <tr v-for="(item,index) of " :key="'items'+index"> -->
                <tr >
                  <td>{{facturaRecibida["cac:InvoiceLine"]["cbc:InvoicedQuantity"].content}}</td>
                  <td>Unidad Medida</td>
                  <td>{{facturaRecibida["cac:InvoiceLine"]["cbc:ID"]}}</td>
                  <td>{{facturaRecibida["cac:InvoiceLine"]["cac:Item"]["cbc:Description"]}}</td>
                  <td>{{facturaRecibida["cac:InvoiceLine"]["cac:Price"]["cbc:PriceAmount"]}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <div id="detalle" class="detalle">
            <div class="detalle-izquierda">
              <br /><br /><br />
              <label>{{facturaRecibida["cbc:Note"].content}}</label>
              <br /><br /><br /><br /><br /><br /><br /><br />
            </div>
            <div class="total-detalle">
              <p><b>Sub total Ventas: </b>{{facturaRecibida.subTotalVentas}}</p>
              <p><b>Anticipios: </b>{{facturaRecibida.anticipios}}</p>
              <p><b>Descuentos: </b>{{facturaRecibida.descuentos}}</p>
              <p><b>Valor de Ventas: </b>{{facturaRecibida["valorVentas"]}}</p>
              <p><b>IGV: </b>{{facturaRecibida.igv}}</p>
              <p><b>Otros Cargos: </b>{{facturaRecibida["otrosTributos"]}}</p>
              <p><b>Importe Total: </b>{{facturaRecibida.importeTotal}}</p>
            </div>
          </div>
        </div>
        <div style="display: flex">
          <div>
            <label>Orden de Compra</label>
            <el-input v-model="orden"></el-input>
          </div>
          <div>
            <label>Nro. de Contrato</label>
            <el-input v-model="factura"></el-input>
          </div>
          <div>
            <label>.</label>
            <el-button type="primary" @click="guardarFacturaJsoon">Guardar</el-button>
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
import axios from "axios";
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
      orden: null,
      contrato: null,
      facturaRecibida: {},
      facturaEnvio: {},
    };
  },
  methods: {
    guardarFacturaJsoon(){
      const url = "http://localhost:8090/api/admin/guardar-comprobante";
      axios.post(url,  this.facturaEnvio)
        .then(response=>{
          console.log("Comprobante detalle exitoso");
          console.log(response.data);
        }).catch();
    },
    submitUpload() {
      console.log("handle submitUpload");
      console.log( this.$refs.uploadZip.uploadFiles[0].raw);
      this.$refs.uploadZip.uploadFiles[0].raw.submit();
    },
    submitUploadZip() {
      console.log(this.$refs.uploadZip.uploadFiles[0].raw);
      this.onFileNew(this.$refs.uploadZip.uploadFiles[0].raw);
      // else this.onFileUpdate(this.$refs.upload.uploadFiles[0].raw)
    },
    onFileNew(file){
        const url = 'http://localhost:8090/api/admin/cargar-zip'
        let datos = {}
        datos.idDocumento ="1254"
        let dataPost=new FormData();
        // dataPost.append('idDocumento', JSON.stringify(datos))
        dataPost.append('idDocumento', 12456)
        dataPost.append('documento', file)
        console.log(dataPost);
        axios.post(url,dataPost)
        .then(response=>{
            console.log("RESPUESTA SERVICIO");
            console.log(response.data.resultado.Invoice);
           this.facturaRecibida= response.data.resultado.Invoice;
            this.facturaRecibida["subTotalVentas"]= this.facturaRecibida["cac:LegalMonetaryTotal"]["cbc:LineExtensionAmount"].content + this.facturaRecibida["cac:LegalMonetaryTotal"]["cbc:PrepaidAmount"].content + this.facturaRecibida["cac:LegalMonetaryTotal"]["cbc:AllowanceTotalAmount"].content
            this.facturaRecibida["descuentos"]= this.facturaRecibida["cac:LegalMonetaryTotal"]["cbc:AllowanceTotalAmount"].content;
            this.facturaRecibida["valorVentas"]= this.facturaRecibida["cac:LegalMonetaryTotal"]["cbc:LineExtensionAmount"].content;
            this.facturaRecibida["igv"]= this.facturaRecibida["cac:TaxTotal"]["cac:TaxSubtotal"]["cbc:TaxAmount"].content;
            this.facturaRecibida["importeTotal"]= this.facturaRecibida["cac:LegalMonetaryTotal"]["cbc:PayableAmount"].content;
            console.log("FILE DE FILE");

             this.facturaRecibida["proveedor_id_003_tipo_documento"]=  1;
            this.facturaRecibida["id_007_tipo_comprobante"]=  17;
            this.facturaRecibida["serie"]=  this.facturaRecibida["cbc:ID"];
            this.facturaRecibida["numero"]=  96;
            this.facturaRecibida["codigoCliente"]= this.facturaRecibida["cac:AccountingSupplierParty"]["cac:Party"]["cac:PartyIdentification"]["cbc:ID"].content;
            this.facturaRecibida["proveedor_numero_documento"]=  this.facturaRecibida["cac:AccountingSupplierParty"]["cac:Party"]["cac:PartyIdentification"]["cbc:ID"].content;
            this.facturaRecibida["fecha_emision"]=  this.facturaRecibida["cbc:IssueDate"] +" 08:00:00";
            this.facturaRecibida["fecha_vencimiento"]= this.facturaRecibida["cbc:DueDate"]+" 08:00:00";
            this.facturaRecibida["id_006_tipo_moneda"]=  15;
            this.facturaRecibida["importe_sub_total"]=  this.facturaRecibida["cac:LegalMonetaryTotal"]["cbc:LineExtensionAmount"].content + this.facturaRecibida["cac:LegalMonetaryTotal"]["cbc:PrepaidAmount"].content + this.facturaRecibida["cac:LegalMonetaryTotal"]["cbc:AllowanceTotalAmount"].content;
            this.facturaRecibida["importe_anticipios"]=  0.0;
            this.facturaRecibida["importe_descuentos"]=  this.facturaRecibida["cac:LegalMonetaryTotal"]["cbc:AllowanceTotalAmount"].content;
            this.facturaRecibida["importe_valor_venta"]=  this.facturaRecibida["cac:LegalMonetaryTotal"]["cbc:LineExtensionAmount"].content;
            this.facturaRecibida["importe_isc"]=  this.facturaRecibida["cac:TaxTotal"]["cac:TaxSubtotal"]["cbc:TaxAmount"].content;
            this.facturaRecibida["importe_igv"]=  this.facturaRecibida["cac:TaxTotal"]["cac:TaxSubtotal"]["cbc:TaxAmount"].content;
            this.facturaRecibida["importe_otros_cargos"]= 0.0;
            this.facturaRecibida["importe_otros_tributos"]=  0.0;
            this.facturaRecibida["importe_total"]=  this.facturaRecibida["cac:LegalMonetaryTotal"]["cbc:PayableAmount"].content;
            this.facturaRecibida["listaComprobanteDetalle"]=  [
              {
                "Cantidad" : this.facturaRecibida["cac:InvoiceLine"]["cbc:InvoicedQuantity"].content,
                "Unidad Medida" : "UNIDAD",
                "Código" : this.facturaRecibida["cac:InvoiceLine"]["cbc:ID"],
                "Descripción" : this.facturaRecibida["cac:InvoiceLine"]["cac:Item"]["cbc:Description"],
                "Valor Unitario" : this.facturaRecibida["cac:InvoiceLine"]["cac:Price"]["cbc:PriceAmount"]
              }
            ];

            this.facturaEnvio["proveedor_nombre"]=  this.facturaRecibida["cac:AccountingSupplierParty"]["cac:Party"]["cac:PartyLegalEntity"]["cbc:RegistrationName"];
            this.facturaEnvio["proveedor_nombre_comercial"]=  this.facturaRecibida["cac:AccountingSupplierParty"]["cac:Party"]["cac:PartyLegalEntity"]["cbc:RegistrationName"];
            this.facturaEnvio["proveedor_id_003_tipo_documento"]=  1;
            this.facturaEnvio["id_007_tipo_comprobante"]=  17;
            this.facturaEnvio["serie"]=  this.facturaRecibida["cbc:ID"];
            this.facturaEnvio["numero"]=  96;
            this.facturaEnvio["codigoCliente"]= this.facturaRecibida["cac:AccountingSupplierParty"]["cac:Party"]["cac:PartyIdentification"]["cbc:ID"].content;
            this.facturaEnvio["proveedor_numero_documento"]=  this.facturaRecibida["cac:AccountingSupplierParty"]["cac:Party"]["cac:PartyIdentification"]["cbc:ID"].content;
            this.facturaEnvio["fecha_emision"]=  this.facturaRecibida["cbc:IssueDate"] +" 08:00:00";
            this.facturaEnvio["fecha_vencimiento"]= this.facturaRecibida["cbc:DueDate"]+" 08:00:00";
            this.facturaEnvio["id_006_tipo_moneda"]=  15;
            this.facturaEnvio["importe_sub_total"]=  this.facturaRecibida["cac:LegalMonetaryTotal"]["cbc:LineExtensionAmount"].content + this.facturaRecibida["cac:LegalMonetaryTotal"]["cbc:PrepaidAmount"].content + this.facturaRecibida["cac:LegalMonetaryTotal"]["cbc:AllowanceTotalAmount"].content;
            this.facturaEnvio["importe_anticipios"]=  0.0;
            this.facturaEnvio["importe_descuentos"]=  this.facturaRecibida["cac:LegalMonetaryTotal"]["cbc:AllowanceTotalAmount"].content;
            this.facturaEnvio["importe_valor_venta"]=  this.facturaRecibida["cac:LegalMonetaryTotal"]["cbc:LineExtensionAmount"].content;
            this.facturaEnvio["importe_isc"]=  this.facturaRecibida["cac:TaxTotal"]["cac:TaxSubtotal"]["cbc:TaxAmount"].content;
            this.facturaEnvio["importe_igv"]=  this.facturaRecibida["cac:TaxTotal"]["cac:TaxSubtotal"]["cbc:TaxAmount"].content;
            this.facturaEnvio["importe_otros_cargos"]= 0.0;
            this.facturaEnvio["importe_otros_tributos"]=  0.0;
            this.facturaEnvio["importe_total"]=  this.facturaRecibida["cac:LegalMonetaryTotal"]["cbc:PayableAmount"].content;
            this.facturaEnvio["listaComprobanteDetalle"]=  [
              {
                "Cantidad" : this.facturaRecibida["cac:InvoiceLine"]["cbc:InvoicedQuantity"].content,
                "Unidad Medida" : "UNIDAD",
                "Código" : this.facturaRecibida["cac:InvoiceLine"]["cbc:ID"],
                "Descripción" : this.facturaRecibida["cac:InvoiceLine"]["cac:Item"]["cbc:Description"],
                "Valor Unitario" : this.facturaRecibida["cac:InvoiceLine"]["cac:Price"]["cbc:PriceAmount"]
              }
            ];
            this.$refs.uploadZip.clearFiles()
            this.$emit('reloadList')
            this.mostrarFactura = true
        })
    },
    handleRemove(file, fileList) {
      console.log("handle handleRemove");
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log("handle preview");
      console.log(file);
    },
    handleExceed(files, fileList) {
      console.log("handle handleExceed");
      this.$message.warning(
        `El límite es 3, haz seleccionado ${files.length} archivos esta vez, añade hasta ${files.length + fileList.length}`
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.cabecera-factura{
  td{
    margin-top: 10px;
  }
}
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
