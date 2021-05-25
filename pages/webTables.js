import { Selector, t } from 'testcafe';

class WebTables {
    constructor() {
        // Selectors
        this.title = Selector('div.main-header')
        this.addButton = Selector('button#addNewRecordButton')
        this.registrationForm = Selector('div#registration-form-modal')
        this.firstName = Selector('input#firstName')
        this.lastName = Selector('input#lastName')
        this.email = Selector('input#userEmail')
        this.age = Selector('input#age')
        this.salary = Selector('input#salary')
        this.department = Selector('input#department')
        this.submitButton = Selector('button#submit')
        this.searchBox = Selector('input#searchBox')
        this.noRows = Selector('div.rt-noData')
    }

    /**
     * Validate that the Title matches with the expected one.
     * @param title: Title to validate
     */
    async validateTitle(title) {
        await t.expect(this.title.innerText).eql(title, 'The page is not correct. Web Tables title was expected.')
    }

    /**
     * Press the Add button
     */
    async clickAdd() {
        await t.click(this.addButton)
    }

    /**
     * Write the First Name
     * @param {String} firstName: First name
     */
    async writeFirstName(firstName) {
        await t.typeText(this.firstName, firstName)
    }

    /**
     * Write the Last Name
     * @param {String} lastName 
     */
    async writeLastName(lastName) {
        await t.typeText(this.lastName, lastName)
    }

    /**
     * Write the Email
     * @param {String} email 
     */
    async writeEmail(email) {
        await t.typeText(this.email, email)
    }

    /**
     * Write the Age
     * @param {String} age 
     */
    async writeAge(age) {
        await t.typeText(this.age, age)
    }

    /**
     * Write the Salary value.
     * @param {String} salary 
     */
    async writeSalary(salary) {
        await t.typeText(this.salary, salary)
    }

    /**
     * Write the Department
     * @param {String} department
     */
    async writeDepartment(department) {
        await t.typeText(this.department, department)
    }

    /**
     * Press the Submit button
     */
    async clickSubmit() {
        await t.click(this.submitButton)
    }

    /**
     * Validate that the new element was created.
     * @param {String} firstName 
     */
    async validateNewElement(firstName) {
        const tableElement = Selector('div').withExactText(firstName).exists
        await t.expect(tableElement).ok();
    }

    /**
     * Delete an specific element with the row number (start in 1).
     * The method concatenates the number and the rest of the ID, to be able to locate that element and remove it.
     * @param {int} numberElement 
     */
    async deleteElement(numberElement) {
        var selector = 'delete-record-' + numberElement
        const mySelector = selector.replace(/^\s+|\s+$/g, "")

        const element = Selector(`span#${mySelector}`)
        await t.click(element)
    }

    /**
     * Search an specific value in the Search Box
     * @param {String} firstName 
     */
    async searchValue(firstName) {
        await t.typeText(this.searchBox, firstName)
    }

    /**
     * Validate that the Element deleted before does not exist.
     */
    async validateElementDeleted() {
        await t.expect(this.noRows.visible).ok()
    }
}

export default new WebTables