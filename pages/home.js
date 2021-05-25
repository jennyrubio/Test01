import { Selector, t } from 'testcafe';

class Home {
    constructor() {
        // Selectors
        this.elemetsCard = Selector('h5').withExactText('Elements')
    }

    /**
     * Select the Elements Card.
     */
    async selectElementsCard() {
        await t.click(this.elemetsCard)
    }
}

export default new Home