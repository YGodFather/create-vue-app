import axios from 'axios'
import router from '@/router'
import { ElMessage  } from 'element-plus'
import {HTTP_METHOD} from "@/constant"

const http = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 1000 * 30,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
})

/**
 * 请求拦截
 */
http.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

/**
 * 响应拦截
 */
http.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

/**
 * @Date 2021/12/08
 * @Author Varus
 * @Description:
 *
 */
export const post = (url, config = {}) => {
    return http({url, method: HTTP_METHOD.POST.value, ...config})
}

/**
 * @Date 2021/12/08
 * @Author Varus
 * @Description:
 *
 */
export const deleted = (url, config = {}) => {
    return http({
        url: url,
        method: HTTP_METHOD.DELETE.value,
        ...config
    })
}
/**
 * @Date 2021/12/08
 * @Author Varus
 * @Description: get 请求方法
 *
 */
export const get = (url, config= {}) => {
    return http({
        url: url,
        method: HTTP_METHOD.GET.value,
        ...config
    })
}
/**
 * @Date 2021/12/08
 * @Author Varus
 * @Description: put 请求方法
 *
 */
export const put = (url, config = {}) => {
    return http({
        url: url,
        method: HTTP_METHOD.PUT.value,
        ...config
    })
}


export default http
