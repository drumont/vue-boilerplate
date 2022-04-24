
declare module 'vue/types/vue.Vue' {
    interface Vue {
        langHelpers: {
            retrieveError: (e: Array<any>, c: number) => Array<any>
        }
    }

    interface VueConstructor {
        langHelpers: {
            retrieveError: (e: Array<any>, c: number) => Array<any>
        }
    }
}
