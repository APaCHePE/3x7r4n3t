<template>
  <div class="question"  v-loading="loading"
    element-loading-text="Loading..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
    <div class="thank" v-if="finish">
      <h1>¡Gracias por tu tiempo!</h1>
      <p>Estamos trabajando para mejorar tu experiencia</p>
    </div>
    <div class="question-container" v-else >
      <h1>Encuesta de satisfacción</h1>
      <el-row :gutter="10" style="display: inline; text-align:center;">
        <el-col :xs="24" :md="11">
          <el-rate style="" :disabled="true"
          :value="1"
          :texts="leyenda"
          disabled-void-icon-class="true"
          show-text>
          </el-rate>
        </el-col>
        <el-col :xs="0" :md="2">-----</el-col>
        <el-col :xs="24" :md="11">
          <el-rate style="" :disabled="true"
          :value="5"
          :texts="leyenda"
          disabled-void-icon-class="true"
          show-text>
          </el-rate>
        </el-col>
      </el-row>
      <div class="block" v-for="preg of listQuestions" :key=preg.idPregunta >
        <span class="demonstration">{{preg.descripcion}}</span>
        <template v-if="preg.tipo==2">
          <el-row>
            <el-rate
            v-model="preg.idOpcion"
            :texts=preg.texts
            show-text>
            </el-rate>
          </el-row>
        </template>
        <template v-else-if="preg.tipo==1">
          <el-input type="textarea" :rows="3" maxlength="200" placeholder="Ingrese su comentario o sugerencia..." v-model="preg.respuestaLibre">
        </el-input></template>
        <template v-else>
          <el-alert
            title="ERROR"
            type="warning"
            description="no se pudo obtener el tipo de pregunta"
            show-icon>
          </el-alert>
        </template>
      </div>
      <!-- <div class="block">
        <span class="demonstration">¿Que le parece la nueva plataforma?</span>
        <el-rate
        v-model="value1"
        :texts="['muy malo', 'malo', 'bueno', 'muy bueno', 'excelente']"
        show-text>
        </el-rate>
      </div> -->
      <el-row>
        <el-button type="primary" round @click="validarCampos()">Enviar encuesta</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        getIdEncuesta: null,
        idEncuesta:null,
        id003Estado:null,
        idEntidadEncuesta:null,
        listaRespuesta:null,
        listQuestions: null,
        textarea:null,
        leyenda: ['MUY MALO', 'MALO', 'BUENO', 'MUY BUENO', 'EXCELENTE'],
        finish: false,
        loading: true
      }
    },
    created(){
      this.recuperarId();
    },
    methods:{
      validarEncuesta(){
        const url='encuesta/getbyidencuesta/1/'+this.getIdEncuesta+'/0'
        console.log(url)
        axios.get(url).then(response=>{
          console.log('examinando listaTipoAtencion');
          var data=response.data.data;
          console.log(data)
          this.loading=false;
          if(data!=null){
            switch (data.id003Estado){
            case 5: console.log("Creado");
                    this.getQuestion();
                    this.datosDeEncuesta(data);
                    break;
            case 6: console.log("Finalizado")
                    this.finish=true;
                    break;
            default:console.log("estado no valido");
                    this.finish=true;
                    break;
            }
            console.log("OTENIDO CORRECTAMENTE");
          }else{
            this.finish=true;
            console.log("error ");
          }
          this.loading=false;
        }).catch(e=>this.alertUnclose('error',e))
      },
      datosDeEncuesta(data){
        this.idEntidadEncuesta = data.idEntidadEncuesta;
        this.id003Estado =  data.id003Estado + 1;
      },
      getQuestion(){
        var url = 'preguntas/getpreguntas/1'
        console.log(url)
        axios.get(url).then(response=>{
        console.log(response)
        console.log('examinando listaTipoAtencion');
        var datalist=response.data.data;
        var array=[];
        for(var item of datalist){
          var object = new Object();
          object.descripcion = item.descripcion;
          object.idEntidadEncuesta = this.idEntidadEncuesta
          object.idPreguntaEncuesta = item.idPreguntaEncuesta;
          object.idOpcion = null;
          object.respuestaLibre = null;
          object.tipo = item.tipoPregunta;
          object.orden = item.orden;
          if(item.tipoPregunta==2){
            let txtarray = [];
            let idOpcionPreguntaArray =[];
            for(let text of item.opcionesPregunta){
              txtarray.push(text.descripcion);
              idOpcionPreguntaArray.push(text.idOpcionesPregunta);
            }
            object.texts = txtarray;
            object.idOpcionPregunta = idOpcionPreguntaArray;
          }
          object.id003Estado = this.id003Estado;
          object.nroRespuesta = 1;
          array.push(object);
        }
        this.listQuestions = array;
      }).catch(e=>this.alertUnclose('error',e))
      },
      validarCampos(){
        var count = 1
        for(var item of this.listQuestions){
          // console.log(item.orden)
          // console.log(count)
          // console.log(item.idOpcionPregunta)
          if(item.tipo==2 && item.idOpcionPregunta==0){
            this.alertClose('warning','Por favor complete la pregunta : '+item.orden)
            break;
          // }else if(item.tipo==1 && item.respuestaLibre>=300){
          //   this.alertClose('warning','Excedió el limite de la pregunta : '+item.orden)
          //   break;
          }else if(this.listQuestions.length == count) {
            this.btnFinish();
          }
          count++
        }
      },
      btnFinish(){
        this.loading=true;
        console.log("PINTADO ENVIO")
        let datosEncuesta = {};
        for(var item of this.listQuestions){
          if(item.tipo==2){  
            console.log(item.idOpcionPregunta[item.idOpcion-1]);
            item.idOpcionPregunta=item.idOpcionPregunta[item.idOpcion-1];
          }else if(item.tipo==1){
            if(item.respuestaLibre!=null)item.respuestaLibre =item.respuestaLibre.toUpperCase()
          }
        }
        datosEncuesta.idEntidadEncuesta = this.getIdEncuesta;
        datosEncuesta.estado = 1;
        datosEncuesta.fecharespuesta = '2020-08-07';
        datosEncuesta.listaRespuestaDto = this.listQuestions;
        datosEncuesta.id003Estado = this.id003Estado
        console.log(datosEncuesta)
        const url='encuesta/modificarEncuesta'
        axios.post(url,datosEncuesta).then(response=>{
          var action = response.data.ok;
          this.loading=false;
          if(action) {
            this.alertClose('success','Encuesta enviada correctamente');
            this.finish = true;
          }
          else this.alertClose('error','Ocurrió un error al enviar encuesta');
        }).catch(e=>{
          this.alertClose('error','Ocurrió un error al enviar encuesta')
          console.log(e)});
      },
      alertUnclose(type,e) {
        this.loading=false;
        this.$message({
          message: e,
          center: true, 
          type: type
          });
      },
      alertClose(type,e) {
        this.loading=false;
        this.$message({
          message: e,
          center: true,
          type: type
          });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.thank {
  text-align: center;
  max-width: 500px;
  margin: auto;
  background: #fff;
  padding: 45px;
  border-radius: 20px;
  box-shadow: 0 4px 25px rgba(205,229,243,.19);
}
.question {
  margin-top: 20px;
  &-container {
    text-align: center;
    max-width: 500px;
    margin: auto;
    background: #fff;
    padding: 45px;
    border-radius: 20px;
    box-shadow: 0 4px 25px rgba(205,229,243,.19);
  }
  .block {
    margin-bottom: 35px;
    display: block;
    .demonstration {
      margin-bottom: 10px;
      display: block;
    }
    i {
      font-size: 33px;
    }
  }
  h1 {
    color: #0078cf;
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 0px;
  }
}
</style>
