//导入网络峰组昂模块
import axios from 'axios'
//传递进去参数，成功函数，错误函数
//第一种
// export function request(config,success,failure){
//    //1.创建axios实例
//   const instance1 = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
// //2发送网络请求
//   instance1(config)
//     .then(res=>{
//       success(res)
//     })
//     .catch(err=>{
//       failure(err)
//     })
// }


//第二种
// export function request(config){
//   //1.创建axios实例
//   const instance1 = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
// //2发送网络请求
//   instance1(config.baseConfig)
//     .then(res=>{
//       success(res)
//     })
//     .catch(err=>{
//       failure(err)
//     })
// }


//第三种
// export function request(config){
//   return new Promise((resolve,reject)=>{
//     //1.创建axios实例
//     const instance1 = axios.create({
//       baseURL:'http://123.207.32.32:8000',
//       timeout:5000
//     })
// //2发送网络请求
//     instance1(config)
//       .then(res=>{
//         resolve(res)
//       })
//       .catch(err=>{
//         reject(err)
//       })
//   })
// }


//第四种
export function request(config){
  //1.创建axios实例
  const instance1 = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  //2.axios的拦截器
  //拦截请求,参数是两个函数
  axios.interceptors.request.use(config=>{
    console.log(config);
    //将拦截的内容返回
    //拦截的原因
    // 1.比如config中某些内容不符合服务器的要求
    //2比如=每次发送网络请求的时候，都有希望在洁面中喜爱是一些特殊的信息
    //3.某些网络请求，必须携带一些特殊的信息
    return config

  },err=>{
    console.log(err);
  });
  axios.interceptors.response.use(res=>{
    return res.data
  },err=>{

  });
//3.发送网络请求，本身返回的就是Promise，直接返回就行
   return instance1(config)

}
