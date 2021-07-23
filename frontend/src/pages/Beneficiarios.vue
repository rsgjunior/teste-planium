<template>
  <div class="card">
    <div class="card-header">Lista de Beneficiários</div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Qtd</th>
              <th>Beneficiários</th>
              <th>Registro</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="benef in beneficiarios" :key="benef.id">
              <td>{{ benef.id }}</td>
              <td>{{ benef.qtd }}</td>
              <td>
                <span v-for="pessoa in benef.beneficiarios" :key="pessoa.nome">
                  {{ pessoa.nome }} - {{ pessoa.idade }} anos <br />
                </span>
              </td>
              <td>{{ benef.registro }}</td>
              <td>
                <button
                  class="btn btn-sm btn-warning"
                  @click="gerarProposta(benef)"
                >
                  Gerar Proposta
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      beneficiarios: []
    }
  },
  async created() {
    this.beneficiarios = await axios
      .get('http://localhost:3333/beneficiarios')
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        alert(error)
        console.log(error)
      })
  },
  methods: {
    async gerarProposta(beneficiario) {
      const { id } = beneficiario

      const proposta = await axios
        .post('http://localhost:3333/propostas', { id })
        .then((response) => {
          alert('Proposta gerada para o beneficiário ID ' + id)
          console.log(response)
        })
        .catch((error) => {
          alert(error)
          console.log(error)
        })

      return proposta
    }
  }
}
</script>

<style scoped></style>
