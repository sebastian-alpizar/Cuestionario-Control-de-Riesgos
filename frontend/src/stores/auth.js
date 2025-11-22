import { defineStore } from 'pinia'
import api from '@/plugins/axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isLoggedIn: false,
    errors: [],
    success: ''
  }),

  actions: {
    async initializeCSRF() {
      try {
        console.log('🛡️ Initializing CSRF protection...');
        await api.get('/sanctum/csrf-cookie');
        console.log('🛡️ CSRF protection initialized');
        return true;
      } catch (error) {
        console.error('❌ CSRF initialization failed:', error);
        return false;
      }
    },

    async login(usuario_id, password) {
      this.errors = [];
      try {
        // Inicializar CSRF antes del login
        await this.initializeCSRF();
        
        console.log('🔐 Attempting login...');
        const res = await api.post('/api/auth/login', {
          usuario_id,
          password
        });

        console.log('✅ Login successful:', res.data);
        this.user = res.data.usuario;
        this.isLoggedIn = true;

        localStorage.setItem('userId', res.data.usuario.usuario_id);
        localStorage.setItem('userName', res.data.usuario.responsable);
        localStorage.setItem('empresa', res.data.usuario.empresa);

        return true;
      } catch (err) {
        console.error('❌ Login error:', err);
        this.handleError(err);
        return false;
      }
    },

    async register(userData) {
      this.errors = [];
      this.success = '';

      try {
        await this.initializeCSRF();
        
        console.log('📝 Attempting registration...');
        const res = await api.post('/api/auth/register', userData);

        console.log('✅ Registration successful:', res.data);
        
        // El backend ahora debería autenticar automáticamente
        this.user = res.data.usuario;
        this.isLoggedIn = true;
        
        localStorage.setItem('userId', res.data.usuario.usuario_id);
        localStorage.setItem('userName', res.data.usuario.responsable);
        localStorage.setItem('empresa', res.data.usuario.empresa);

        this.success = res.data.message;
        return true;
      } catch (err) {
        console.error('❌ Registration error:', err);
        this.handleError(err);
        return false;
      }
    },

    async logout() {
      try {
        console.log('🚪 Logging out...');
        await api.post('/api/auth/logout');
      } catch (error) {
        console.error('Logout error:', error);
      } finally {
        this.user = null;
        this.isLoggedIn = false;
        localStorage.clear();
        console.log('✅ Logout completed');
      }
    },

    async checkAuth() {
      try {
        console.log('🔍 Checking authentication...');
        const res = await api.get('/api/auth/user');
        
        console.log('✅ User is authenticated:', res.data);
        this.user = res.data.usuario;
        this.isLoggedIn = true;
        
        // Sincronizar localStorage
        localStorage.setItem('userId', res.data.usuario.usuario_id);
        localStorage.setItem('userName', res.data.usuario.responsable);
        localStorage.setItem('empresa', res.data.usuario.empresa);
        
        return true;
      } catch (error) {
        console.log('❌ User is not authenticated:', error.response?.status);
        // No limpiar localStorage aquí, solo el estado
        this.user = null;
        this.isLoggedIn = false;
        return false;
      }
    },

    // **AGREGAR: Verificar autenticación al cargar la app**
    async initializeAuth() {
      const userId = localStorage.getItem('userId');
      
      if (userId) {
        // Tenemos datos en localStorage, verificar con el servidor
        console.log('🔄 Initializing auth from localStorage...');
        return await this.checkAuth();
      }
      
      return false;
    },

    handleError(err) {
      if (err.response?.data?.errors) {
        this.errors = Object.values(err.response.data.errors).flat();
      } else if (err.response?.data?.message) {
        this.errors = [err.response.data.message];
      } else {
        this.errors = ['Error de conexión'];
      }
      console.log('Store errors:', this.errors);
    }
  }
})