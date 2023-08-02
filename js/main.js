const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            listAddress: []
        }
    },
    methods: {
        addEmail() {
            if (this.listAddress.length >= 10) {
                return this.listAddress
            }
        },
        addNewEmail() {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {
                    const newEmail = response.data.response
                    this.listAddress.push(newEmail)
                })
        }
    },
    mounted() {
        let listEmail = []

        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {
                    console.log(response)
                    console.log(response.data)
                    const email = response.data.response
                    console.log(email)
                    listEmail.push(email)
                    this.listAddress.push(email)

                })

        }
    }
}).mount('#app')



