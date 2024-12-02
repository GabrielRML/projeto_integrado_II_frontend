<template>
    <div class="container">
        <div class="card">
            <div class="d-flex align-items-center gap-4" style="padding: 2rem 1rem;">
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin"
                    class="rounded-circle border border-5" width="200px">
    
                <div class="mt-3">
                    <h4>N/C</h4>
                    <p class="text-secondary mb-1">Desenvolvedor Full Stack</p>
                    <p class="text-muted font-size-sm">N/C</p>
                    <button class="btn btn-outline-primary">
                        Instagram &nbsp;<font-awesome-icon :icon="['fab', 'instagram']" size="xl" />
                    </button>
                </div>
            </div>
        </div>

        <TabView>
            <TabPanel header="Perfil">
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </TabPanel>
            <TabPanel header="Config. da agenda">
                <ConfigAgendaComponent />
            </TabPanel>
        </TabView>
    </div>
</template>


<script>
import ConfigAgendaComponent from '@/components/ConfigAgendaComponent.vue';

export default {
    components: {
        ConfigAgendaComponent
    },
    data() {
        return {}
    },
    methods: {
        
    },
    mounted() {
        
    }
}
</script>

<style>
.container {
    max-width: 1000px;

    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.p-tabview-nav {
    margin: 0;
}

.p-tabview-nav-link {
    text-decoration: none;
}
</style>