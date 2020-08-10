//---Double Click---//

const doubleClk = document.querySelectorAll('h2');
// console.log(doubleClk);
doubleClk.forEach((el) => {
    el.addEventListener('dblclick', () => {
        el.style.color = "blue";
        el.style.fontSize = "5rem";
    });
});

//---Keydown---//

const wholePage = document.querySelector('body');
const head1 = document.querySelector('h1');
// console.log(head1);
wholePage.addEventListener('keydown', () => {
  // console.log("Fun Bus");
  head1.style.color = "blue";
});

//---KeyUp---//

wholePage.addEventListener('keyup', (e) => {
  head1.style.color = "Black";
});





// Your code goes here

//  Load  //

// window.addEventListener('load', () => {
//   console.log('page is fully loaded');
//   // alert('The page has fully loaded!');
// });


//  Mouse Over

// const navLinks = document.querySelectorAll('.nav-link');
// console.log(navLinks);
// navHover.forEach((e) => {
//   // console.log(e);
//   e.addEventListener('mouseover', (el) => {
//       // console.log("Pink");
//       e.style.color = "Red";
  // });


// //
// // #3 Mouse Leave
// //
//   // copy & pasted code
//   e.addEventListener('mouseleave', (el) => {
//       e.style.color = "Black";
//   });
// });
// //
// // #4 Key Down
// //
// let body = document.querySelector('body');
// let funBus = document.querySelector('.logo-heading')
// // console.log(body);
// body.addEventListener('keydown', (e) => {
//   // console.log("Fun Bus");
//   funBus.style.color = "White";
// });
// //
// // #5 Key Up
// //
// body.addEventListener('keyup', (e) => {
//   funBus.style.color = "Black";
// });
// //
// // #6 Click
// //
// let imgClick = document.querySelectorAll('img');
// let rotate = false;
// // console.log(imgClick);
// imgClick.forEach((e) => {
//   // console.log(el);
//   e.addEventListener('click', (el) => {
//       // e.style.transform = 'rotate(180deg)';
//       e.style.transform = 'rotate(180deg)';
//       rotate = true;
//   });
// });
// imgClick.forEach((e) => {
//   // console.log(e);
//   e.addEventListener('dblclick', (el) => {
//       // console.log(e);
//       if (rotate === true) {
//           e.style.transform = 'rotate(0deg)';
//           rotate = false;
//       }
//   });
// });
// //
// // #7 Double Click
// //
// let dblClick = document.querySelectorAll('h2');
// // console.log(dblClk);
// dblClick.forEach((e) => {
//   // console.log(e);
//   e.addEventListener('dblclick', (el) => {
//       e.style.color = "Blue";
//   });
// });
// //
// // #8 Context Menu
// //
// body.addEventListener('contextmenu', (e) => {
//   // console.log(e);
//   e.preventDefault();
//   // console.log("You can't steal our code!");
//   alert("You can't steal our code!");
// });
// //
// // #9 Focus
// //
// let navLink = document.querySelectorAll('a');
// // console.log(navLink);
// navLink.forEach((e) => {
//   //console.log(e);
//   e.addEventListener('focus', (el) => {
//       // console.log(el);
//       e.style.backgroundColor = "Blue";
//       e.style.color = "white";
//   });
// });
// //
// // #10 Blur
// //
// navLink.forEach((e) => {
//   //console.log(e);
//   e.addEventListener('blur', (el) => {
//       // console.log(el);
//       e.style.backgroundColor = "white";
//       e.style.color = "black";
//   });
// });
