<template>
  <section>
      <div class="space basketball-bg-gray">
          <Slider title="Basketball"/>
      </div>
    </section>
</template>

<script>
import Slider from '@/components/Slider'
  export default {
      components : {
      Slider
    },
    mounted () {
      this.activate();
    },
  }
</script>



