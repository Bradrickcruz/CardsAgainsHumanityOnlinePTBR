

function toggleCardStyle() {
  let blackCardTypeIsChecked = document.getElementById('blackCardType').checked;
  if (blackCardTypeIsChecked) {
    document
      .querySelectorAll('.white')
      .forEach((item) => item.classList.replace('white', 'black'));
      document.querySelector(".inputCollumnContainer").classList.remove("displayNone")
  } else {
    document
      .querySelectorAll('.black')
      .forEach((item) => item.classList.replace('black', 'white'));
      document.querySelector(".inputCollumnContainer").classList.add("displayNone")
  }
}

function clearForm() {
  document.querySelector('textarea').value = '';
  document.querySelector('#ageRestriction').checked = false;
  document.querySelector('textarea').focus();
}

function registerCard(event) {
  event.preventDefault();
  // console.log('Register Card')
  let formData = new FormData(document.querySelector('#registerCard'));
  let inputs = {};
  for (let [name, value] of formData) {
    // console.log(`${name} = ${value}`); // key1=value1, then key2=value2
    inputs[name] = value;
  }

  if (inputs.cardType == 'black') {
    blackCards.push({
      cardContent: replaceNewLineScapes(inputs.stringTxt),
      ageRestriction: Boolean(inputs.ageRestriction),
    });
    console.log(blackCards);
  } else {
    whiteCards.push({
      cardContent: replaceNewLineScapes(inputs.stringTxt),
      ageRestriction: Boolean(inputs.ageRestriction),
    });
    console.log(whiteCards);
  }
  clearForm();
}

document
  .querySelector('#registerCard')
  .addEventListener('submit', registerCard);

document.querySelector('#blackStringTxt').addEventListener('keyup', (e) => {
  let hasContent = e.target.value;
  let hasMinContent = e.target.value.length > 3;
  if (e.key == 'Enter' && hasContent && hasMinContent) {
    registerCard(e);
  }
});

function replaceNewLineScapes(string) {
  return string.replace(/\n/g, '');
}

console.log(firstDeck);
