import request from '@/utils/request'

const api_name = `/api/order/orderInfo`


export default {

  //取消订单
  cancelOrder(orderId){
    return request({
      url: `${api_name}/auth/cancelOrder/${orderId}`,
      method:'get'
    })
  },
  //查询就诊人列表
  saveOrders(scheduleId,patientId){
    return request({
      url: `${api_name}/auth/submitOrder/${scheduleId}/${patientId}`,
      method:'post'
    })
  },

//  获取订单列表
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/auth/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  //获取订单状态
  getStatusList() {
    return request({
      url: `${api_name}/auth/getStatusList`,
      method: 'get'
    })
  },


  getOrders(orderId){
    return request({
      url: `${api_name}/auth/getOrder/${orderId}`,
      method:'get'

    })
  },

  getById(id) {
    return request({
      url: `${api_name}/show/${id}`,
      method: 'get'
    })
  }


}
