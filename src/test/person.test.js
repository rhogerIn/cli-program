import mocha from 'mocha'
import chai from 'chai'

import Person from '../person.js'

const { describe, it } = mocha
const { expect } = chai


describe('Person Suite Test', () => {
    it('should return a person instance from a string', () => {
        const person = Person.generateInstanceFromString(
            '2 car,boat,plane 3000 2020-01-03 2021-02-03'
        )
        const expected = {
            id: '2',
            from: '2020-01-03',
            to:  '2021-02-03',
            vehicles: ['car', 'boat', 'plane'],
            kmTraveled: '3000'
        }

        expect(person).to.be.deep.equal(expected)
    })

    it('should format values to pt-BR stand', () => {
        const person = new Person({
            id: '2',
            from: '2020-01-03',
            to: '2021-02-03',
            vehicles: ['car', 'boat', 'plane'],
            kmTraveled: '3000'
        })

        const result = person.formated("pt-BR")
        const expected = {
            id: 2,
            vehicles: 'car, boat e plane',
            kmTraveled: '3.000 km',
            from: '03 de janeiro de 2020',
            to: '03 de fevereiro de 2021'
        }

        expect(result).to.be.deep.equal(expected)
    })
})