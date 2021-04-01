<template>
  <div>
    <p>
      A simple component to test imports.<br />
      Import `ImageTest` below
    </p>
    <ImageTest />
  </div>
</template>
<script>
import Vue from 'vue'
import ImageTest from '@/components/ImageTest.vue'

export default Vue.extend({
  name: 'PagePodcast',
  components: {
    ImageTest,
  },
})
</script>
