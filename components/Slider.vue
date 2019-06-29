<template>
    <div>
        <div class="slider">
            <ul class="slider rslides callbacks callbacks1">
                <li id="callbacks1_s0" class="callbacks1_on" style="display: block; float: left; position: relative; opacity: 1; z-index: 2; transition: opacity 1500ms ease-in-out 0s;">
                    <div class="w3ls-banner-image w3ls-banner-image1">
                        <div class="layer">
                            <div class="banner-text">
                                <h3>{{ title }}</h3>
                            </div>
                        </div>
                    </div>
                </li>
                <li id="callbacks1_s1" class="" style="float: none; position: absolute; opacity: 0; z-index: 1; display: list-item; transition: opacity 1500ms ease-in-out 0s;">
                    <div class="w3ls-banner-image  w3ls-banner-image2">
                        <div class="layer">
                            <div class="banner-text">
                                <h3>{{ title }}</h3>
                            </div>
                        </div>
                    </div>
                </li>
                <li id="callbacks1_s2" class="" style="float: none; position: absolute; opacity: 0; z-index: 1; display: list-item; transition: opacity 1500ms ease-in-out 0s;">
                    <div class="w3ls-banner-image  w3ls-banner-image3">
                        <div class="layer">
                            <div class="banner-text">
                                <h3>{{ title }}</h3>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            
        </div>
    </div>
</template>

<script>
    export default {
        props : ['title'],
        mounted () {
            this.activate();
        },
    }
</script>

<style lang="scss" scoped>

</style>