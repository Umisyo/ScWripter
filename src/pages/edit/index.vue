<template>
<div>
    <v-btn text @click="pushScripts">送信</v-btn>
    <div class="container">
        <v-textarea v-model="acto_script.title"></v-textarea>
        <div class="textarea" v-if="!$device.isMobile">
            <v-textarea v-model="text" @input="format_text" counter auto-grow/>
        </div>
        <div class="mobile_textarea" v-else>
            <v-btn text @click="show_preview">Preview</v-btn>
            <div class="mobile_preview" v-if="isShowPreview">
                <p v-for="(Paragraph, index) in acto_script.text_array" :key="index"><br v-if="Paragraph === ''">{{ Paragraph }}</p>
            </div>
            <v-textarea v-else v-model="text" @input="format_text" counter />
        </div>
        <div class="text_preview" v-if="!$device.isMobile">
            <p v-for="(Paragraph, index) in acto_script.text_array" :key="index"><br v-if="Paragraph === ''">{{ Paragraph }}</p>
        </div>
    </div>
</div>
</template>

<script>
const wasm_text_formatter = import('~/assets/text_formatter/out/text_formatter')

export default {
    data() {
        return {
            text: '',
            formatted_text: '',
            isShowPreview: false,
            acto_script: {
                title: '',
                text_array: []
            }
        }
    },
    methods: {
        format_text() {
            this.call_formatter()
            //this.text_array = text_formatter(this.text)
        },
        async call_formatter() {
            const res = await wasm_text_formatter.then(wasm_text_formatter => wasm_text_formatter.text_parser(this.text))
            this.acto_script.text_array = res.split('\n')
        },
        show_preview() {
            this.isShowPreview = !this.isShowPreview
        },
        pushScripts() {
            console.log(this.acto_script)
        }
    }
}
</script>

<style lang="scss" scoped src="./style.scss" />