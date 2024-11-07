let display = document.getElementById('display-value')

function appendNumber(num) {
  if (display.innerText === '0') {
    display.innerText = ''
  }
  display.innerText += num
}

function appendOperator(operator) {
  display.innerText += `${operator}`
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteDigit() {
  let text = display.innerText.trim();
  display.innerText = text.length > 1 ? text.slice(0, -1) : '0';
}

function calculateResult() {
  try {
    display.innerText = eval(display.innerText.replace('÷', '/').replace('×', '*'));
  } catch {
    display.innerText = 'Error';
  }
}