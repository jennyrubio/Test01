import { Selector, t } from 'testcafe';

class Elements {
    constructor() {
        // Selectors
        this.textBoxOption = Selector('li#item-0')
        this.radioButtonsOption = Selector('li#item-2')
        this.webTablesOption = Selector('li#item-3')
    }

    //Functions
    async selectTextBox() {
        // Select the Text Box option in the Elements Menu
        await t.click(this.textBoxOption)
    }

    async selectRadioButtons() {
        // Select the Radio Buttons option in the Elements Menu
        await t.click(this.radioButtonsOption)
    }

    async selectWebTables() {
        // Select the Web Tables option in the Elements Menu
        await t.click(this.webTablesOption)
    }
}

export default new Elements