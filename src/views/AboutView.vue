<template>
  <div class="about">
    <h1>USER_DATA</h1>

    <div class="card" style="width: 18rem">
      <img
        src="https://images.pexels.com/photos/2698519/pexels-photo-2698519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">使用者</h5>
        <p class="card-text">個人資料</p>
        <p>姓名：{{ user.name }}</p>
        <p>身分證：{{ user.id }}</p>
        <p>電話：{{ user.phone }}</p>
        <p>信箱：{{ user.email }}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'
export default {
  setup() {
    const user = ref({})
    const url = import.meta.env.VITE_PATH //環境變數 .env中
    onMounted(() =>
      axios.get(url).then((res) => {
        console.log(res.data.results)
        user.value = res.data.results[0]
        console.log(user)
      })
    )
    onMounted(() => {
      console.log(import.meta.env.VITE_TEXT)
    })
    return {
      user
    }
  }
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
