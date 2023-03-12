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

  <div class="containers">
    <div id="contitle">
      <span id="title" style="width: 400px; height: 70px; font-size: 1.9em">
        <img src="../assets/type.png" alt="" />&nbsp;&nbsp; Ste-Knows?</span
      >
    </div>
    <div class="cardcontainer">
      <div class="cards1">
        <img src="../assets/1.png" alt="" />
        <span style="font-weight: 700">EASY</span>
        <span style="color: grey">Aphabets</span>
        <button
          style="
            border-radius: 20px;
            width: 100px;
            background-color: #23d2e1;
            border: 1px solid grey;
          "
        >
          Coming Soon...
        </button>
      </div>
      <div class="cards2">
        <img src="../assets/2.png" alt="" />
        <span style="font-weight: 700">MEDIUM</span>
        <span style="color: grey">Aphabets</span>
        <button
          style="
            border-radius: 20px;
            width: 100px;
            background-color: #23d2e1;
            border: 1px solid grey;
          "
        >
          Coming Soon...
        </button>
      </div>
      <div class="cards3">
        <img src="../assets/3.png" alt="" />
        <span style="font-weight: 700">HARD</span>
        <span style="color: grey">Aphabets</span>
        <button
          style="
            border-radius: 20px;
            width: 100px;
            background-color: #23d2e1;
            border: 1px solid grey;
          "
        >
          Coming Soon...
        </button>
      </div>
      <div class="cards4">
        <img src="../assets/4.png" alt="" />
        <span style="font-weight: 700">ADVANCE</span>
        <span style="color: grey">Aphabets</span>
        <button
          style="
            border-radius: 20px;
            width: 100px;
            background-color: #23d2e1;
            border: 1px solid grey;
          "
        >
          Coming Soon...
        </button>
      </div>
    </div>
  </div>
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 3rem;
      margin-bottom: 2rem;
    "
  >
    <router-link to="/user">
      <button
        style="border-radius: 10px; background-color: #23d2e1; width: 200px; height: 70px"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-pencil-square"
          viewBox="0 0 16 16"
        >
          <path
            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
          />
          <path
            fill-rule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
          />
        </svg>
        Take a Quiz
      </button>
    </router-link>
  </div>
</template>

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
#title {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(35, 210, 225, 0.5);
  width: 120px;
  height: 40px;
  color: white;
  font-weight: 500;
  border-radius: 50px;
  padding: 8px 8px;
}

#contitle {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.containers {
  margin: auto;
  /* border: 2px solid black; */
  width: 80%;
  /* display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; */
}

.containers {
  margin-top: 6rem;
}

.cards1,
.cards2,
.cards3,
.cards4 {
  width: 23%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 10px;
  background-color: white;
}

.cardcontainer {
  margin-top: 5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

@media screen and (max-width: 600px) {
  .cardcontainer {
    flex-direction: column;
    gap: 2rem;
  }

  .cards1,
  .cards2,
  .cards3,
  .cards4 {
    width: 80%;
  }
}
</style>
