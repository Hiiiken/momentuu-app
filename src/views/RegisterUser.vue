<template>
<div class="md:flex h-screen">
  <div class="bg-acc-1 p-14 md:w-1/2">
    <onboarding-header class="lg:mb-32 md:mb-24 sm:mb-16" />
    <onboarding-slider />
  </div>
  <div class="bg-white p-14 md:w-1/2 relative">
    <register-form />
  </div>
  
</div>
</template>

<script lang="ts">
import OnboardingHeader from '@/components/OnboardingHeader.vue'
import OnboardingSlider from '@/components/OnboardingSlider.vue'
import RegisterForm from '@/components/RegisterForm.vue'

export default {
  name: 'RegisterUser',
  components: {
    OnboardingHeader, OnboardingSlider, RegisterForm
  }
}
</script>
