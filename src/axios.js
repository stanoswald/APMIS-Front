import axios from 'axios'

export default {
    install: function (vue) {
        vue.prototype.$axios = axios.create({
            baseURL: 'http://localhost:8000/APMIS-Server'
        })
    }
}