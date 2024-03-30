export const useProductsStore = defineStore('productsStore', () => {

const items = ref()
const product = ref()
const loading = ref(false)

const meta = ref({
  currentPage: 1,
  totalPages: 0,
  itemsPerPage: 8,
})


return { items, product, meta, loading }

})
