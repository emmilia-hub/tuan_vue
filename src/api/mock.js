import Mock from 'mockjs'
import attackApi from './mockServerData/attack'

 Mock.mock('/attack/getData','post',attackApi.getStatisticalData)