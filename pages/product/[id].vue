<template>
  <div v-if="!pending" class="product">
    <div class="product__image">
      <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
        <Slide v-for="(slide, key) in images" :key="key">
          <div class="carousel__item">
            <img :src="slide" width="250"/>
          </div>
        </Slide>
      </Carousel>

      <Carousel
        id="thumbnails"
        :items-to-show="3"
        :wrap-around="true"
        v-model="currentSlide"
        ref="carousel"
      >
        <Slide v-for="(slide, key) in images" :key="key">
          <div class="carousel__item" @click="slideTo((key + 1) - 1)">
            <img :src="slide" width="150"/>
          </div>
        </Slide>
      </Carousel>
    </div>
    <div class="product__detail">
      <div class="product__detail-title">
        <h2>{{ product.title }}</h2>
        <h1>${{ product.price }}</h1>
      </div>
      <ul class="product__detail-list">
        <li>Brand: {{ product.brand }}</li>
        <li>Category: {{ product.category }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BaseResponseAPI } from '~/@types/type.api';
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

definePageMeta({layout: 'single'})


const store = useProductsStore()
const { product } = storeToRefs(store)
const route = useRoute()
const currentSlide = ref(3)
const images = computed(() => product.value.images)

const slideTo = (value: number) => {
  currentSlide.value = value
}

const { data, status, pending } = await  useApi<BaseResponseAPI>(`/products/${route.params.id}`)

watch(pending, () => {
  if(!pending.value)
    product.value = data.value
})
</script>

<style lang="postcss" scoped>
.product {
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  .product__image {
    grid-column: span 2 / span 2;
    position: relative;
    width: 100%;
  }
  .product__detail {
    .product__detail-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .product__detail-list {
      list-style: none;
      padding: 0;
    }
  }
}
</style>
