<template>
<div>
    <v-btn text>送信</v-btn>
    <div class="container">
        <div class="textarea" v-if="!$device.isMobile">
            <v-textarea v-model="text" @input="format_text" counter auto-grow/>
        </div>
        <div class="mobile_textarea" v-else>
            <v-textarea v-model="text" @input="format_text" counter height="100vh"/>
        </div>
        <div class="text_preview" v-if="!$device.isMobile">
            <p v-for="(Paragraph, index) in text_array" :key="index"><br v-if="Paragraph === ''">{{ Paragraph }}</p>
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
            text_array: []
        }
    },
    methods: {
        format_text() {
            this.call_formatter()
            //this.text_array = text_formatter(this.text)
        },
        async call_formatter() {
            const res = await wasm_text_formatter.then(wasm_text_formatter => wasm_text_formatter.text_parser(this.text))
            this.text_array = res.split('\n')
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-around;
    .textarea {
        width: 50%;
        padding: 5px;
    }
    .mobile_textarea {
        width: 100%;
    }
    .text_preview {
        flex-direction: column;
        width: 50%;
        min-height: 100vh;
        height: 100%;
        margin-top: 10px;
        padding: 5px;
        box-sizing: inherit;
        border: solid 3px #000000;
        p {
            max-width: 100%;
            word-break: break-all;
        }
    }
}
</style>