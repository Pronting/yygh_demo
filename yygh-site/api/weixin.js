import request from "@/utils/request"

const api_name = `/api/order/weixin`

export default{
  //生成微信支付的二维码
  queryPayStatus(orderId) {
    return request({
      url: `/api/order/weixin/queryPayStatus/${orderId}`,
      method: 'get'
    })
  },

  createNative(orderId){
    //查询支付状态的接口
    return request({
      url:`${api_name}/createNative/${orderId}`,
      method:'GET'
    })
  }
}
