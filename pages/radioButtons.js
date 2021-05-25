import { Selector, t } from 'testcafe';

class RadioButtons {
    constructor() {
        // Selectors
        this.yesOption = Selector('input#yesRadio')
        this.selectionText = Selector('span.text-success')
        this.title = Selector('div.main-header')
    }

    /**
     * Validate that the Title matches with the expected one.
     */
    async validateTitle(title) {
        await t.expect(this.title.innerText).eql(title, 'The page is not correct. Radio Button title was expected.')
    }

    /**
     * Select the Radio Button 'Yes'
     */
    async selectYes() {
        await t.click(this.yesOption)
    }

    /**
     * Validate that the Selection was the expected one.
     * @param option: Option to select - Yes or Impressive
     */
    async validateSelection(option) {
        await t.expect(this.selectionText.innerText).contains(option, 'The Selection was not correct. *Yes* was the expected one.')
    }


}

export default new RadioButtons