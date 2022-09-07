import fly from '@/utils/require.js'
export const getBanners = () => {
  return fly.get('/home/swiperdata')
}
export const getNavList = () => {
  return fly.get('/home/catitems')
}

export const getFloorsList = () => {
  return fly.get('/home/floordata')
}
