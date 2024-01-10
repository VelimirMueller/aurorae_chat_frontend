<template>
  <div class="h-full bg-contain rounded-lg flex flex-col justify-center text-grey-900">
    <div class="w-full h-full flex flex-col rounded-md">
      <div class="h-1/3 bg-card-bg rounded-md">
        <h1 class="text-grey-50 text-6xl h-full bg-transparent flex w-full items-center border-2 border-gray-900 bg-card-bg bg-cover bg-opacity-90">
          <img class="h-full w-1/3" src="~assets/img/aurorae-fav-logo.png" alt="">
          <p class="w-full text-white drop-shadow-[2.2px_2.2px_rgba(12,12,12,1)]">
            AURORAE
          </p>
        </h1>
      </div>
      <div class="w-full pr-4 flex pl-8">
        <blockquote class="my-8 text-black text-xl px-8 drop-shadow-[1.2px_1.2px_rgba(255,255,255,1)]">
          The name "Aurorae" is a beautiful and poetic name that refers to the natural light display
          that occurs in the polar regions. It is named after the Roman goddess of the dawn, Aurora,
          who was believed to bring joy and happiness.
        </blockquote>
      </div>

      <div class="ml-auto mr-auto flex py-2">
        <ButtonCta class="text-gray-900" button-text="not Ok" />
        <ButtonCta class="text-gray-900" button-text="Ok" />
      </div>
    </div>
  </div>
</template>
