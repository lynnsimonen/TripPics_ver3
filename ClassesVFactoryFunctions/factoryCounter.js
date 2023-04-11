function Counter (counterElement) {
    const countElement = counterElement.querySelector('span')
    const buttonElement = counterElement.querySelector('button')

    let count = parseInt(countElement.textContent) || 0

    const counter = {
        updateCounter () {
            countElement.textContent = count
        },

        increaseCount: (event) => {
            count = count + 1
            counter.updateCounter()
        }
    }

    buttonElement.addEventListener('click', counter.increaseCount)
}

const counter = Counter(document.querySelector('.counter'))