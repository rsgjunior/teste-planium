<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample10"
        aria-controls="navbarsExample10"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse justify-content-md-center"
        id="navbarsExample10"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" @click="changeCurrentView('Beneficiarios')"
              >Lista Beneficiários</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              @click="changeCurrentView('CadastrarBeneficiario')"
              >Cadastrar Beneficiário</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="changeCurrentView('Plans')">Planos</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <div class="container d-flex justify-content-center pb-5">
    <div class="mt-5 col-8">
      <component :is="currentView" />
    </div>
  </div>
</template>

<script>
import CadastrarBeneficiario from './pages/CadastrarBeneficiario.vue'
import Plans from './pages/Plans.vue'

export default {
  data() {
    return {
      currentView: 'CadastrarBeneficiario'
    }
  },
  methods: {
    changeCurrentView(component) {
      this.currentView = component
    }
  },
  components: { CadastrarBeneficiario, Plans }
}
</script>

<style scoped>
html,
body {
  height: 100%;
}

#app {
  width: 100%;
}

li:hover {
  cursor: pointer;
}
</style>
