/*

Word Scramble - A neat animation to use on headings, subheadings or wherever you want!

*/


/*

Required HTML - 
<div class="container">
  <div class="text"></div>
</div>

Required CSS - 
Change Body to div
body {
  background-color: #2b2b2b;
}

.container {
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}

.text {
  font-weight: 20px;
  font-size: 50px;
  color: gray;
}

*/



class wordScramble {
  constructor(el) {
    this.el = el
    this.chars = '!@#$%^&*qwertyuiopsdfghjklxcvzbnm_QWERTYUIOPASDFGHJKLZXCVBNM';
    this.update = this.update.bind(this)
  }
  
  setText(nText) {
    const oText = this.el.innerText
    const length = Math.max(oText.length, nText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oText[i] || ''
      const to = nText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

const word = [
  'WORD ONE',
  'WORD TWO',
  'WORD THREE'
];

const el = document.querySelector('.text')
const fx = new wordScramble(el)

let counter = 0
const next = () => {
  fx.setText(word[counter]).then(() => {
    setTimeout(next, 1200)
  })
  counter = (counter + 1) % word.length
}

next()
