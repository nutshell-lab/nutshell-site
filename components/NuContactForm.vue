<script lang="ts" setup>
const route = useRoute()
const visible = computed(() => route.query.contact !== undefined)
const completed = ref(false)

const { defineField, handleSubmit, errors } = useForm({
  validationSchema: {
    name: (value: string) => Boolean(value) || 'On a besoin de savoir comment vous appeler',
    email: (value: string) => Boolean(value) || 'C\'est juste pour vous recontacter',
    message: (value: string) => Boolean(value) || 'Un petit message pour nous aiguiller sur ce que vous voulez ?'
  }
})
const [name] = defineField('name')
const [email] = defineField('email')
const [message] = defineField('message')

const altchaPayload = ref<string>('')

const onSubmit = handleSubmit(values => {
    $fetch('https://platform.nutshell-lab.com/api/contacts', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'name': values.name,
            'email': values.email,
            'message': values.message,
            'payload': altchaPayload.value
        })
    }).then(() => (completed.value = true))
})
const onSubmit_old = handleSubmit(values => {
    $fetch('https://docs.google.com/forms/d/e/1FAIpQLSeYHzMwoY3nc5NqMHrjxPgw237rjQ2D9t-X0BHxD6BrwT3rLA/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'entry.559249682': values.name,
            'entry.1538893204': values.email,
            'entry.56764271': values.message
        })
    }).then(() => (completed.value = true))
})
</script>

<template>
    <template v-if="visible">
        <div class="text-alabaster modal w-screen fixed top-0 h-screen z-50">
            <div class="px-layout container 2xl:py-32 py-12 h-full w-full">
                <div class="relative flex flex-col justify-end h-full w-full">
                    <div class="right-0 absolute top-0 z-60">
                        <nu-link label="Cacher le formulaire de contact" to="?">
                            <div class="rounded-full border-[1px] p-5 hover:scale-125 transition-all">
                                    <icon-close :height="30" :width="30"/>
                            </div>
                        </nu-link>
                    </div>
                    <form data-aos="slide-up" class="md:grid flex flex-col grid-cols-2 md:gap-10 gap-4 max-w-[800px]" @submit="onSubmit">
                        <div class="font-normal 2xl:text-[70px] 2xl:leading-[65px] md:text-[55px] md:leading-[50px] text-[40px] leading-[35px] font-silka col-span-2">Alors,<br />on <strong class="text-cinnabar">travaille<br />ensemble</strong> ?</div>
                        
                        <template v-if="completed">
                            <div class="col-span-2 py-24 flex flex-col gap-4">
                                <div><nu-typography type="headline-filled">Merci !</nu-typography></div>
                                <div><nu-typography type="subtitle" class="font-normal">On revient vers vous <strong>dès que possible</strong>.</nu-typography></div>
                            </div>
                        </template>
                        <template v-else>
                            <div class="flex flex-col gap-2">
                                <input v-model="name" placeholder="Entreprise" class="text-[20px] py-2 placeholder-onyx text-alabaster transition-all appearance-none bg-transparent border-b border-onyx !outline-none focus:border-alabaster"/>
                                <nu-typography type="caption" class="h-[20px] w-full">{{ errors.name }}</nu-typography>
                            </div>
                            <div class="flex flex-col gap-2">
                                <input v-model="email" placeholder="Email" type="email" class="text-[20px] py-2 placeholder-onyx text-alabaster transition-all appearance-none bg-transparent border-b border-onyx !outline-none focus:border-alabaster"/>
                                <nu-typography type="caption" class="h-[20px] w-full">{{ errors.email }}</nu-typography>
                            </div>
                            <div class="col-span-2 flex flex-col gap-2">
                                <div class="grow-wrap grid min-h-[120px] text-[20px] text-onyx transition-all border-b border-onyx " :data-value="message">
                                    <textarea placeholder="Votre besoin" v-model="message" class="min-h-[120px] resize-none overflow-hidden py-2 text-[20px] placeholder-onyx text-alabaster transition-all appearance-none bg-transparent border-b border-onyx !outline-none focus:border-alabaster"/>
                                </div>
                                <nu-typography type="caption" class="h-[20px] w-full">{{ errors.message }}</nu-typography>
                            </div>

                            <div class="text-white">
                              <AltchaClient ref="altcha" @update:payload="p => altchaPayload = p" />
                            </div>
                            
                            <nu-button color="alabaster">
                                Envoyer
                            </nu-button>
                        </template>
                    </form>
                </div>
            </div>
        </div>
    </template>
</template>

<style scoped>

.modal::before {
    @apply w-full h-full absolute bg-dark-black opacity-95;
    content: '';
}

.grow-wrap::after {
  content: attr(data-value) " ";
  white-space: pre-wrap;
  visibility: hidden;
}
.grow-wrap > textarea,
.grow-wrap::after {
  grid-area: 1 / 1 / 2 / 2;
}

</style>
