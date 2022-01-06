import constant from '../constant'
import Enum from "./enum";
import router from '@/router'


export function initPlugin(app) {
    // 加载枚举类型
    app.use(router)
    app.use(Enum, constant)
}
