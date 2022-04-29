<template>
<div class="demo-tab"><p>{{description}}</p></div>
</template>

<script>
import emitter from '@/libs/emitter.js'
export default {
  data () {
    return {
      description: ''
    }
  },
  methods: {
  },
  created () {
    emitter.on('description', (data) => {
      this.description = data
      console.log('Hi2')
    })
  }
}
</script>

<style scoped>
p{
font-family: 'Noto Sans';
font-size:16px;
}
</style>
