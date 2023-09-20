<template>
  <div class="w-full h-full flex flex-col bg-zinc-950">
    <div class="w-full h-16 flex justify-end px-10 py-2">
      <BurgerIcon class="block fill-white" :width="48" :height="48" />
    </div>
    <div class="w-full grow flex items-center justify-center">
      <Logo :width="300" :height="100" />
    </div>
    <div class="w-full flex flex-col items-center justify-center gap-4 my-8">
      <span class="text-white text-lg text-center">Un studio de développement logiciel sur mesure.</span>
      <img class="block animate-bounce" src="/arrow.svg" width="48" height="48" />
    </div>
  </div>
</template>
