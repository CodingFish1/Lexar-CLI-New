<template>
<div class="overall">
<button
     v-for="tab in tabs"
     :key="tab"
     :class="['tab-button', { active: currentTab === tab }]"
     @click="currentTab = tab">
    {{ tab }}
</button>
<keep-alive>
  <component :is="currentTabComponent"></component>
</keep-alive>
</div>
</template>

<script>
import description from '@/components/gadgets/InnerTab/DescriptionView.vue'
import note from '@/components/gadgets/InnerTab/NoteView.vue'
export default {
  data () {
    return {
      currentTab: 'Description',
      tabs: ['Description', 'Note']
    }
  },
  components: { description, note },
  computed: {
    currentTabComponent () {
      return this.currentTab.toLowerCase()
    }
  }
}
</script>

<style scoped>
.overall {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  width:100px;
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.demo-tab {
  border: 1px solid #ccc;
  padding: 10px;
}

.dynamic-component-demo-posts-tab {
  li {
    margin-bottom: 1.5rem;
  }
}
</style>
