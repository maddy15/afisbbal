<template>
    <div>
        <Slider title="Standing"/>
        <TeamsStandings />
        <a href="#" id="toTop" style="display: block;"><span id="toTopHover" style="opacity: 1;">asd</span>To Top</a>
    </div>
</template>

<script>
import TeamsStandings from '@/components/TeamsStandings'
import Slider from '@/components/Slider'
    export default {
        components: {
            TeamsStandings,
            Slider
        },
        mounted () {
            this.activate();
        },
    }
</script>

<style lang="scss" scoped>

</style>