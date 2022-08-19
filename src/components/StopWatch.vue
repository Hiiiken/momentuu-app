<template>
  <div class="text-center my-[72px]">
    <div class="base-timer m-auto mb-4">
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
      <span class="base-timer__label text-heading text-s text-5xl">
        {{ formattedTimeLeft }}
      </span>
      <span class="base-timer__label mt-10 text-body text-t">{{
        message
      }}</span>
    </div>

    <div class="timer-button-group gap-2 flex justify-center items-center mt-8">
      <button
        @click="timerReset"
        class="border border-lt rounded w-[56px] h-[56px] ease-in-out duration-300 hover:bg-s hover:text-white hover:border-s"
      >
        <reset-icon color="#474D57" class="icon icon-reset inline" />
      </button>
      <button
        @click="timerStart"
        v-if="!timerRunning"
        class="bg-s py-4 px-6 rounded text-btn text-white ease-in-out duration-300 hover:bg-p"
      >
        Start session
      </button>
      <button
        @click="timerPause"
        v-if="timerRunning"
        class="bg-s py-4 px-6 rounded text-btn text-white ease-in-out duration-300 hover:bg-p"
      >
        Stop
      </button>
      <button
        class="border border-lt rounded w-[56px] h-[56px] ease-in-out duration-300 hover:bg-s hover:text-white hover:border-s"
      >
        <next-icon color="#474D57" class="icon icon-next inline" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref, computed, watch } from "vue";
import ResetIcon from "@/components/icons/ResetIcon.vue";
import NextIcon from "@/components/icons/NextIcon.vue";

// Circle colors and animation
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
// END Circle colors and animation

const TIME_LIMIT = 20;

export default defineComponent({
  name: "StopWatch",
  components: {
    ResetIcon,
    NextIcon,
  },
  setup() {
    // Circle colors and animation
    let circleDasharray = computed(() => {
      return `${(timeFraction.value * FULL_DASH_ARRAY).toFixed(0)} 283`;
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

    let timeFraction = computed(() => {
      const rawTimeFraction = timeLeft.value / TIME_LIMIT;
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    });
    // END Circle colors and animation

    let message = ref("Start focus mode");
    let timerRunning = ref(false);

    let timePassed = ref(0);
    let timerInterval: any = ref(null);

    let timeLeft = computed(() => {
      return TIME_LIMIT - timePassed.value;
    });

    const formattedTimeLeft = computed(() => {
      const timeLeftt = timeLeft.value;
      let minutes: number | string = Math.floor(timeLeftt / 60);
      let seconds: number | string = timeLeftt % 60;

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      if (minutes < 10) {
        minutes = `0${minutes}`;
      }

      return `${minutes}:${seconds}`;
    });

    watch(timeLeft, (newValue) => {
      if (newValue === 0) {
        timerPause();
      }
    });

    // Buttons
    const timerStart = () => {
      message.value = `Focus time`;
      timerRunning.value = true;
      timerInterval.value = setInterval(() => (timePassed.value += 1), 1000);
    };

    const timerPause = () => {
      message.value = "Pause for now";
      timerRunning.value = false;
      clearInterval(timerInterval.value);
    };

    const timerReset = () => {
      message.value = "Start focus mode";
      timerRunning.value = false;
      clearInterval(timerInterval.value);
      timePassed.value = 0;
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
    };
  },
});
</script>

<style lang="scss">
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
    stroke-width: 10px;
    stroke: #f3fbf0;
  }

  &__path-remaining {
    stroke-width: 10px;
    stroke-linecap: butt;
    transform: rotate(90deg);
    transform-origin: center;
    transition: 1s linear all;
    fill-rule: nonzero;
    stroke: currentColor;

    &.green {
      color: #e37871;
    }

    &.orange {
      color: #f58078;
    }

    &.red {
      color: #f1a09b;
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
  }
}
button:hover .icon.icon-reset path,
button:hover .icon.icon-next path {
  stroke: white;
  transition: all ease-in-out 300ms;
}
</style>
