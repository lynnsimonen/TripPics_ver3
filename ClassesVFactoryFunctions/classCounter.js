class ClassCounter {
    #count = 0

    constructor (counter) {
        this.countElement = counter.querySelector('span')
        this.buttonElement = counter.querySelector('button')

        // Initializes count
        this.#count = parseInt(countElement.textContent)

        // Adds event listener
        this.buttonElement.addEventListener('click', this.increaseCount)
    }

    increaseCount = () => {
        this.#count = this.#count + 1
        this.updateCounter()
    }

    updateCount () {
        this.countElement.textContent = this.#count
    }
}

// Usage
const counter = new
ClassCounter(document.querySelector('.counter'))