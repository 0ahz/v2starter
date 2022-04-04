<template>
  <div class="p-6 flex items-center space-x-4">
    <i-ph-arrow-left-duotone class="cursor-pointer" @click="$router.go(-1)" />
    <h1 class="text-xl">{{ $t('login') }}</h1>
  </div>
</template>
