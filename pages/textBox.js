import { Selector, t } from 'testcafe';

class TextBox {
    constructor() {
        // Selectors
        this.userNameBox = Selector('input#userName')
        this.emailBox = Selector('input#userEmail')
        this.addressBox = Selector('textarea#currentAddress')
        this.submitBtn = Selector('button#submit')
        this.title = Selector('div.main-header')
    }

    /**
     * Validate that the Title matches with the expected one.
     * @param {String} title: Page Title
     */
    async validateTitle(title) {
        await t.expect(this.title.innerText).eql(title, 'The page is not correct. Text Box title was expected.')
    }

    /**
     * Write the user name
     * @param {String} userName: User Name to write
     */
    async writeName(userName) {
        await t.typeText(this.userNameBox, userName)
    }

    /**
     * Write the email
     * @param {String} email: Email to write 
     */
    async writeEmail(email) {
        await t.typeText(this.emailBox, email)
    }

    /**
     * Write the Address
     * @param {String} address: Address 
     */
    async writeAddress(address) {
        await t.typeText(this.addressBox, address)
    }

    /**
     * Click the Submit button
     */
    async clickSubmit() {
        await t.click(this.submitBtn)
    }
}

export default new TextBox