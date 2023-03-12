<template>
  <div>
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="{
        background: {
          color: {
            value: '#0d47a1',
          },
        },

        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }"
    />
  </div>
  <div class="container" v-if="!isDivHidden">
    <form id="form" @submit.prevent="saveUser">
      <h1>Enter Your Name</h1>
      <div class="input-control">
        <label for="firstname">Firstname</label>
        <input id="firstname" name="firstname" v-model="firstname" type="text" required />
        <div class="error"></div>
      </div>
      <div class="input-control">
        <label for="text">Lastname</label>
        <input id="lastname" name="lastname" v-model="lastname" type="text" required />
        <div class="error"></div>
      </div>
      <button
        type="submit"
        :disabled="isSubmitting"
        :class="{ 'btn-disabled': isSubmitting, 'btn-clicked': isClicked }"
      >
        Proceed
      </button>
    </form>
  </div>

  <form @submit.prevent="submitTwice" v-if="isDivHidden">
    <div class="all-items-center">
      <center>
        <div style="margin-top: 20px">
          <h1 class="header-title">Guess the Logo</h1>
          <img
            :src="getImageUrl(responseData.user_quiz.image)"
            alt="My Image"
            style="width: 150px; height: 150px"
          />
          <hr
            style="
              border: 3px solid #ff9100;
              border-radius: 10px;
              width: 100px;
              margin-bottom: 20px;
            "
          />
          <div class="alert-box"></div>
          <div class="hinl-place"></div>
          <p class="qustion"></p>
          <input
            type="text"
            class="answer"
            placeholder="Type Your Answer"
            v-model="answer"
          />
          <br />
          <!-- <button class="skip"> skip </button>
        <button class="reveal"> reveal </button> -->
          <br />
          <button type="submit" class="submit-btn" value="submit">Submit</button>
        </div>
      </center>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import ApiConfig from "../config/baseurl.js";

export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      isSubmitting: false,
      isClicked: false,
      isDivHidden: false,
      laravelAppUrl: "https://steknows.bisubilar.org",
      quiz_id: "",
      user_id: "",
      answer: "",
      uid: "",
      responseData: {},
    };
  },
  methods: {
    getImageUrl(filename) {
      return `${this.laravelAppUrl}/images/steno${filename}`;
    },

    async saveUser() {
      this.isClicked = true;
      this.isSubmitting = true;
      try {
        const response = await axios.post(ApiConfig.getBaseUrl() + "/user", {
          name: this.firstname + " " + this.lastname,
        });
        console.log(response.data);
        this.responseData = response.data;
        this.isDivHidden = true;
      } catch (error) {
        console.error(error);
      } finally {
        this.isSubmitting = false;
      }
    },
    async submitTwice() {
      await this.submitAnswer();
      await this.submitAnswer();
    },

    async submitAnswer() {
      this.isSubmitting = true;
      try {
        const response = await axios.post(ApiConfig.getBaseUrl() + "/quiz", {
          answer: this.answer,
          quiz_id: this.responseData.user_quiz.quiz_id,
          user_id: this.responseData.user_quiz.user_id,
          uid: this.responseData.user_quiz.user_id,
        });
        console.log(response.data);
        this.responseData = response.data;

        this.answer = ""; // clear the input field
        if (response.data.user_quiz == null) {
          alert("Your score has been recorded");
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.isSubmitting = false;
      }

      // Reset responseData to empty object
    },
  },
};
</script>

<script setup>
import { loadFull } from "tsparticles";

const particlesInit = async (engine) => {
  await loadFull(engine);
};

const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
};
</script>

<style scoped>
.header-title {
  font-weight: 1000;
  background: -webkit-linear-gradient(70deg, #33ccff 0%, #ff99cc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.answer {
  text-align: center;
  min-width: 280px;
  padding: 10px;
  font-size: 15px;
  font-weight: bold;
  border: 1px solid #000;
  outline: none;
  border-radius: 20px;
  margin-bottom: 20px;
  transition: 0.3s;
}
.answer:focus {
  border: 1px solid #ff9100;
  box-shadow: 0 10px 20px #ff880079;
}
.submit-btn,
.reveal,
.skip {
  min-width: 300px;
  padding: 10px;
  font-size: 15px;
  border: 1px solid #ff9100;
  outline: none;
  border-radius: 20px;
  background: #ff9100;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s;
}
.submit-btn:hover {
  border: 1px solid #ff9100;
  background: white;
  color: #ff9100;
}
.reveal,
.skip {
  min-width: 147px;
  margin-bottom: 10px;
}
.skip {
  background: red;
  border: 1px solid red;
}
.skip:hover {
  background: white;
  color: red;
  border: 1px solid red;
}
.reveal {
  background: black;
  border: 1px solid black;
}
.reveal:hover {
  background: white;
  color: black;
  border: 1px solid black;
}
.all-items-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
  padding: 20px;
  border-radius: 10px;
  background: white;
}
.qustion {
  max-width: 300px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
}
.hinl-place {
  width: 50%;
  min-width: 153px;
  font-size: 100px;
  border: 1px solid #000;
  outline: none;
  border-radius: 20px;
}
.alert-box {
  max-width: 300px;
  border: 1px solid #000;
  outline: none;
  border-radius: 20px;
  padding: 6px;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
  display: none;
}

body {
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  font-family: "Poppins", sans-serif;
}

#form {
  width: 300px;
  margin: 20vh auto 0 auto;
  padding: 20px;
  background-color: whitesmoke;
  border-radius: 4px;
  font-size: 12px;
}

#form h1 {
  color: #0f2027;
  text-align: center;
}

#form button {
  padding: 10px;
  margin-top: 10px;
  width: 100%;
  color: white;
  background-color: rgb(41, 57, 194);
  border: none;
  border-radius: 4px;
}

.input-control {
  display: flex;
  flex-direction: column;
}

.input-control input {
  border: 2px solid #f0f0f0;
  border-radius: 4px;
  display: block;
  font-size: 12px;
  padding: 10px;
  width: 100%;
}

.input-control input:focus {
  outline: 0;
}

.input-control.success input {
  border-color: #09c372;
}

.input-control.error input {
  border-color: #ff3860;
}

.input-control .error {
  color: #ff3860;
  font-size: 9px;
  height: 13px;
}

.btn-disabled {
  background-color: gray;
  color: white;
  cursor: not-allowed;
}

.btn-clicked {
  background-color: red;
  color: white;
}
</style>
