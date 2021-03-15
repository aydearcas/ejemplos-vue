<template>
  <div @click="getAnswer" class ="back">
    <h1 class="title">{{ answer }}</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BaseRequest",
  data () {
    return {
      answer: "",
      image: ""
    };
  },
  methods: {
    getAnswer () {
      axios.get("https://yesno.wtf/api")
        .then((response) => {
          this.answer = response.data.answer;
          this.image = response.data.image;
          this.$el.style.setProperty("--image", `url(${response.data.image})`);
          /* Para ponerle la imagen de fondo con CSS */
        })
        .catch((error) => {
          console.log(error);
          this.answer = "Error";
        });
    }
  },
  updated () {
    console.log("updated");
  },
  mounted () {
    this.getAnswer();
  }
};
</script>

<style>
.back{
  background-image: var(--image);
  height: 100vh;
  width: 100vw;
  display: flex;
  place-content: center;
}

.title{
  color:white;
  font-size: 72px;
  text-transform: uppercase;
}
</style>