<template>
  <a-card class="footer-container card-border-radius" :bordered="false">
    <a href="https://beian.miit.gov.cn">鲁ICP备2025140741号</a>
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    Copyright © {{ projectName }} 2025
  </a-card>
</template>

<script lang="ts" setup>
  import { projectName } from '../../setting'
</script>

<style lang="less" scoped>
  .footer-container {
    height: @footerHeight;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-top: 1px dashed var(--color-border);
  }
</style>
