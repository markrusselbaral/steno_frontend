<template>
    <div class="container">
        <form id="form" @submit.prevent="saveUser">
            <h1>Registration</h1>
            <div class="input-control">
                <label for="firstname">Firstname</label>
                <input id="firstname" name="firstname" v-model="firstname" type="text" required>
                <div class="error"></div>
            </div>
            <div class="input-control">
                <label for="text">Lastname</label>
                <input id="lastname" name="lastname" v-model="lastname" type="text" required>
                <div class="error"></div>
            </div>
            <button type="submit" :disabled="isSubmitting" :class="{ 'btn-disabled': isSubmitting, 'btn-clicked': isClicked }">Proceed</button>
        </form>
    </div>
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
    };
  },
  methods: {
    
    async saveUser() {
        this.isClicked = true;
        this.isSubmitting = true;
      try {
        const response = await axios.post(
            ApiConfig.getBaseUrl() + '/user', 
          {
            name: this.firstname + ' ' + this.lastname,
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>


<style scoped>
body {
    background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
    font-family: 'Poppins', sans-serif;
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