let fecha = new Date();
let dateCustom = new Date('1987/11/19');
console.log(fecha);
console.log(dateCustom.getTime());

// function addDays(date, days) {
//     var result = new Date(date);
//     result.setDate(result.getDate() + days);
//     return result;
//   }

  let inputDate = document.getElementById('datePicker');
  console.log(inputDate.value);

  inputDate.addEventListener('change', (e) => {
      console.log(e.target.value);
      let date = new Date(e.target.value);
      console.log(date.getTime());
  });