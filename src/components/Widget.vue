<template>
  <div class="q-pa-md">
    <q-card class="my-card dsl">
      <q-card-section>
        <div class="text-h6">Weather Widget</div>
        <q-input v-model="location" label="Enter location" :label-color="'white'" />
        <q-btn @click="fetchWeather" label="Get Weather" class="q-mt-md" />
      </q-card-section>
      <div class="custom-shape-divider-top-1719135224">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
    </q-card>

    <q-card v-if="weather" class="my-card q-mt-md jjk">
      <q-card-section>
        <div class="text-h6">{{ weather.name }}</div>
        <div>Time: {{ localTime }}</div>
        <div>Temperature: {{ weather.main.temp }} °C</div>
        <div>Weather: {{ weather.weather[0].description }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'

const location = ref('')
const weather = ref(null)

const fetchWeather = async () => {
  const apiKey = 'cafa6e92f105bddd4a4d17a0bf8a9a7e'
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location.value}&appid=${apiKey}&units=metric`
    )
    weather.value = response.data
  } catch (error) {
    console.error('Error fetching weather data', error)
  }
}

const localTime = computed(() => {
  if (weather.value) {
    const offset = weather.value.timezone / 3600
    const localTime = new Date(new Date().getTime() + offset * 3600 * 1000)
    return localTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
  return ''
})
</script>

<style>
.my-card {
  max-width: 400px;
  margin: auto;
  border-radius: 16px;
  background-color: transparent;
  color: aliceblue;
  box-shadow: 0 5px 10px white;
}

.dsl {
  margin-top: 50px;
}

.jjk {
  margin-top: 20px;
}

.text-h6 {
  font-weight: bold;
}

body {
  background: #0f2027;
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
}

.custom-shape-divider-top-1719135224 {
  position: absolute;
  top: 1px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: -1;
  filter: drop-shadow(1px 5px 10px rgb(231, 231, 231));
}

.custom-shape-divider-top-1719135224 svg {
  position: relative;
  display: block;
  width: calc(100% + 5px);
  height: 150px;
}

.custom-shape-divider-top-1719135224 .shape-fill {
  fill: #347a98;
}
</style>
