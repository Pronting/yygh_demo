import request from '@/utils/request'

const api_name = `/api/order/orderInfo`


export default {
  //查询就诊人列表
  saveOrders(scheduleId,patientId){
    return request({
      url: `${api_name}/send/${scheduleId}/${patientId}`,
      method:'post'
    })
  }

}
