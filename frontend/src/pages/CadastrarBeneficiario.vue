<template>
  <div class="card">
    <div class="card-header">Cadastrar novo beneficiário</div>

    <div class="card-body">
      <div class="form-group">
        <div class="mb-3">
          <label for="" class="form-label">Plano</label>
          <select v-model="registro" class="form-control">
            <option
              v-for="plan in plans"
              :key="plan.codigo"
              :value="plan.registro"
            >
              {{ plan.nome }}
            </option>
          </select>
        </div>
      </div>

      <hr />

      <button class="btn btn-success mb-3" @click="addBeneficiario">
        Adicionar Beneficiário
      </button>
      <template v-for="(beneficiario, index) in beneficiariosForm" :key="index">
        <div class="form-group">
          <div class="mb-3">
            <h4>
              Dados do Beneficiário {{ index + 1 }}
              <span
                @click="removeBeneficiario(index)"
                class="btn btn-sm btn-danger"
                >X</span
              >
            </h4>
          </div>
          <div class="mb-3 row">
            <label for="" class="col-sm-2 col-form-label">Nome</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                placeholder="Insira o nome do beneficiário"
                v-model="beneficiario.nome"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="" class="col-sm-2 col-form-label">Idade</label>
            <div class="col-sm-10">
              <input
                type="number"
                class="form-control"
                placeholder="Insira a idade do beneficiário"
                v-model="beneficiario.idade"
              />
            </div>
          </div>
        </div>
      </template>
    </div>

    <div class="card-footer">
      <input
        type="submit"
        value="Enviar"
        class="col-12 btn btn-primary"
        @click="postBeneficiarios"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async created() {
    this.plans = await axios
      .get('http://localhost:3333/plans')
      .then((response) => {
        console.log(response.data)
        return response.data
      })
      .catch((error) => {
        console.log(error)
        alert('erro: log no console')
      })
  },
  data() {
    return {
      quantidadeBenef: 0,
      beneficiariosForm: [
        {
          nome: '',
          idade: 0
        }
      ],
      plans: [],
      registro: 'Selecione um'
    }
  },
  methods: {
    addBeneficiario() {
      this.beneficiariosForm.push({
        nome: '',
        idade: 0
      })
    },
    removeBeneficiario(index) {
      this.beneficiariosForm.splice(index, 1)
    },
    async postBeneficiarios() {
      await axios
        .post('http://localhost:3333/beneficiarios', {
          beneficiarios: this.beneficiariosForm,
          registro: this.registro
        })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          alert('Registro do plano é inválido')
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>
