<script setup>
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <hr />
      <div class="my-footer">
        Before I lay me down to sleep, I pray the lord my soul to keep.
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>
