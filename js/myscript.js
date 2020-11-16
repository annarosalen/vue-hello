// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data
// Altro possibile Bonus:
// gestire una funzione con un evento nel modo Vue.

var prova = new Vue({
  el: "#prova",
  data: {
    message: "hello world",
    image: "http://www.mountainow-blog.net/wp-content/uploads/2018/11/fotografare-montagne-in-autunno.jpg", //come caricare da cartella?
    filtro: ""
  },
  methods:{
    myFunction: function(){
      this.filtro = "classeFiltro";
    }
  }


});
