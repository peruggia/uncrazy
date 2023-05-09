<script lang="ts" setup>
const toDos = ref<string[]>([])
const newToDo = ref('')

function handleSubmit() {
  if (newToDo.value) {
    toDos.value.push(newToDo.value)
    newToDo.value = ''
  }
}
</script>

<template>
  <NuxtLayout>
    <main
      class="m-auto flex h-screen min-w-min max-w-xl flex-col items-center justify-center px-6"
    >
      <header>
        <h1 class="font-cursive text-6xl font-bold text-orange-400">unCrazy</h1>
        <p class="relative top-[-11px] my-0 indent-1 text-lg text-gray-400">
          Do one thing at a time
        </p>
      </header>

      <p
        v-if="toDos.length"
        class="my-8 w-full p-4 text-2xl text-gray-600"
        @click="toDos.splice(0, 1)"
      >
        {{ toDos[0] }}
      </p>

      <form class="w-full" @submit.prevent="handleSubmit">
        <input
          v-model="newToDo"
          class="my-4 w-full rounded-lg border-2 border-gray-300 p-4 text-xl text-gray-700 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-400"
          name="todo"
          placeholder="Type your worry here"
          type="text"
        />
        <button
          class="w-full rounded-lg bg-orange-400 px-8 py-4 font-bold text-white shadow-lg transition-colors duration-300 ease-in-out hover:bg-orange-500"
          type="submit"
        >
          Take it out of my mind
        </button>
      </form>
    </main>
  </NuxtLayout>
</template>
