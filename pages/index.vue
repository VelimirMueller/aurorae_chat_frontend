<template>
  <div class="h-[90vh]">
    <AuroraeContainerWrapper>
      <template #content>
        <AuroraeCardWrapper
          class="w-1/4 hidden lg:flex"
          :is-bg="true">
          <template #card-header>
            <AuroraeCardHeader area="chatbot" />
          </template>
          <template #card-body>
            <aside class="w-full flex flex-col justify-center items-center overflow-y-auto h-full">
              <AuroraeBlockquoteWrapper
                class="h-full"
                headline="What is Aurorae?"
                :highlight-headline="true">
                <div class="flex flex-col">
                  <p class="p-2 my-4">
                    The name "Aurorae" is a beautiful and poetic name that refers to the natural light display
                    that occurs in the polar regions.
                  </p>
                  <p class="p-2 my-4">
                    It is named after the Roman goddess of the dawn, Aurora,
                    who was believed to bring joy and happiness.
                  </p>
                </div>
              </AuroraeBlockquoteWrapper>
            </aside>
          </template>
        </AuroraeCardWrapper>
        <ChatWrapper />
      </template>
    </AuroraeContainerWrapper>
  </div>
</template>
