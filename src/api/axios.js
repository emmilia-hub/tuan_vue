import axios from 'axios'
import config from '@/config'

//将配置文件与axios结合封装
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

//ES6
class HttpRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }
    getInsideConfig() {
        const config = {
            baseUrl: this.baseUrl,
            header: {}
        }
        return config
    }
    //拦截器
    interceptors(instance) {
        // 添加请求拦截器
        instance.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        instance.interceptors.response.use(function (response) {
            // 2xx 范围内的状态码都会触发该函数。
            // 对响应数据做点什么
            return response;
        }, function (error) {
            // 超出 2xx 范围的状态码都会触发该函数。
            // 对响应错误做点什么
            console.log(error)
            return Promise.reject(error);
        });
    }

    //请求接口
    request(options) {
        const instance = axios.create({
            timeout: 3000
        })
        options = {
            ...this.getInsideConfig(),
            ...options
        }
        //调用拦截器
        this.interceptors
        return instance(options)
    }
}

export default new HttpRequest(baseUrl)