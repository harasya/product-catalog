<template>
  <div class="products-content">
    <div class="products">
      <Product v-if="!pending" v-for="(item, key) in products" :key="key" :item="item" />
      <Placeholder v-else v-for="index in 8" :key="index"/>
    </div>
    <Pagination  :current-page="meta.currentPage" :totalPages="totalPages" @page-change="handlePageChange"/>
  </div>
</template>

<script setup lang="ts">
import type { BaseResponseAPI } from '~/@types/type.api';

const products = computed(() => {
  const startIndex = (meta.value.currentPage - 1) * meta.value.itemsPerPage;
  const endIndex = startIndex + meta.value.itemsPerPage;
  return data.value?.products.slice(startIndex, endIndex);
})

const totalPages = computed(() => {
  const total  = data.value?.products.length ?? 0
  console.error("💢 ~ totalPages ~ total:", total)
  return Math.ceil(total / meta.value.itemsPerPage);
})

const meta = ref({
  currentPage: 1,
  totalPages: 0,
  itemsPerPage: 8,
})

const { data, status, pending } = await  useApi<BaseResponseAPI>('/products')

const handlePageChange = (pageNumber: number) =>{
  meta.value.currentPage = pageNumber;
}
</script>

<style lang="postcss" scoped>
.products-content {
  padding: 1rem;
  .products {
    display: grid;
    gap: 1rem;
    flex: auto;
    @media (min-width: 500px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (min-width: 720px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));

    }
    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    /* @media (min-width: 768px) {
    } */
  }
}
</style>
