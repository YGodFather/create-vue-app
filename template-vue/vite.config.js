import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import viteSvgIcons from 'vite-plugin-svg-icons'
const path = require('path')


function resolve (dir) {
    return path.join(__dirname, dir)
}
// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias:{
            '@': resolve("src")
        },
    },
    server: {
        fs: {
            strict: false
        },
        proxy: {

        }
    },
    // 预处理css 变量
    css: {
        preprocessorOptions: {
            scss: {}
        }
    },
    plugins: [
        vue(),
        viteCompression(),
        viteSvgIcons(
            {
                iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
                symbolId: 'icon-[name]'
            }
        )
    ],
    build: {
        cssCodeSplit: true,
        sourcemap: false,
        chunkSizeWarningLimit: 550, // 单位KB
        assetsInlineLimit: 4096, // 单位字节
        // minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true, // 生产环境去除console
                drop_debugger: true // 生产环境去除debugger
            }
        },
        rollupOptions: {
            output: {
                'vue': ['vue', 'vue-router', 'vuex'], // 如果打包有BUG请屏蔽
                'element-plus': ['element-plus'],
                'echarts': ['echarts'],
            }
        }
    }
})
