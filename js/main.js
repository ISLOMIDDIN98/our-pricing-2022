const elsPaymentPeriodRadio = document.querySelectorAll('[name="payment_period"]');
const elsPricingPlanValue = document.querySelectorAll('.pricing-plan-value');

elsPaymentPeriodRadio.forEach(function(elPaymentPeriodRadio){
  elPaymentPeriodRadio.addEventListener('change', function (){

    // console.log(elPaymentPeriodRadio.value);

    const period = elPaymentPeriodRadio.value;

    // console.log(period);

    // if(period === 'annual'){
    //   console.log('yillik');
    // }else{
    //   console.log('oylik');
    // }

    if(period === 'annual'){
      elsPricingPlanValue.forEach(function (elPrice) {
        elPrice.textContent = elPrice.closest('.pricing-plan').dataset.paymentAnnual;
      });
    }else{
      elsPricingPlanValue.forEach(function (elPrice) {
        elPrice.textContent = elPrice.closest('.pricing-plan').dataset.paymentMonthly;
      });
    }
  });
});