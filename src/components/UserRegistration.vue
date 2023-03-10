<template>
    <div class="container" v-if="!isDivHidden">
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



    <div class="all-items-center" v-if="isDivHidden">
         <center>
            <div style="margin-top: 20px;">
               <h1 class="header-title">Guess The Logo</h1>
               <hr style="border: 3px solid #ff9100; border-radius: 10px; width: 100px; margin-bottom: 20px;" />
               <div class="alert-box"></div>
               <div class="hinl-place"></div>
               <p class="qustion"></p>
               <input type="text" class="answer" placeholder="Type Your Answer" />
               <br/>
               <button class="skip"> skip </button>
               <button class="reveal"> reveal </button>
               <br>
               <input type="button" class="submit-btn" value="submit"/>
            </div>
         </center>
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
      isDivHidden: false,
      
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
        this.isDivHidden = true;
        this.isDivHidden2 = false;
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
 .header-title
         {
         font-weight: 1000;
         background: -webkit-linear-gradient(70deg,#33ccff 0%, #ff99cc 100%);
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;
         }
         .answer
         {
         text-align: center;
         min-width:280px;
         padding: 10px;
         font-size: 15px;
         font-weight: bold;
         border: 1px solid #000;
         outline: none;
         border-radius: 20px;
         margin-bottom: 20px;
         transition: 0.3s;
         }
         .answer:focus
         {
         border: 1px solid #ff9100;
         box-shadow: 0 10px 20px #ff880079;
         }
         .submit-btn,.reveal,.skip
         {
         min-width:300px;
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
         .submit-btn:hover
         {
         border: 1px solid #ff9100;
         background: white;
         color: #ff9100;
         }
         .reveal,.skip
         {
            min-width:147px;
            margin-bottom: 10px;
         }
         .skip{background: red; border: 1px solid red;}.skip:hover{background: white; color: red; border: 1px solid red;}
         .reveal{background: black; border: 1px solid black;}.reveal:hover{background: white; color: black; border: 1px solid black;}
         .all-items-center
         {
         position: absolute;
         top: 50%;left: 50%;
         transform: translate(-50%, -50%);
         box-shadow: 0 10px 25px rgba(92,99,105,.2);
         padding: 20px;
         border-radius: 10px;
         background: white;
         }
         .qustion{
         max-width: 300px;
         font-weight: bold;
         font-family: 'Poppins', sans-serif;
         }
         .hinl-place
         {
         width: 50%;
         min-width: 153px;
         font-size: 100px;
         border: 1px solid #000;
         outline: none;
         border-radius: 20px;
         }
         .alert-box
         {
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