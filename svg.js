const logo = document.querySelectorAll("#headline path");
// console.log(logo);

for (let i = 0; i < logo.length; i++) {
  // console.log(logo.length);
  console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
}
