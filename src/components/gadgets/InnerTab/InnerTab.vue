<template>
<button
     v-for="tab in tabs"
     :key="tab"
     :class="['tab-button', { active: currentTab === tab }]"
     @click="currentTab = tab">
    {{ tab }}
</button>
<component :is="currentTabComponent"></component>
</template>

<script>
import description from '@/components/gadgets/InnerTab/DescriptionView.vue'
import note from '@/components/gadgets/InnerTab/NoteView.vue'
export default {
  data () {
    return {
      currentTab: 'description',
      tabs: ['description', 'note']
    }
  },
  components: { description, note },
  computed: {
    currentTabComponent () {
      return this.currentTab
    }
  }
}
</script>
