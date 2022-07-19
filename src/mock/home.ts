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
    }
] as MockMethod[]
