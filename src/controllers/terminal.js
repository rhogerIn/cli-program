import DraftLog from 'draftlog'
import chalk from 'chalk'
import chalkTable from 'chalk-table'
import readline from 'readline'

import Person from '../person.js'

export default class TerminalController {
    constructor() {
        this.print = {}
        this.data = {}
    }

    initializeTerminal(database, language) {
        DraftLog(console).addLineListener(process.stdin)
        this.terminal = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        this.initializeTable(database, language)
    }
    
    initializeTable(database, language) {
        const data = database.map(item => new Person(item).formated(language))
        const table = chalkTable(this.getTableOptions, data)
        this.print = console.draft(table)
        this.data = data
    }

    closeTerminal() {
        this.terminal.close()
    }

    question(msg = '') {
        return new Promise(resolve => this.terminal.question(msg, resolve))
    }

    getTableOptions() {
        return {
            leftPad: 2,
            columns: [
                { field: "id", name: chalk.cyan("ID") },
                { field: "vehicles", name: chalk.green("Vehicles") },
                { field: "kmTraveled", name: chalk.magenta("KM Traveled") },
                { field: "from", name: chalk.white("From") },
                { field: "to", name: chalk.yellow("TO") }
            ]
        }
    }
}