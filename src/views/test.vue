<template>
    <div class="phone-wrap">
        <div class="phone-body">
           <div v-img-preview class="post-text">
                <h2 class="post-title">说走就走的拉萨里尔</h2>
                <div class="post-content">
                    <p>On education, we will expand exchange programs, and increase scholarships, like the one that brought my father to America, while encouraging more Americans to study in Muslim communities.On education, we will expand exchange programs, and increase scholarships, like the one that brought my father to America, while encouraging more Americans to study in Muslim communities.On education, we will expand exchange programs, and increase scholarships, like the one that brought my father to America, while encouraging more Americans to study in Muslim communities.</p>
                    <img src="../assets/images/d_03.jpg" alt="">
                    <img src="../assets/images/d_03.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                city: '',
                "data": [
                        {
                            "name": "推荐",
                            "id": 0
                        },
                        {
                            "name": "视频",
                            "id": 11
                        },
                        {
                            "name": "大杂烩",
                            "id": 1
                        },
                        {
                            "name": "娱乐八卦",
                            "id": 2
                        },
                        {
                            "name": "原创区",
                            "id": 3
                        },
                        {
                            "name": "鬼话",
                            "id": 4
                        },
                        {
                            "name": "游戏烩",
                            "id": 5
                        },
                        {
                            "name": "冷笑话",
                            "id": 6
                        },
                        {
                            "name": "汽车烩",
                            "id": 7
                        },
                        {
                            "name": "联盟",
                            "id": 8
                        },
                        {
                            "name": "军事烩",
                            "id": 9
                        },
                        {
                            "name": "猫扑电台",
                            "id": 10
                        }
                    ]
            }
        },
        created(){
            this.getCity();
        },
        mounted(){

            this.getAll(this.data).then( x => console.log(x))

            // function asyncGet (x) {
            //   return new Promise(resolve => setTimeout(() => {
            //     console.log('a')
            //     resolve(x)
            //   }, 500))
            // }

            // async function test () {
            //   console.log('b')
            //   const x = 3 + 5
            //   console.log(x)

            //   // const a = await asyncGet(1)
            //   // console.log(a)

            //   // const b = await asyncGet(2)
            //   // console.log(b)

            //   const [a, b] = await Promise.all([
            //       asyncGet(1),
            //       asyncGet(2)
            //     ])
            //   console.log(a);
            //   console.log(b);

            //   // const a = await Promise.resolve(asyncGet(2))

            //   console.log('c')  
            //   return a + b
            // }

            // const now = Date.now()
            // console.log('d')
            // test().then(x => {
            //   console.log(x)
            //   console.log(`elapsed: ${Date.now() - now}`)
            // })
            // console.log('f')

        },
        methods: {
            async getCity() {
                return Promise.resolve('a')
            },

            async getAll(vals){
                return Promise.all(vals.map( v => this.test(v) ))
            },

            test(x) {
              return new Promise(resolve => {
                console.log('async')
                resolve(x)
              })
            }
        }
    }
</script>
