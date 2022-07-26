<template>
  <user-nav />
  <div class="flex">
    <div
      class="w-full lg:max-w-[320px] max-w-[80px] fixed ease-in-out duration-100"
    >
      <the-sidebar class="h-screen" />
    </div>
    <div
      class="bg-white w-full min-h-screen lg:p-[56px] p-[40px] pt-[56px] lg:pl-[376px] pl-[120px] ease-in-out duration-100"
    >
      <div class="mb-10">
        <h2 class="font-heading text-4xl leading-snug text-h mb-2">
          Welcome back!
        </h2>
        <p class="font-body text-t leading-normal">
          Let’s be a bit more productive today, eh?
        </p>
      </div>
      <div class="flex flex-wrap">
        <div class="dropdown-btn-group flex items-center mr-10 flex-wrap mb-4">
          <div class="inline-block mr-6">
            <base-dropdown
              :options="dbData.labels"
              defaultValue="Select a label for your session"
              @onChange="selectedValue"
            />
          </div>
          <div class="inline-block">
            <button
              @click="isModalVisible = 'label modal'"
              class="flex items-center text-btn text-s ease-in-out duration-300 hover:text-p sm:mt-0 sm:mb-0 mt-4 mb-4"
            >
              <plus-icon color="#152E58" class="icon mr-2" />
              New label
            </button>
          </div>
        </div>
        <div
          class="dropdown-btn-group flex items-center place-content-between grow flex-wrap"
        >
          <div class="inline-block">
            <base-dropdown
              :options="dbData.projects"
              defaultValue="Select a project"
              @onChange="selectedValue"
            />
          </div>
          <div class="inline-block">
            <button
              @click="isModalVisible = 'project modal'"
              class="bg-p py-4 px-6 rounded flex items-center text-btn text-white ease-in-out duration-300 hover:bg-s"
            >
              New project
            </button>
          </div>
        </div>
      </div>

      <base-modal
        title="New label"
        buttonOk="Save"
        buttonNo="Cancel"
        v-if="isModalVisible === 'label modal'"
        @close="closeModal"
        @save="saveLabel"
      >
        <div class="mt-8">
          <base-input
            type="text"
            label="Label name"
            placeHolder="i.e. coding, design..."
            v-model="inputValue"
            :error="isError"
          />
        </div>
        <p v-if="isError" class="mt-4 text-body text-red-400">
          Please enter a name for your label
        </p>
        <p v-if="savedLabelMessage" class="mt-4 text-body text-emerald-500">
          Your label has been added!
        </p>
      </base-modal>

      <base-modal
        title="New project"
        buttonOk="Save"
        buttonNo="Cancel"
        v-if="isModalVisible === 'project modal'"
        @close="closeModal"
        @save="saveProject"
      >
        <div class="mt-8">
          <base-input
            type="text"
            label="Project name"
            placeHolder="i.e. personal development..."
            v-model="inputValue"
            :error="isError"
          />
        </div>
        <p v-if="isError" class="mt-4 text-body text-red-400">
          Please enter a name for your project
        </p>
        <p v-if="savedLabelMessage" class="mt-4 text-body text-emerald-500">
          Your project has been added!
        </p>
      </base-modal>

      <stop-watch />
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent, reactive, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import UserNav from "@/components/UserNav.vue";
import TheSidebar from "@/components/TheSidebar.vue";
import BaseDropdown from "@/components/BaseDropdown.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";
import BaseModal from "@/components/BaseModal.vue";
import BaseInput from "@/components/BaseInput.vue";
import StopWatch from "@/components/StopWatch.vue";

export default defineComponent({
  name: "DashboardHome",
  components: {
    UserNav,
    TheSidebar,
    BaseDropdown,
    PlusIcon,
    BaseModal,
    BaseInput,
    StopWatch,
  },
  setup() {
    const router = useRouter();

    if (!localStorage.getItem("my-token")) {
      router.push("/");
      return;
    }

    let dbData = reactive({
      labels: [] as Array<any>,
      projects: [] as Array<any>,
    });

    axios
      .get("http://localhost:3000/labels")
      .then((res) => {
        dbData.labels = res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:3000/projects")
      .then((res) => {
        dbData.projects = res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    const selectedValue = (myvalue: string | number) => {
      console.log(myvalue);
    };

    let isModalVisible = ref(false);

    const closeModal = () => {
      isModalVisible.value = false;
      savedLabelMessage.value = false;
      isError.value = false;
    };

    let inputValue = ref("");

    let isError = ref(false);

    let savedLabelMessage = ref(false);

    const saveLabel = () => {
      if (inputValue.value === "") {
        isError.value = true;
        return;
      }

      axios
        .post("http://localhost:3000/labels", {
          name: inputValue.value,
        })
        .then((result) => {
          dbData.labels.push({
            id: result.data.id,
            name: result.data.name,
          });
          inputValue.value = "";
          savedLabelMessage.value = true;
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const saveProject = () => {
      if (inputValue.value === "") {
        isError.value = true;
        return;
      }

      axios
        .post("http://localhost:3000/projects", {
          name: inputValue.value,
        })
        .then((result) => {
          dbData.projects.push({
            id: result.data.id,
            name: result.data.name,
          });
          inputValue.value = "";
          savedLabelMessage.value = true;
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return {
      selectedValue,
      closeModal,
      isModalVisible,
      dbData,
      saveLabel,
      inputValue,
      savedLabelMessage,
      saveProject,
      isError,
    };
  },
});
</script>
