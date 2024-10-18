<template>
    <navBarView></navBarView>
    <div style="margin-top: 100px"></div>
    <div class="sidenav">
        <div class="profile">
            <img src="../../public/image/avatar-1.png" alt="" width="100" height="100">
            <div class="name">
                {{ profile.firstName }} {{ profile.lastName }}
            </div>
            <div class="job">Desenvolvedor</div>
        </div>

    </div>

    <div class="main">
        <h2>Dados do perfil</h2>
        <div class="card">
            <div class="card-body">
                <i class="fa fa-pen fa-xs edit"></i>
                <table>
                    <tbody>
                        <tr>
                            <td>Usuario</td>
                            <td>:</td>
                            <td>{{ profile.login }}</td>
                        </tr>
                        <tr>
                            <td>Nome</td>
                            <td>:</td>
                            <td>{{ profile.firstName }} {{ profile.lastName }}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>{{ profile.email }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <h2>Redes Sociais</h2>
        <div class="card">
            <div class="card-body">
                <i class="fa fa-pen fa-xs edit"></i>
                <div class="social-media">
                    <span class="fa-stack fa-sm">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-facebook fa-stack-1x fa-inverse"></i>
                    </span>
                    <span class="fa-stack fa-sm">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                    <span class="fa-stack fa-sm">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-instagram fa-stack-1x fa-inverse"></i>
                    </span>
                    <span class="fa-stack fa-sm">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-whatsapp fa-stack-1x fa-inverse"></i>
                    </span>
                </div>
            </div>
        </div>
        <div style="margin-top: 50px;"> 
        </div>
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
// import axios from 'axios';
import navBarView from '../components/navBarView.vue';

export default {
  components: {
    RouterLink, RouterView, navBarView
  },
  data: function () {
    return {
        profile: {
                name: '',
                email: '',
                address: '',
                hobbies: '',
                job: '',
                skill: ''
            }
    }
  },
  computed: {
  },
  methods: {

  },
  mounted: function () {
    const profileData = JSON.parse(localStorage.getItem('profile')) || {};
        this.profile = { ...this.profile, ...profileData };
  },
}
</script>
<style>
/* Import Font Dancing Script */
@import url(https://fonts.googleapis.com/css?family=Dancing+Script);

* {
    margin: 0;
}

body {
    background-color: #e8f5ff;
    font-family: Arial;
    overflow: hidden;
}

.sidenav {
    background-color: #fff;
    color: #333;
    border-bottom-right-radius: 25px;
    height: 86%; 
    left: 0;
    overflow-x: hidden;
    overflow-y: auto; 
    padding-top: 20px;
    position: absolute;
    top: 128px;
    width: 250px;
}

.profile {
    margin-bottom: 20px;
    margin-top: -12px;
    text-align: center;
}

.profile img {
    border-radius: 50%;
    box-shadow: 0px 0px 5px 1px #48A3BF;
}

.name {
    font-size: 20px;
    font-weight: bold;
    padding-top: 20px;
}

.job {
    font-size: 16px;
    font-weight: bold;
    padding-top: 10px;
}

.main {
    margin-top: 2%;
    margin-left: 29%;
    font-size: 28px;
    padding: 0 10px;
    width: 58%;
    height: 86%; 
    overflow-y: auto; 
}
.main .card {
    background-color: #fff;
    border-radius: 18px;
    box-shadow: 1px 1px 8px 0 #48A3BF;
    height: auto;
    margin-bottom: 20px;
    padding: 20px 0 20px 50px;
}

.main .card table {
    border: none;
    font-size: 16px;
    height: 270px;
    width: 80%;
}

.edit {
    position: absolute;
    color: #e7e7e8;
    right: 14%;
}

.social-media {
    text-align: center;
    width: 90%;
}

.social-media span {
    margin: 0 10px;
}

.fa-facebook:hover {
    color: #4267b3 !important;
}

.fa-twitter:hover {
    color: #1da1f2 !important;
}

.fa-instagram:hover {
    color: #ce2b94 !important;
}

.fa-whatsapp:hover {
    color: #25d366 !important;
}

</style>