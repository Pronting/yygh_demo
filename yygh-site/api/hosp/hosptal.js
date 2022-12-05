import request from '@/utils/request'
const api_name = `/api/hosp/hospital`
export default{
//  查询医院列表
  getPageList(page, limit, searchObj) {
    return request({
      url:`${api_name}/findHospitalList/${page}/${limit}`,
      method:'get',
      params: searchObj
    })
  },
//  根据医院名称模糊查询
  getByHosname(hosname) {
    return request({
      url:`${api_name}/findByHosName/${hosname}`,
      method:'get',
    })
  },
//  根据医院标号获取医院预约挂号详情
  show(hoscode) {
    return request({
      url: `${api_name}/findHospitalDetail/${hoscode}`,
      method: 'get'
    })
  },
  //根据医院编号查询科室信息
  findDepartment(hoscode) {
    return request({
      url: `${api_name}/department/${hoscode}`,
      method: 'get'
    })
  }

}
