<script>
import { computed, defineComponent, ref } from 'vue';
import CardComponent from './CardComponent.vue';
import todoTasks from '../data/todoListData';

export default defineComponent({
  name: 'TodoListComponent',
  components: {
    CardComponent,
  },

  setup() {
    const completedTasks = ref([]);
    const completedTasksCounter = computed(() => {
      return completedTasks.value.length;
    })

    const newTask = ref('');
    const addToList = () => {
      if (newTask.value) {
        todoTasks.value.push({
          id: todoTasks.value.length + 1,
          content: newTask.value,
          done: false,
        });
        newTask.value = '';
      }
    }

    return {
      todoTasks,
      newTask,
      addToList,
      completedTasksCounter,
      completedTasks
    }
  }
});

</script>

<template>
  <CardComponent>
    <template #header>
      <div class="flex flex-row justify-between text-base font-medium mb-3">
        <h5>Lista Todo</h5>
        <div>Wykonane: {{ completedTasksCounter }}</div>
      </div>
    </template>
    <template #content>
      <ul>
        <li v-for="task in todoTasks" :key="task.id"
          class="flex flex-row items-center p-2 border-b border-border-default">
          <input v-model="completedTasks" type="checkbox" :value="task.id"
            class="mr-2 accent-button-active w-4 h-4 rounded-full cursor-pointer" />
          <p>{{ task.content }}</p>
        </li>
        <li class="flex flex-row items-center px-2 py-1 border-b border-border-default">
          <span class="ml-1 mr-2 text-xl text-gray-400">&#43;</span>
          <input v-model="newTask" type="text" class="outline-none w-full" placeholder="Dodaj nowy element checklisty"
            @keyup.enter="addToList" />
        </li>
      </ul>
    </template>
  </CardComponent>
</template>

<style></style>