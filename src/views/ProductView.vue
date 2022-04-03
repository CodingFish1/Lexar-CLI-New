<template>
<NavBar :is-dark="isDark"></NavBar>
</template>

<script>
export default {
  data () {
    return {
      isDark: false
    }
  }
}
</script>
