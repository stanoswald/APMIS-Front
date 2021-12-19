import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    username: window.sessionStorage.getItem("username"),
    role: window.sessionStorage.getItem("role"),
    name: window.sessionStorage.getItem("name"),
    tel: window.sessionStorage.getItem("tel"),
    email:window.sessionStorage.getItem("email"),

    dept: window.sessionStorage.getItem("dept"),
    dormId: window.sessionStorage.getItem("dormId"),
    regDate: window.sessionStorage.getItem("regDate"),
}

const mutations = {
    SET_USER: (state, data) => {
        state.username = data.username;
        state.role = data.role;
        state.name = data.name;
        state.tel = data.tel;
        state.email = data.email;

        window.sessionStorage.setItem("username", data.username);
        window.sessionStorage.setItem("role", data.role);
        window.sessionStorage.setItem("name", data.name);
        window.sessionStorage.setItem("tel", data.tel);
        window.sessionStorage.setItem("email", data.email);
    },
    SET_STUDENT: (state, data) => {
        state.dept = data.dept;
        state.dormId = data.dormId;
        state.regDate = data.regDate;

        window.sessionStorage.setItem("dept", data.dept);
        window.sessionStorage.setItem("dormId", data.dormId);
        window.sessionStorage.setItem("regDate", data.regDate);
    }
}

const actions = {}

export default new Vuex.Store({
    state,
    mutations,
    actions
})