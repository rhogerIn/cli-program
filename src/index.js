import database from '../database.json'
import TerminalController from './controllers/terminal.js'

const DEFAULT_LANG = "pt-BR"

const terminalController = new TerminalController()

terminalController.initializeTerminal(database, DEFAULT_LANG)
