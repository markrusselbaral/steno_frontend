<template>
    <div class="all-items-center">
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





<style scoped>
         .header-title
         {
         font-weight: 1000;
         background: -webkit-linear-gradient(70deg,#33ccff 0%, #ff99cc 100%);
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;
         }
         input[type=text]
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
         input[type=text]:focus
         {
         border: 1px solid #ff9100;
         box-shadow: 0 10px 20px #ff880079;
         }
         input[type=button],.reveal,.skip
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
         input[type=button]:hover
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
</style>