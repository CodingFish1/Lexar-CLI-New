<template>
<nav aria-label="Page navigation example" v-if="isDiplay">
    <ul class="pagination">
      <li class="page-item " :class="pagination.has_pre ? 'enabled':'disabled'">
        <a class="page-link" href="" aria-label="Previous" @click.prevent="pageTrans(pagination.current_page-1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in pagination.total_pages" :key="page" :class="{active:page===pagination.current_page}">
      <a class="page-link" href="" @click.prevent="pageTrans(page)">{{page}}</a></li>
      <li class="page-item" v-bind:class="pagination.has_next ? 'enabled':'disabled'">
        <a class="page-link" href="" aria-label="Next" @click.prevent="pageTrans(pagination.current_page+1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
</nav>
</template>

<script>
import emitter from '@/libs/emitter.js'
export default {
  data () {
    return {
      pagination: {},
      isDiplay: true
    }
  },
  created () {
    emitter.on('pagination', (data) => {
      this.pagination = data
      console.log(this.pagination)
    })

    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        console.log(this.$route.query.page)
        if (this.$route.query.page !== undefined) {
          this.isDiplay = true
        } else {
          this.isDiplay = false
        }
      }
    )
  },
  methods: {
    pageTrans (page) {
      emitter.emit('changePage', page)
    }
  }
}
</script>
