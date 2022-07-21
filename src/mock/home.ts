import { MockMethod } from 'vite-plugin-mock'

export default [
    {
        url: '/api/home/slideshow',
        method: 'get',
        response: () => {
            return {
                data: [
                    'src/assets/images/slideshow/轮播图1.jpg',
                    'src/assets/images/slideshow/轮播图2.jpg',
                    'src/assets/images/slideshow/轮播图3.jpg',
                    'src/assets/images/slideshow/轮播图4.jpg',
                    'src/assets/images/slideshow/轮播图5.jpg',
                    'src/assets/images/slideshow/轮播图6.jpg',
                    'src/assets/images/slideshow/轮播图7.jpg',
                ]
            }
        }
    }, {
        url: '/api/home/server',
        method: 'get',
        response: () => {
            return {
                data: [
                    {
                        name:'会员福利',
                        plus: 'src/assets/images/header/会员福利0.png',
                        minus: 'src/assets/images/header/会员福利1.png',
                    }, {
                        name:'驱动下载',
                        plus: 'src/assets/images/header/驱动下载0.png',
                        minus: 'src/assets/images/header/驱动下载1.png',
                    }, {
                        name:'小新铺子',
                        plus: 'src/assets/images/header/小新铺子0.png',
                        minus: 'src/assets/images/header/小新铺子1.png',
                    }, {
                        name:'拯救者联盟',
                        plus: 'src/assets/images/header/拯救者联盟0.png',
                        minus: 'src/assets/images/header/拯救者联盟1.png',
                    }, {
                        name:'Think家族',
                        plus: 'src/assets/images/header/Think0.png',
                        minus: 'src/assets/images/header/Think1.png',
                    }, {
                        name:'手机新品',
                        plus: 'src/assets/images/header/手机新品0.png',
                        minus: 'src/assets/images/header/手机新品1.png',
                    }, {
                        name:'刃天堂',
                        plus: 'src/assets/images/header/刃天堂0.png',
                        minus: 'src/assets/images/header/刃天堂1.png',
                    }, {
                        name:'平板电脑',
                        plus: 'src/assets/images/header/平板电脑0.png',
                        minus: 'src/assets/images/header/平板电脑1.png',
                    }, {
                        name:'选件',
                        plus: 'src/assets/images/header/选件0.png',
                        minus: 'src/assets/images/header/选件1.png',
                    }, {
                        name:'智能',
                        plus: 'src/assets/images/header/智能0.png',
                        minus: 'src/assets/images/header/智能1.png',
                    }, {
                        name:'服务',
                        plus: 'src/assets/images/header/服务0.png',
                        minus: 'src/assets/images/header/服务1.png',
                    }, {
                        name:'以旧换新',
                        plus: 'src/assets/images/header/以旧换新0.png',
                        minus: 'src/assets/images/header/以旧换新1.png',
                    }
                ]
            }
        }
    }
] as MockMethod[]
