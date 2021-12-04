import axios from 'axios'

export default {
    install: function (vue) {
        vue.prototype.$axios = axios.create({
            baseURL: '/api',
            timeout:5000
        })
    }
}