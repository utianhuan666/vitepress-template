<template>
  <div class="api-table">
    <h3 v-if="title">{{ title }}</h3>
    <table>
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="index">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex">
            <code v-if="cellIndex === 0" class="api-name">{{ cell }}</code>
            <span v-else v-html="cell"></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  headers: string[];
  data: string[][];
}

withDefaults(defineProps<Props>(), {
  title: "",
});
</script>

<style scoped>
.api-table {
  margin: 20px 0;
}

.api-table h3 {
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 600;
}

.api-table table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
}

.api-table th,
.api-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid var(--vp-c-divider);
}

.api-table th {
  background-color: var(--vp-c-bg-soft);
  font-weight: 600;
  font-size: 14px;
}

.api-table td {
  font-size: 14px;
}

.api-table tr:last-child td {
  border-bottom: none;
}

.api-name {
  background-color: var(--vp-code-bg);
  color: var(--vp-code-color);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
}
</style>
