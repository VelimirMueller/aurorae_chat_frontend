<template>
  <div class="h-full bg-contain rounded-lg flex flex-col justify-center text-grey-900 border-2 border-gray-900">
    <div class="w-full h-full flex flex-col rounded-md">
      <div class="h-1/3 bg-card-bg rounded-md border-black border-2">
        <h1 class="text-grey-50 text-6xl h-full bg-transparent drop-shadow-[2.2px_2.2px_rgba(255,255,255,1)] flex w-full items-center rounded-lg border-2 border-gray-900 bg-card-bg bg-cover bg-opacity-90">
          <img class="h-full w-1/3" src="~assets/img/aurorae-fav-logo.png" alt="">
          <p class="w-full text-white drop-shadow-[2.2px_2.2px_rgba(12,12,12,1)]">AURORAE</p>
        </h1>
      </div>
      <div class="w-full pr-4 flex pl-8">
        <blockquote class="my-8 text-black text-xl px-8 drop-shadow-[1.2px_1.2px_rgba(255,255,255,1)]">
          The name "Aurorae" is a beautiful and poetic name that refers to the natural light display
          that occurs in the polar regions. It is named after the Roman goddess of the dawn, Aurora,
          who was believed to bring joy and happiness.
        </blockquote>
      </div>

      <div class="ml-auto mr-auto flex">
        <ButtonCta class="text-gray-900 px-1" button-text="not Ok" />
        <ButtonCta class="text-gray-900 px-1" button-text="Ok" />
      </div>
    </div>
  </div>
</template>

<style>
blockquote {
  font-style: italic;
  line-height: 1.618;
  font-size: 1.2em;
  width: 30em;
  position: relative;
  padding: 40px 80px;
}

blockquote::before {
  content: open-quote;
  margin: -20px;
  top: 0;
  left: 0;
}

blockquote::after {
  content: close-quote;
  bottom: -40px;
  right: 40px;
}

blockquote::before,
blockquote::after {
  display: block;
  line-height: 1.618;
  font-size: 3em;
  border-radius: 100%;
  text-align: center;
  position: absolute;
}
</style>
