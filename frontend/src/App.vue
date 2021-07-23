<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-md-center"
          id="navbar"
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
              <a class="nav-link" @click="changeCurrentView('Propostas')"
                >Propostas Geradas</a
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
        <transition mode="out-in" appear>
          <component :is="currentView" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import CadastrarBeneficiario from './pages/CadastrarBeneficiario.vue'
import Beneficiarios from './pages/Beneficiarios.vue'
import Plans from './pages/Plans.vue'
import Propostas from './pages/Propostas'

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
  components: { CadastrarBeneficiario, Beneficiarios, Plans, Propostas }
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

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.25s;
}
</style>
