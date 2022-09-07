function toast(title, duration = 3000) {
  uni.showToast({
    icon: "none",
    title,
    duration
  })
}
toast.error = function(title, duration = 3000) {
  uni.showToast({
    icon: "error",
    title,
    duration
  })
}
toast.isloading = function(title, duration = 1000) {
  uni.showToast({
    icon: "loading",
    title,
    duration
  })
}
export default toast
