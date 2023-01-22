<!--SCRIPT-->
<script lang='ts'>
    import logo from '$lib/images/white_myne_logo.png'
  import { slide } from 'svelte/transition';
    let page = 0 ;
    function pageUp(){
        page +=1; 
    }
    function pageDown(){
        page -=1; 
    }
    console.log(page)
</script>
<!--FORM-->
<form name="helcimForm" class ='card shadow-lg w-full h-[700px] p-5 bg-primary border-base-100 border-solid border-4 text-secondary flex-col flex shadow-large justify-around content-center ' id="helcimForm" action="your-checkout-page.php" method="POST">
    <div class = ' bg-primary p-5 flex justify-center content-center overflow-hidden'>
        <img src = {logo} alt = 'Myne-logo' class = 'max-w-full' />
    </div>
    <!--RESULTS-->
    <div id="helcimResults"></div>

    <!--SETTINGS-->
    <input type="hidden" id="token" value="58ae1d44d7ac6959332969">
    <input type="hidden" id="language" value="en">
   
    {#if page === 0}
    <div class = 'flex flex-col justify-center content-center' in:slide={{delay: 200, duration: 200}}
    out:slide={{delay: 200}}>
        Card Token: <input class = 'input input-sm' type="text" id="cardToken" value="1"><br/>
        Credit Card Number: <input class = 'input input-sm' type="text" id="cardNumber" value=""><br/>
        Expiry Month: <input class = 'input input-sm' type="text" id="cardExpiryMonth" value=""> Expiry Year: <input class = 'input input-sm' type="text" id="cardExpiryYear" value=""><br/>
        CVV: <input class = 'input input-sm' type="text" id="cardCVV" value=""><br/>
    </div>

    {/if}
    <!--CARD-INFORMATION-->
    {#if page === 1}
    <div class = 'flex flex-col justify-center content-center' in:slide={{delay: 200, duration: 200}}
    out:slide={{delay: 200}}>
    Card Holder Name: <input  class = 'input input-sm' type="text" id="cardHolderName" value=""><br/>
    Card Holder Address: <input class = 'input input-sm' type="text" id="cardHolderAddress" value=""><br/>
    Card Holder Postal Code: <input class = 'input input-sm' type="text" id="cardHolderPostalCode" value=""><br/>
</div>  
    {/if}
    
    <!--OPTIONAL-AVS-->

    <!--OPTIONAL-AMOUNT-->
    Amount: <input  class = 'input input-sm' type="text" id="amount" value="100.00"><br/>

    <!--BUTTON-->
    <input type="btn btn" class = 'btn btn-primary' id="buttonProcess" value="Process">

</form>