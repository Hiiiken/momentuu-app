<template>
  <h1 class="text-p text-6xl z-50">Stopwatch</h1>
  <button @click="timerStart" v-if="!timerRunning" class="bg-p p-4 m-4">
    Start
  </button>
  <button @click="timerPause" v-if="timerRunning" class="bg-p p-4 m-4">
    Stop
  </button>
  <button @click="timerReset" v-if="timerRunning" class="bg-p p-4 m-4">
    Reset
  </button>
  <!-- <p>{{ formattedElapsedTime }}</p> -->
  <p>{{ message }}</p>
  <p>{{ elapsedTime }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "StopWatch",

  setup() {
    let message = ref("Let the countdown begin!!");
    let timerRunning = ref(false);
    let timer = ref(undefined);
    let elapsedTime = ref(0);

    const timerStart = () => {
      message.value = `It's happening!`;
      timerRunning.value = true;
      timer.value = setInterval(() => {
        elapsedTime.value += 1;
      }, 1000);
    };

    const timerPause = () => {
      message.value = "Pause for now";
      timerRunning.value = false;
      clearInterval(timer.value);
    };

    const timerReset = () => {
      message.value = "Start again?";
      timerRunning.value = false;
      elapsedTime.value = 0;
      clearInterval(timer.value);
    };

    return {
      message,
      timerRunning,
      timerStart,
      timerPause,
      timerReset,
      timer,
      elapsedTime,
    };

    // let elapsedTime = ref(0);
    // let timer = ref(undefined);
    // const formattedElapsedTime = computed(() => {
    //   const date = new Date(null);
    //   date.setSeconds(elapsedTime.value / 1000);
    //   const utc = date.toUTCString();
    //   return utc.substr(utc.indexOf(":") - 2, 8);
    // });
    // const start = () => {
    //   timer.value = setInterval(() => {
    //     elapsedTime.value += 1000;
    //   }, 1000);
    // };
    // const stop = () => {
    //   console.log("stop");
    //   clearInterval(timer.value);
    // };
    // const reset = () => {
    //   elapsedTime.value = 0;
    //   clearInterval(timer.value);
    // };
    // return {
    //   elapsedTime,
    //   timer,
    //   formattedElapsedTime,
    //   start,
    //   stop,
    //   reset,
    // };
  },
});
</script>
