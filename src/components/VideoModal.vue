<template>
<div class="container">
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" ref="modaldom">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body">
                  <div class="ratio ratio-16x9">
                    <iframe class="embed-responsive-item videocontent" width="auto" height="auto" :src="urlInlet" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import emitter from '@/libs/emitter'
import Modal from 'bootstrap/js/dist/modal'
export default {
  data () {
    return {
      urlInlet: '',
      modalOn: '',
      isDisplay: true
    }
  },
  created () {
    emitter.on('openModal', (data) => {
      this.urlInlet = data
      console.log(this.urlInlet)
      this.modalOn.show()
    })
  },
  mounted () {
    this.modalOn = new Modal(this.$refs.modaldom)
    this.stopPlaying()
  },
  methods: {
    stopPlaying () {
      this.$refs.modaldom.addEventListener('hide.bs.modal', () => {
        const video = document.querySelector('iframe')
        video.src = ''
        this.urlInlet = ''
      })
    }
  }
}
</script>

<style>
/* .fp-enabled .modal{
  position:fixed !important;
  top:25%;
} */
</style>
