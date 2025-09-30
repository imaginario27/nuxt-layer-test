export default defineNuxtConfig({
    components: [
        // Auto-import components based only on its name, not path,
        {
            path: "@/components",
            pathPrefix: false,
        },
    ],
})