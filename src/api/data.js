//接口请求文件
import axios from "./axios";

//接口调用
export const getAttackData = () => {
    return axios.request({
        url: '/domain',
        methods: 'post'
    })
}
export const getDefenseData = () => {
    return axios.request({
        url: '/domainByURL',
        methods: 'post'
    })
}
export const getResultData = () => {
    return axios.request({
        url: '/getRecentRecords',
        methods: 'post'
    })
}