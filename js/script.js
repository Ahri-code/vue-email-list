const { createApp } = Vue

createApp({
    data() {
        return {
            mailAPI: 'https://flynn.boolean.careers/exercises/api/random/mail',
            responseMail: []
        }
    },
    methods: {
    },
    mounted() {
        for (let i=0; i < 10; i++){
            axios.get(this.mailAPI).then((mail) => {
                let tempMail = mail.data.response;
                this.responseMail.push(tempMail);
            });
        }
    }
}).mount('#app')