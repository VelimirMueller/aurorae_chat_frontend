<template>
  <div class="h-[90vh]">
    <ContainerAurorae>
      <template #content>
        <CardAurorae
          class="w-1/4"
          :is-bg="true">
          <template #card-header>
            <CardAuroraeHeader area="chatbot" />
          </template>
          <template #card-body>
            <aside class="mt-4 w-full flex flex-col justify-center items-center">
              <BlockquoteAurorae
                headline="What is Aurorae?"
                :highlight-headline="true">
                The name "Aurorae" is a beautiful and poetic name that refers to the natural light display
                that occurs in the polar regions.
                <br><br>
                It is named after the Roman goddess of the dawn, Aurora,
                who was believed to bring joy and happiness.
              </BlockquoteAurorae>
            </aside>
          </template>
          <template #card-footer>
            <div class="flex flex-row w-full justify-center items-center h-full pb-8">
              <ButtonCta class="w-1/3 mr-2" />
              <ButtonCta class="w-1/3" />
            </div>
          </template>
        </CardAurorae>
        <ChatWrapper />
      </template>
    </ContainerAurorae>
  </div>
</template>

<script setup lang="ts">
const isMenu = ref(false)
</script>
