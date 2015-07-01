/**
 *
 * Registration of polymer start-rating-bar custom element.
 * ECMAScript 6 - using BabelJS traspiler.
 */
Polymer('start-rating-bar', {
    ready() {
        for (let star, it = 0; it < 5; it++) {
            star = document.createElement('core-icon')
            star.setAttribute('icon', 'star')
            this.$.container.appendChild(star)
        }
    },
    classificationChanged() {
        let classification = parseInt(this.classification)
        if (classification > 5 || classification < 0) {
            throw new Error("Classification must be an integer between 0 and 5.")
        }

        let it = 0, container = this.$.container
        for (it; it < classification; it++) {
            container.children[it].setAttribute('class', 'yellow')
        }
        for (it; it < 5; it++) {
            container.children[it].removeAttribute('class', 'yellow')
        }
    }
})
