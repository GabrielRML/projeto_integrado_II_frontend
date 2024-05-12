import { ref } from 'vue';
import { defineStore } from 'pinia';
import http from '@/services/http.js';

export const useAuthStore = defineStore('auth', () => {
    const token = ref(localStorage.getItem('token'));
    const user = ref(JSON.parse(localStorage.getItem('user')));

    function setUser(newUser) {
        localStorage.setItem('user', JSON.stringify(newUser));
        user.value = newUser;
    }

    function setToken(tokenValue) {
        localStorage.setItem('token', token.value);
        token.value = tokenValue;
    }

    async function checkToken() {
        try {
            const tokenAuth = 'Bearer ' + token.value;
            const { data } = await http.get('/authenticate', {
                headers: {
                    'Authorization': tokenAuth
                }
            });
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    function isAuthenticated() {
        return token.value !== null;
    }

    function logout() {
        localStorage.removeItem('token');
        token.value = null;
    }

    async function verifyRoleUser(role) {
        const { data } = await http.post('/verifyRoleUser', role);
        return data;
    }

    return {
        token,
        setToken,
        setUser,
        checkToken,
        isAuthenticated,
        logout,
        verifyRoleUser
    };
});