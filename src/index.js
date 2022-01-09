import DraftLog from 'draftlog'
import chalk from 'chalk'
import chalkTable from 'chalk-table'
import readline from 'readline'

import database from '../database.json'
import Person from './person.js'

const DEFAULT_LANGUAGE = "pt-BR"
DraftLog(console).addLineListener(process.stdin)

const options = {
    leftPad: 2,
    columns: [
        { field: "id", name: chalk.cyan("ID") },
        { field: "vehicles", name: chalk.green("Vehicles") },
        { field: "kmTraveled", name: chalk.magenta("KM Traveled") },
        { field: "from", name: chalk.white("From") },
        { field: "to", name: chalk.yellow("TO") }
    ]
}

const table = chalkTable(options, database.map(item => new Person(item).formated(DEFAULT_LANGUAGE)))
const print = console.draft(table)

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

terminal.question('What`s your name?', msg => {
    console.log(msg)
})
