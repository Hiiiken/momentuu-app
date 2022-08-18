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
  <p>{{ message }}</p>

  <div class="base-timer">
    <svg
      class="base-timer__svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="base-timer__circle">
        <circle
          class="base-timer__path-elapsed"
          cx="50"
          cy="50"
          r="45"
        ></circle>
        <path
          :stroke-dasharray="circleDasharray"
          class="base-timer__path-remaining"
          :class="remainingPathColor"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span class="base-timer__label">{{ formattedTimeLeft }}</span>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref, computed, watch } from "vue";

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green",
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD,
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD,
  },
};

const TIME_LIMIT = 20;

export default defineComponent({
  name: "StopWatch",
  setup() {
    let message = ref("Let the countdown begin!!");
    let timerRunning = ref(false);

    let timePassed = ref(0);
    let timerInterval = ref(null);

    let circleDasharray = computed(() => {
      return `${(timeFraction.value * FULL_DASH_ARRAY).toFixed(0)} 283`;
    });

    let timeLeft = computed(() => {
      return TIME_LIMIT - timePassed.value;
    });

    const formattedTimeLeft = computed(() => {
      const timeLeftt = timeLeft.value;
      const minutes = Math.floor(timeLeftt / 60);
      let seconds = timeLeftt % 60;

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      return `${minutes}:${seconds}`;
    });

    let timeFraction = computed(() => {
      const rawTimeFraction = timeLeft.value / TIME_LIMIT;
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    });

    let remainingPathColor = computed(() => {
      const { alert, warning, info } = COLOR_CODES;

      if (timeLeft.value <= alert.threshold) {
        return alert.color;
      } else if (timeLeft.value <= warning.threshold) {
        return warning.color;
      } else {
        return info.color;
      }
    });

    watch(timeLeft, (newValue) => {
      if (newValue === 0) {
        onTimesUp();
      }
    });

    // onMounted(() => {
    //   startTimer();
    // });

    let onTimesUp = () => {
      clearInterval(timerInterval.value);
    };

    let startTimer = () => {
      timerInterval.value = setInterval(() => (timePassed.value += 1), 1000);
    };

    // Mine
    const timerStart = () => {
      message.value = `It's happening!`;
      timerRunning.value = true;
      startTimer();
    };

    const timerPause = () => {
      message.value = "Pause for now";
      timerRunning.value = false;
      onTimesUp();
    };

    const timerReset = () => {
      message.value = "Start again?";
      timerRunning.value = false;
    };

    return {
      message,
      timerRunning,
      timerStart,
      timerPause,
      timerReset,
      formattedTimeLeft,
      timePassed,
      timerInterval,
      circleDasharray,
      timeLeft,
      timeFraction,
      remainingPathColor,
      onTimesUp,
      startTimer,
    };
  },
});
</script>

<style scoped lang="scss">
.base-timer {
  position: relative;
  width: 300px;
  height: 300px;

  &__svg {
    transform: scaleX(-1);
  }

  &__circle {
    fill: none;
    stroke: none;
  }

  &__path-elapsed {
    stroke-width: 7px;
    stroke: grey;
  }

  &__path-remaining {
    stroke-width: 7px;
    stroke-linecap: round;
    transform: rotate(90deg);
    transform-origin: center;
    transition: 1s linear all;
    fill-rule: nonzero;
    stroke: currentColor;

    &.green {
      color: rgb(65, 184, 131);
    }

    &.orange {
      color: orange;
    }

    &.red {
      color: red;
    }
  }

  &__label {
    position: absolute;
    width: 300px;
    height: 300px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
  }
}
</style>
