<template>
<div class="filler">
</div>
</template>
<script>

export default {
  data () {
    return {
      filler: ''
    }
  },
  mounted () {
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        this.filler = entry.contentRect.height + 'px'
      })
    })
    resizeObserver.observe(document.querySelector('#nBar'))
  }
}
</script>

<style scope>
.filler{
  padding-bottom: v-bind(filler);
}
</style>
