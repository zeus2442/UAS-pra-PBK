<template>
  <q-layout view="hHh lpR fFf">
    <q-header style="background-color: #203a43;">
      <q-toolbar>
        <q-toolbar-title>
          Navbar
        </q-toolbar-title>
        <div class="q-gutter-sm">
          <q-btn flat to="/widget" label="Widget" />
          <q-btn flat to="/portocv" label="PortoCv" />
          <q-btn flat to="/tugas2" label="Tugas 2" />
          <q-btn flat to="/tugas3" label="Tugas 3" />
          <q-btn flat to="/tugas4" label="Tugas 4" />
          <q-btn flat to="/tugas5" label="Tugas 5" />
          <q-btn flat to="/tugas6" label="Tugas 6" />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}
</style>
