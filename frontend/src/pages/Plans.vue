<template>
  <div class="card">
    <div class="card-header">Lista de Planos</div>
    <div class="card-body">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Registro</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="plan in plans" :key="plan.codigo">
            <td>{{ plan.codigo }}</td>
            <td>{{ plan.nome }}</td>
            <td>{{ plan.registro }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      plans: []
    }
  },
  async created() {
    this.plans = await axios
      .get('http://localhost:3333/plans')
      .then((response) => response.data)
  }
}
</script>
