import fly from '@/utils/require.js'
export const getGoodsListApi = (data) => {
  return fly.get('/goods/search', data)
}
