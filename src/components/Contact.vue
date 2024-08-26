<template>

    <section id="contact" class="contact-section">
        <div v-if="!sent">
            <h1>{{ $t("contact.title") }}</h1>
            <p>{{ $t("contact.subtitle") }}</p>

            <form @submit="onSubmit">
                <input type="email" :placeholder="t('contact.email_text')" required name="email" />
                <input type="text" :placeholder="t('contact.email_subject')" required name="subject" />
                <textarea :placeholder="t('contact.email_content')" required name="message"></textarea>
                <button v-if="!loading">{{ $t("contact.button") }}</button>
                <div class="wait_container" v-else>
                    <button class="loading" disabled>⌛</button>
                    <p>{{ $t("contact.wait") }}</p>
                </div>
                <p style="color: red;">
                    {{ err }}
                </p>
                <!-- <input type="hidden" name="_next" value="https://danilsportfolio.netlify.app"> -->
                <input type="hidden" name="_captcha" value="false">
            </form>
        </div>

        <div v-else>
            <h1>{{ $t("contact.sent_title") }}</h1>
            <p>{{ $t("contact.sent_content") }}</p>
        </div>

    </section>


</template>

<script setup>

import { ref } from 'vue';
const loading = ref(false);
const err = ref('');
const sent = ref(false);

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const onSubmit = async (e) => {
    e.preventDefault();
    loading.value = true;

    const form = e.target;
    const formData = new FormData(form);

    try {
        const response = await fetch('https://formsubmit.co/b0d05556dd139564d08ba8a7dcf5dd12', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            form.reset();
        }

        err.value = '';

        sent.value = true;
        setTimeout(() => {
            sent.value = false;
        }, 5000);

    } catch (error) {
        console.error(error);
        err.value = 'Something went wrong, please try again later.';
        setTimeout(() => {
            err.value = '';
        }, 5000);
    }
    loading.value = false;
};

</script>


<style scoped lang="scss">
h1 {
    font-size: 2em;
}

p {
    font-size: 1.5em;
}

.contact-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    align-items: center;
    height: 90vh;
    background-color: $semi-black;

    >div {
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
        width: 100%;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1em;
        align-items: center;
        width: 100%;
        max-width: 800px;
        padding: 0em 5em;

        input,
        textarea {
            width: 100%;
            padding: 0.5em;
            border: none;
            border-radius: 5px;
            background-color: $semi-white;
        }

        button {
            padding: 0.5em 1em;
            border: none;
            border-radius: 5px;
            background-color: $semi-white;
            cursor: pointer;
        }

        .wait_container {
            display: flex;
            flex-direction: column;
            gap: 1em;
            align-items: center;

            .loading {
                animation: spin 1s linear infinite;
                background-color: transparent;
            }

            @keyframes spin {
                0% {
                    transform: rotate(0deg);
                }

                100% {
                    transform: rotate(360deg);
                }
            }

        }

    }

}
</style>