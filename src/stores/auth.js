import { ref } from 'vue';
import { defineStore } from 'pinia';
import http from '@/services/http.js';

export const useAuthStore = defineStore('auth', () => {
    const token = ref(localStorage.getItem('token'));
    const user = ref(null);
    
    function setToken(tokenValue) {
        localStorage.setItem('token', tokenValue);
        token.value = tokenValue;
    }

    function setUser(userValue) {
        user.value = userValue;
    }

    async function checkToken() {
        try {
            const tokenAuth = 'Bearer ' + token.value;
            const { data } = await http.get('/authenticate', {
                headers: {
                    'Authorization': tokenAuth
                }
            });
            setUser(data.user);
            return data;
        } catch (error) {
            console.error(error);
            logout();
        }
    }

    function isAuthenticated() {
        return token.value !== null;
    }

    function logout() {
        localStorage.removeItem('token');
        token.value = null;
        user.value = null;
    }

    return {
        token,
        user,
        setToken,
        setUser,
        checkToken,
        isAuthenticated,
        logout,
    };
});
