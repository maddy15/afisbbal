import Vue from 'vue';


const SliderActivate = {
    install(Vue,options){
        Vue.mixin({
            methods: {
                activate() {
                    $(".slider").responsiveSlides({
                        auto: true,
                        nav: false,
                        speed: 1500,
                        namespace: "callbacks",
                        pager: false,
                    });
                }
            },
        });
    }
}

Vue.use(SliderActivate);