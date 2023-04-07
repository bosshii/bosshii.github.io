
vuetify = Vuetify.createVuetify({
    theme: {
      defaultTheme: 'light'
    }
  });
  
  
  
  
    const test1 = {
        data() {
          return {
            visual: false,
            info: {
            },
            drawer: null,
          };
        },
      };
  
      app = Vue.createApp(test1);
      app.use(vuetify);
      app.mount("#app");
  