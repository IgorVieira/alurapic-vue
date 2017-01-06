import Home from './components/home/Home.vue';
// import Cadastro from './components/cadastro/Cadastro.vue';
// const Cadastro = resolve => require(['./components/cadastro/Cadastro.vue'], resolve);
const Cadastro = () => System.import('./components/cadastro/Cadastro.vue');


export const routes = [

    { path: '', name: 'home', component: Home, titulo: 'Home', menu: true },
    { path: '/cadastro', name:'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true },
    { path: '/cadastro/:id', name:'altera', component: Cadastro, titulo: 'Cadastro', menu: false },
    { path: '*', component: Home, menu: false }

];

/*
import Home from './components/home/Home.vue';
// import Cadastro from './components/cadastro/Cadastro.vue';

export const routes = [

    { path: '', name: 'home', component: Home, titulo: 'Home', menu: true },
    { 
        path: '/cadastro', 
        name:'cadastro', 
        component: resolve => require(['./components/cadastro/Cadastro.vue'], resolve),
        titulo: 'Cadastro', menu: true 
    },
    { 
        path: '/cadastro/:id', 
        name:'altera', 
        component: resolve => require(['./components/cadastro/Cadastro.vue'], resolve), 
        titulo: 'Cadastro', 
        menu: false },
    { path: '*', component: Home, menu: false }

];
*/