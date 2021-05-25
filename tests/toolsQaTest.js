import { homedir } from "os"
import { t } from "testcafe"
import Home from '../pages/home'
import Elements from '../pages/elements'
import TextBox from '../pages/textBox'
import RadioButtons from '../pages/radioButtons'
import WebTables from '../pages/webTables'

fixture('Elements Card')
    .page('https://demoqa.com/')

test('Write the User Data', async t => {
    await Home.selectElementsCard()
    await Elements.selectTextBox()
    await TextBox.validateTitle('Text Box')
    await TextBox.writeName('Jennifer')
    await TextBox.writeEmail('jrubio@mail.com')
    await TextBox.writeAddress('My Address is 123')
    await TextBox.clickSubmit()
})

test('Select Yes Radio Button', async t => {
    await Home.selectElementsCard()
    await Elements.selectRadioButtons()
    await RadioButtons.validateTitle('Radio Button')
    await RadioButtons.selectYes()
    await RadioButtons.validateSelection('Yes')
})

test.only('Add and Eliminate a Web Table', async t => {
    await Home.selectElementsCard()
    await Elements.selectWebTables()
    await WebTables.validateTitle('Web Tables')
    await WebTables.clickAdd()
    await WebTables.writeFirstName('Jennifer')
    await WebTables.writeLastName('Rubio')
    await WebTables.writeEmail('jennifer@mail.com')
    await WebTables.writeAge('25')
    await WebTables.writeSalary('100')
    await WebTables.writeDepartment('TI')
    await WebTables.clickSubmit()
    await WebTables.validateNewElement('Jennifer')
    await WebTables.deleteElement(4)
    await WebTables.searchValue('Jennifer')
    await WebTables.validateElementDeleted()
})