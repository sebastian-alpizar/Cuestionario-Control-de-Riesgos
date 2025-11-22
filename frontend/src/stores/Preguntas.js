import { defineStore } from 'pinia'
import api from '@/plugins/axios'

export const usePreguntasStore = defineStore('preguntas', {
  state: () => ({
    preguntas: [],
    cargando: false,
    error: null,
    answers: {}  
  }),
  actions: {
    async fetchPreguntas() {
      if (this.preguntas.length > 0) return // ya están cargadas, no volver a pedir
      this.cargando = true
      try {
        const res = await api.get('/api/preguntas')
        this.preguntas = res.data

        this.preguntas.forEach(p => {
          if (!(p.id_pregunta in this.answers)) {
            this.answers[p.id_pregunta] = null
          }
        })
      } catch (err) {
        this.error = 'No se pudieron cargar las preguntas'
      } finally {
        this.cargando = false
      }
    }
  }
})
