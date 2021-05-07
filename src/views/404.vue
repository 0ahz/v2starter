<template>
  <div class="p-4" @click="$ebus.emit('app.ebus', 'from 404')">
    <h1 class="text-xl">NotFound</h1>
  </div>
</template>
