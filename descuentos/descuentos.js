const coupons = [
  {
    name: "messi10",
    discount: 50,
  },
  {
    name: "federer",
    discount: 15,
  },
  {
    name: "coscu",
    discount: 25,
  },
];


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    return precioConDescuento;
  }
  

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
  
   
    const isCouponValid = coupons => coupons.name === inputCoupon.value;

    const userCoupon = coupons.find(isCouponValid);

   if (!userCoupon){
   alert(`El cupon ${inputCoupon.value} no es válido`)
    }
    else {
      const descuento = userCoupon.discount;
      const precioConDescuento = calcularPrecioConDescuento (priceValue, descuento);

      const resultP = document.getElementById("ResultP");
      resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
    }
   }
   