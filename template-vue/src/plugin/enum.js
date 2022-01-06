const Enum =  {
    install(app, options) {
        /**
         * 根据枚举值获取描述
         * @param {*} constantName 枚举名
         * @param {*} value          枚举值
         * @returns
         */
        const constantInfo= options.enumInfo|| {}
        const Enum = {}
        Enum.getDescByValue = function (constantName, value) {
            if (!constantInfo.hasOwnProperty(constantName)) {
                return ''
            }
            let constantItem = constantInfo[constantName]
            for (let item in constantItem) {
                if (constantItem[item].value === value) {
                    return constantItem[item].desc
                }
            }
        }
        /**
         * 根据枚举名获取对应的描述键值对[{value:desc}]
         * @param {*} constantName 枚举名
         * @returns
         */
        Enum.getValueDescList = function (constantName) {
            if (!constantInfo.hasOwnProperty(constantName)) {
                return []
            }
            const result = []
            let constantItem = constantInfo[constantName]
            for (let item in constantItem) {
                let value = constantItem[item].value
                let desc = constantItem[item].desc
                result.push({
                    value,
                    desc
                })
            }
            return result
        }

        /**
         * 根据枚举名获取对应的value描述键值对{value:desc}
         * @param {*} constantName 枚举名
         * @returns
         */
        Enum.getValueDesc = function (constantName) {
            if (!constantInfo.hasOwnProperty(constantName)) {
                return {}
            }
            const result = {}
            let constantItem = constantInfo[constantName]
            for (let item in constantItem) {
                result[constantItem[item].value] = constantItem[item].desc
            }
            return result
        }
        app.config.globalProperties.$Enum = Enum
        app.provide('$Enum', Enum)
    }
}


export function userEnum(app) {
    return app.use(Enum)
}

export default Enum
