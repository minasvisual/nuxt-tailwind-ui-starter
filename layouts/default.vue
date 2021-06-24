<template>
    <div class="bg-white dark:bg-gray-900">
        <Nuxt />
        <footer-component />
    </div>
</template>

<script>
import AppButton from "~/components/utilities/AppButton.vue";
import FooterComponent from "~/components/Footer";

export default {
    components: { AppButton, FooterComponent }
};
</script>
