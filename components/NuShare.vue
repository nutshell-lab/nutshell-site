<script lang="ts" setup>
const { url } = defineProps({
    url: { type: URL, required: true },
})

const copyToClipboard = () => {
    const myTemporaryInputElement = document.createElement('input')
    myTemporaryInputElement.type = 'text'
    myTemporaryInputElement.value = url.toString()
    
    document.body.appendChild(myTemporaryInputElement)
    
    myTemporaryInputElement.select()
    document.execCommand('Copy')
    
    document.body.removeChild(myTemporaryInputElement)
}
</script>

<template>
	<div class="flex gap-4 items-center">
		<nu-typography type="cta-text" class="text-chinese-black">Partager : </nu-typography>
		<nu-link label="Partager avec facebook" target="_blank" :to="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`">
			<icon-facebook/>
		</nu-link>
		<nu-link label="Partager avec X" target="_blank" :to="`http://x.com/share?url=${encodeURIComponent(url)}`">
			<icon-x/>
		</nu-link>
		<nu-link label="Partager avec reddit" target="_blank" :to="`https://www.reddit.com/submit?url=${encodeURIComponent(url)}`">
			<icon-reddit/>
		</nu-link>
		<nu-link label="Copier l'url" to="#" @click="copyToClipboard">
			<icon-link/>
		</nu-link>
	</div>
</template>
