<template>
<div class="flex">
  <div class="bg-acc-1 p-14 h-screen w-1/2">
    <onboarding-header class="h-1/3" />
    <onboarding-slider class="h-2/3" />
  </div>
  <div class="bg-white p-14 h-screen w-1/2 relative">
    <password-reset-form />
  </div>
  
</div>
</template>

<script lang="ts">
import OnboardingHeader from '@/components/OnboardingHeader.vue'
import OnboardingSlider from '@/components/OnboardingSlider.vue'
import PasswordResetForm from '@/components/PasswordResetForm.vue'

export default {
  name: 'PasswordReset',
  components: {
    OnboardingHeader, OnboardingSlider, PasswordResetForm
  }
}
</script>
