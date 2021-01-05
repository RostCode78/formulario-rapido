let p = {

   btn: document.querySelector('.btn_pedir'),
   expressForm: document.querySelector('#formulario_rapido'),
   openForm: false

}

let m = {

   start: () => {

      p.btn.addEventListener(
         'click',
         m.mostrarExpressForm
      )

   },

   mostrarExpressForm: () => {

      if( !p.openForm ) {

         p.expressForm.style.bottom = "0%";
         p.openForm = true;
      
      } else {

         p.expressForm.style.bottom = "-100%";
         p.openForm = false;

      }

   }

}

m.start();