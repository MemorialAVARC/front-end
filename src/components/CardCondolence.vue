<template>
  <div>
    <div class="flex flex-col md:flex-row justify-center bg-white rounded-lg p-5 md:py-5 md:px-8 border mb-3 md:mb-0 card">
      <div class="imagespace">
        <span 
          v-if="condolencia.vitima.imagem"
          class="h-16 w-16 md:h-22 md:w-22 rounded-full mx-auto md:mx-0  picture"
          :style="{'background-image': `url(data:image/jpeg;base64,${condolencia.vitima.imagem})`}">
        </span>
        <span 
          v-else
          class="h-16 w-16 md:h-22 md:w-22 rounded-full mx-auto md:mx-0  picture">
        </span>
      </div>

      <div class="text-center md:text-left">
        <h2 class="text-lg font-bold mt-1">{{ condolencia.vitima.nome + " " + condolencia.vitima.sobrenome }}</h2>
        <p
          class="text-center md:text-left text-sm"
          v-if="condolencia.vitima.endereco_cidade || condolencia.vitima.endereco_estado"
        >
          {{`
            ${(() => {
              if (condolencia.vitima.endereco_cidade && condolencia.vitima.endereco_estado) {
                return condolencia.vitima.endereco_cidade + "/" + condolencia.vitima.endereco_estado
              } else if (condolencia.vitima.endereco_cidade) {
                return condolencia.vitima.endereco_cidade
              } else {
                return condolencia.vitima.endereco_estado
              }
            })()}
          `}}
        </p>

        <router-link class="text-blue-500 text-center md:text-right text-sm mt-2 cursor-pointer mt-2 block underline" :to="`/condolencia/${condolencia.id}`">
          Ler condolência
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCondolence",
  props: {
    condolencia: Object,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.picture {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(../assets/images/person-male.png);
}
.imagespace {
  min-width: 60px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (min-width: 768px) {
    margin-top: 5px;
  }
}
h2 {
  line-height: 18px;
}
.card {
  min-height: 120px;

  @media (min-width: 768px) {
    > div:first-child {
      flex-basis: 30%;
    }

    > div:last-child {
      flex-basis: 70%;
    }
  }
}
</style>
