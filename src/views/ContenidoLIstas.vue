<template>
  <div class="question">
    <div class="thank">
      <div
        bg-variant="light"
        header="Voto Electronico"
        style="font-size: 28px"
        class="text-center"
      >
        <div>
          <div style="text-align: left">
            <p style="font-size: 25px">Socio:</p>
            <p style="font-size: 18px; font-weight: bold">
              DNI: {{ numeroDoc }} {{ nombres }}
            </p>
          </div>
        </div>
      </div>
      <div style="text-align: left; font-size: 25px">
        <p>Elija la lista de su preferencia</p>
      </div>
      <div>
        <el-row>
          <el-col
            :span="8"
            v-for="(item, index) of listaCandidatos"
            :key="item.id + index"
          >
            <el-card
              class="candidato"
              :body-style="{ padding: '0px' }"
              shadow="hover"
              ><br />
              <div class="titulo-candidato">{{ item.titulo }}</div>
              <div class="texto" style="padding: 14px">
                <img
                  styler="background-color: blue"
                  :src="item.imagen"
                  class="image"
                />
                <br />
                <div class="texto-normal">
                  <span >{{ item.nombre }}</span>
                </div>
                <div class="bottom clearfix">
                  <br />
                  <el-button
                    type="success"
                    class="button; estilo"
                    @click="seleccionCandi(item.id)"
                    plain
                    >Elegir</el-button
                  >
                </div>
                <input
                  class="noVer"
                  type="checkbox"
                  id="lista1"
                  value="item.id"
                  :label="item.id"
                  v-model="voto"
                />
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <router-link :to="{ name: 'Home', params: { finish: true } }" replace>
        <el-button style="background-color: #026433; color: white"
          >FINALIZAR VOTO</el-button
        ></router-link
      ><br />
    </div>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  components: {},
  props: ["logeado"],
  data() {
    return {
      listaCandidatos: [
        {
          id: "1",
          nombre: "CERVANTES PEREZ NELVA",
          titulo: "LISTA 1",
          elegido: false,
          imagen:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAJQAlAAD/4QBWRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAAAlAAAAAQAAACUAAAAB/9sAQwAFAwQEBAMFBAQEBQUFBgcMCAcHBwcPCwsJDBEPEhIRDxERExYcFxMUGhURERghGBodHR8fHxMXIiQiHiQcHh8e/9sAQwEFBQUHBgcOCAgOHhQRFB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4e/8AAEQgAhgCHAwEiAAIRAQMRAf/EAB0AAAEEAwEBAAAAAAAAAAAAAAABBQYHAgQIAwn/xAA/EAABAwMCBAMFBgMFCQAAAAABAAIDBAURBiEHEjFBEyJRCGFxgZEUMkKhwdEjYnIVJFKTsRczNFNUgpLw8f/EABoBAAIDAQEAAAAAAAAAAAAAAAAEAgMFAQb/xAAkEQACAgEEAgIDAQAAAAAAAAAAAQIDEQQSITEFQSIyExQzUf/aAAwDAQACEQMRAD8A7KDUYCQg9ijCAAAeuUoA+KRGPRAC7DukJY0EkgAJuvt3orNbn11wqGxQsGck9fguVeLvGu6XGoqKa31b6WgyWxxx+Vzx7z1XYpt4RxtJcnUF41Zpy07XC70sDiNml25TE/itoZpLf7Ya5w7NYSuE67UtZUyGWWR73ncgnP5+q9ZL/JTUbHYPmGeu/wAFJ1yXZCNsGdyM4taILi03F7f6oSpLp7Udkv8AE59ouVPVcv3mtd5h8W9V836jVr5XkC3uJO3Nk5Um0LqfUVpucFztTqiN8bgWtycHfoVz8cl2TVkJfU+iHL7ylAAVV8OOMlm1EKair2yUFfIA1wePLz9xlWjG8OaC0gj3KL4BGfKEYASJUHQGD3S4WO6N0AZFCx3QgBUIQgAWLjyjO2AMoc4BpPoqd4n8arXpmoutm5JILpTQPMLpGeR7iPKQe+UAVl7THEOer1JU6eo5S2lonckxB+/IOu/YdlzBfbvLPXO83NvgY/CAnDWeopKt00zJnTyyuLpJM5JcTuSoLFVS87udjiSdzhN0VPsTvnvWIkopa5j2czjzkbFo7KWaWpILm6NtSW+GTsD1UBoJI4uXfL39j2Vh8PKZ1TI3MZcOYDAHVRvk1yWePhungunS/Dm0z0zHiijdkDBIUzoNA22kiw2njG3+HonbQdHNTWKkjmbh7YwCD1Ck7hkfdWU9z5yemVcFwkc88QrK/T9caiiBaCS7lG3zCsn2feLT62rg0vegwc4LaWoLsOLs7McO567pz1xp2K9W2SMsHihp5D6Fc6eNWaY1NDUhjmS0dQHsy3YOac7/AEV9M3Lhmbq6VD5R6O+mOBGVkmbRt5iv+mbfeIGhsdZTslAznGRuPknhqtEzJCEmUAHZCD0QgBUhPoUEpEAI4eU5XOvtfaIoKzSk2pGUkcVXAWsdUMcQ5wccAFuMH47FdFe5Vb7VFXRUvBe7srGhwqDHFF7n82Qfo0qdfeCFn1OB9JaMvd/rpIqQRiJjsPkd0ypZU8F9SZ/u8kMh7hrsD8wrj4DWOGPR8NdIwc0znSHbrupjUte2d0j6mKkhYOpIGPeSV2d81PEehrTaGqVe6fbKG03wJuz5Gy1z2RkdWl2Sforx4e8PbbYKdskrWvmadh2H7rziq7VUzNbSaqpaipzsxlQ05PwCfaCrqWStpp35dnrlUaiUvZpaSmqH0RJ45YqZ+MgNwsai/wBtifyOmbze5eFypg+h8VziC0du6qnWmt7RpaUvqKSese0ZLIm9N8DJ7KqqO54wX2yUItvouOGtpaloa12eY91WHHHSDJrVPeKSEeNEA6TA+83uT8EmheLliulFHJXWivtUMsgjZPLHzQlx3A5gPTH1VqyUsNztU1M4h8U8RZtvsQQr3XslwLOatreHk8/Zjc13CK2Bv4HyNO/83ZWd2VWey6/HC5lE92ZqGuqKaXbHma7/AOK0u3yU5dmNHoyYEuAlCFEkYu6ISOO2yEAB6oQeqEACqT2tGUUnBe5fa5CyRssRpsHcy8x/TmVtnouf/a/oKy5UNlgY15pQ6Ujl/wCZgD/RdjLa0zqqduYoZeB0b/8AZVaXtb95jz8fOf2Uf1zo643zVDa64OlmtkTA1lG15a153y52FYXCWibbOHlnpHA5jg3B95JUpnZTSQnmaPoqLLGrG0bFFGalGSOX9M8LH2u6VT6trZoZmkQ+TldEc7OBz1CuPSVmqaCnhZU1T6p0TA0PcMEjspPPRRiUPdu0dBhJThjpCyMeTuVXbbKa5GKNNClYih7MPj24NcccwVb6s0BTXCKqMjJHMqsNlaehAxgbdMYVo0jAYAzOSF4TuiDvCmGzvXuuQk4PJOUFNbWQzSXD21UNhjtfLz0bX+L4L3czQ/u7B77dVYdtoG0sHhs2aB5QvChhZHuxuB6J0D9u5VylKXIu4qC2xRAeE8N1s3GHU1pY/Fnqy+sbFjZkji08w+OSCroOOXOVGdNUsbb/AFdXgeI+Frc98ZUnwrc55Mi6ChPCPQIPQoSHoUFRihINxlCAMshIEuxQUAIo3xDsUV905NA5oMkX8WLbPmbn/UZUkWtc2SyUE7IBmV0ZDd+pxsFzGSdcnGSaKdt5fTW9kAGPD2x6LfpZuYYeQFqGOrZNN9qpZqc85H8SMtyR6eoXiZwx2xGe6TtW2WTfoaksDhced0ThERzY2Kh14h1NDJSw26riiYJOefni5/EH+H3fFSCS5RMdylya7vqqyWwAVtbEx5/CDl30C5FKXYws9IebVV3QRlnKGux1JWxR0V5qGSMra8TkPDo3CMN5fdt1Uch1rYTTCriuEBhacEZ82fTl6p+smsLFcmYpLhE6RvVjjyuHyKntTRLZbBZ2kktMj2M5J8Bw2Ti9/THdMFJXw1EhdG4O94Oyd6R3jzMY0glxwFKMvSFLMY3DnYHBtxyCCXDlIUmC1aKjhp28zIwH43PcraCZMO6anLKBxIJwAUnVgS4QMoKhB0IQlxshACggdCk3ISfVYueAgDPokyF5GQb7rSut3oLXRyVtxrKejpoxl800oYxvxJOEYON4XJDeL10+yNoKOGnfNJK58jy0f7qNvVx92SFXP29viHmI5euU1cVvaA0RbdQT1NhlbqOaS1vpCImubC2QSAty8jzNILs8ueg9UwaduMlz0zQ3En/iIGvcB0BPVV6qv4Jsd8bqVvcUPuoH/b5HQwTPjaW4L2HB+Sgcukqfx3id0tSHHdznkOUwo5GY5XEhPFAKMN5ntDvXKUrm4M3YWOLyiD0mjrI0h5dUtGN2l53UgtGjrPJK0Opmti2Oz3ZPzzlTKkfb3HlMTMfBbbzQsiJiADh6Jl3Noss1U3HBhZI2WybwowfB5cNBPRTrRr2TV/MRnA2VfxTOmlOMkBMdj46WfSvEe4aT1NTiC3wujbHXxtLjC9zA7D2jq3fqNx3C7p47pPBh669QhyzpUJR1TTp7Udjv9IKmy3WjuEJaHc1PM1+x9QDkfMJ1B7q1rBmqSkuDNCxylBQdDshHZCANC4V9NRwmaqqIqeIdXyvDGj5lVpq3jpw4094janU1JVTNz/Bos1Dj/wCPl/MLgXVGrb/qCqkmvd4rrhI5xJ+0VDngZ9xOEwVFX5cZPr1WhDSJLLYg9ROb+KOqtee1tOY5INIWEQZ2+1XF3Me+MRtOPqSucNaa+1TrS5Gr1Jequ4FuSyOR+Imf0sHlA+AUTmqHSv6nlCxjcclXxqgvRJQk1mT5HL7Q4g77enZdM+z9VNu3DOjgecyUkkkB+Tsj8nBcvQjOxPfouifZfdLDY6uItPhuqedvzGP0SPklmkY8e1C7BaRtbgctGyIqaeI/d6dipbTU7JYxkYJHVe7rTluQAsKGVyeh/IyNU7JiPu4ThT0b3/eJTnFa3MfnlTjDSBjd1Jts7ubG6CkbBEXf+lcYcX7j9r4raknH/WmMf9oDf0Xa10dyQEA4XB+vHOfre9TE58SukePm4n9Vo+L/AKMxvLYlBIxtd8ulnroq+1XCqoqmM5bLBKWOHzGFdehPan17aWMp7uKO+wtwC6pb4cxH9bf1BXPxJOCteRxjkJBWzKuMu0Ylaa4i8HeGmvau0fWtYy8Wa6W1zsAujLZ2D6EH8laeleKOgtStb/ZOp7c+R2whll8GTJ/lfgk/BfMqlqHlgy7st+Cqc0g5O2CCOyplpIS6D9u6vvk+rLTnocoXzp0Txh15pSndT2jUFS2ncNop8TMafUB+cfLCFQ9HP/S6PkYY5RTdbI1kjsdStN7i4eqKt/NIRnGFi0/haQm1P0XwhhCt6rKI+fmPVJy8pIzkpYwSVZHokzfpmh7wS5dcezhp98PDq33QDnhrDIcgfdcHkYP0/NcjUu5AAX0G9k+jhquBdkjmja5pEoP+Y5LautTqaZXprNl2Ryoqbl2wnFgDW4T7VaYmiJNI8SM7NccH9k2S26thcRJSTD3hhP5rClVJdHoarYM1mtB6hJINsYWw2CUZBhk2/kK9GW64VLxHBRSnbZ728rR8yuKuRY5wXsjd9imlp3QUzHSTygtja3ckn0XGvHqxRae4kVlta/mLYYnyOA2Ly3zY9QDtn3L6EW2wR2+N1RO4S1Zbu/s33D91xB7YsJj4uGQgBslBERj3FwK1vH0qGZGH5G7ckl0UtkDGCCvOdgfHkdQgA+I3YYWRPlIbutF9GauGedJJsAccwKco3gDJwmhg5Jcg9OpXs6fma0g7gfVRjILat3Q6tkJ7oWtTvy3J3KFNSE3Xhkenz4pHvWUjAxjSOpQhLezcXSMY3EnB33Xu0efHuQhW1dEJDlbx58E5X0O9khoHBCw47xyuP+a5CFC/+bF6f7FxNAI3QGgjohCyzQAAbpQMHv8AVCEHfRp1o/u7h6rhn22IGw8QLVKAMyULh9Hn90IT+j+shPVdI5+eAXtA2ysZf4cRIQhNsWXo0H8zvxbErakwynYG9cdUIVK6YxP0j2oJCIi7coQhdF3FZZ//2Q==",
        },
        {
          id: "2",
          nombre: "GONZALES CHAVEZ JORGE",
          titulo: "LISTA 2",
          elegido: false,
          imagen:
            "data:image/jpeg;base64,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",
        },
        {
          id: "3",
          nombre: "VOTO EN BLANCO O VICIADO",
          titulo: "VOTO EN BLANCO",
          elegido: false,
          imagen:
            "data:image/jpeg;base64,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",
        },
      ],
      numeroDoc: "12345678",
      nombres: "HARO SAMANIEGO JASMINA ZARINA",
      lista1: null,
      lista2: null,
      viciado: null,
      voto: "",
    };
  },
  created() {
    console.log("ENTRO AL METODO");
    console.log(this.logeado);
    if (!this.logeado) {
      return this.$router.replace("/");
    }
  },
  methods: {
    seleccionCandi(valor) {
      this.voto = valor;
    },
  },
};
</script>

<style lang="scss">
.estilo {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: #026433;
}
.noVer {
  display: none;
}
.image {
  width: 100%;
  display: block;
  max-height: 130px;
  border-radius: 50%;
  background-image: rgb(2, 100, 51);
}
.checkbox {
  width: 50px;
  height: 30px;
}
.candidato {
  .el-card-header {
    margin-top: 10px;
    white-space: nowrap;
  }
 .titulo-candidato{
   min-height: 40px;
 }
  .texto {
    .span {
      margin: 10px 40px;
    }
    .texto-normal {
      padding: 0px;
      min-height: 80px;
      max-height: 180px;
    }
  }
}
</style>