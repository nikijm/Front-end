<template>
  <div>
    <Modal
      :model-value="showCompanyUserModal"
      @on-cancel="close"
      :footer-hide="true"
      :transfer="true"
      :mask-closable="false"
      width="400"
      style="height: 200px"
    >
      <div>
        <div v-color="'#41B9B2'" v-font="20" v-padding="15">
          Enterprise account is required to publish work
        </div>

        <!-- <div class="mt_0">
          <Button type="primary" class="submit" shape="circle">confirm</Button>
        </div> -->
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">
  import { watchEffect, defineProps, ref } from 'vue'
  const props = defineProps({
    showCompanyUserModal: Boolean
  })

  const emits = defineEmits(['close'])

  // close-dailog
  const close = () => {
    emits('close', false)
  }
</script>
