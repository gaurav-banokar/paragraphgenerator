
const input = document.getElementById('numOfWords');
const container = document.querySelector('.container');



const generateWord = (n) => {
  let text = "";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < n; ++i) {
    const random = (Math.random() * 25).toFixed(0);

    text += letters[random];
  }

  return text;

};

const generatePara = () => {

  const numOfWords = input.value;


  if (numOfWords > 0) {
    const para = document.createElement("p");

    let data = "";

    for (let i = 0; i < numOfWords; ++i) {
      const randomNumber = (Math.random() * 15).toFixed(0);

      data += generateWord(randomNumber);
      data += " ";
    }
    para.innerText = data;

    para.setAttribute("class", "para");

    container.append(para);

  }
  else {
    alert("Please enter valid number of words")
  }
};

const deletePara = () => {
  const parabox = document.querySelector(".para")


  if (input.value != 0 && input.value != null) {

    return parabox.remove();
  }
  else {
    alert("first you have to generate para")
  }

}

const deleteAll = () => {

  const paraClass = document.querySelectorAll(".para");

  if (input.value != 0) {

    return paraClass.forEach((paraClass) => {
      paraClass.remove();
    })
  }
  else {
    alert("first you have to generate para")
  }

}

