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
            <aside class="w-full flex flex-col justify-center items-center overflow-y-auto h-[100%]">
              <AuroraeBlockquoteWrapper
                class="h-[100%]"
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
          <template #card-footer>
            <div class="flex flex-row w-full justify-center items-center h-full pb-8 px-4">
              <AuroraeButtonTypes class="w-1/3 mr-2" />
              <AuroraeButtonTypes class="w-1/3 ml-2" />
            </div>
          </template>
        </AuroraeCardWrapper>
        <ChatWrapper />
      </template>
    </AuroraeContainerWrapper>
  </div>
</template>
