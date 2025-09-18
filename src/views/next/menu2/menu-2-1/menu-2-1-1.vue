<template>
  <a-card title="test">
    <a-input v-model="content" placeholder="请输入信息" />
  </a-card>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  const content = ref('大伟聊前端');
</script>
