<template>
  <div class="card">
    <div class="card-header">Lista de Propostas</div>
    <div class="card-body">
      <div v-for="proposta in propostas" :key="proposta.id">
        <h5>Proposta {{ proposta.id }}</h5>
        <ul>
          <li>Registro: {{ proposta.registro }}</li>
          <li>Preço Total: R$ {{ proposta.precoTotal }}</li>
          <li>Quantidade de beneficiarios: {{ proposta.qtd }}</li>
        </ul>

        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Beneficiário</th>
              <th>Idade</th>
              <th>Preço Individual</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="benef in proposta.beneficiarios" :key="benef.nome">
              <td>{{ benef.nome }}</td>
              <td>{{ benef.idade }}</td>
              <td>R$ {{ benef.preco }}</td>
            </tr>
          </tbody>
        </table>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      propostas: []
    }
  },
  async created() {
    this.propostas = await axios
      .get('http://localhost:3333/propostas')
      .then((response) => {
        console.log(response.data)
        return response.data
      })
      .catch((error) => {
        alert(error)
        console.log(error)
      })
  }
}
</script>

<style scoped></style>
