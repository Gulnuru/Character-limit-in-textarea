// // #Homework 5

// Создать мини-приложение как показано на картинке. Логика у приложения простая. 
// Пользователь вводит текст в поле ввода, а снизу отображается сколько символов он ввел.
//  Также должен отображаться лимит на количество символов. Если пользователь превысит 
//  лимит, то раскрасить символы и цифры счетчика и лимита в другой цвет как показано на 
//  картинке.

let inputBox = document.querySelector(".input-box"),
textarea = inputBox.querySelector("textarea"),
signalNum = inputBox.querySelector(".signal_num");

textarea.addEventListener("keyup",() => {
  let valLength = textarea.value.length;

  signalNum.innerText = valLength;

  if(valLength > 0 ){
    inputBox.classList.add("active")
  }else {
    inputBox.classList.remove("active")
  }
  if (valLength > 30) {
    inputBox.classList.add("error")
  }
  console.log(valLength);
})