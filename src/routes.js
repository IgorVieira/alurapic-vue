import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';

export const routes = [

    { path: '', name: 'home', component: Home, titulo: 'Home' },
    { path: '/cadastro', name:'cadastro', component: Cadastro, titulo: 'Cadastro' }

];