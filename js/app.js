app = new Vue({
    el: '#wrapper',
    data: {
      ssid: "",
      password: "",
      qrcode: ""
    },
    methods: {
        updateQrcode: function(){
            this.qrcode = `WIFI:T:WPA;S:${this.ssid};P:${this.password};;`
        }
    },
    components: {
            QrcodeVue,
    }
})