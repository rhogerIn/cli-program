import { writeFile, readFile } from 'fs/promises'

export const save = async (data) => {
    let { pathname: databaseFile } = new URL('./../../database.json', import.meta.url) 
    databaseFile = databaseFile.replace("/C:", "")
    const currentData = JSON.parse((await readFile(databaseFile)))
    currentData.push(data)

    await writeFile(databaseFile, JSON.stringify(currentData))
}