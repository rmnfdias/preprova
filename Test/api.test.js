const { describe, it, expect} = require ('@jest/globals')
const ServiceApi = require ('../src/services/api')

describe("Testando função somar", () => {
    it("somando dois numero positivos", () => {
        const result = ServiceApi.Somar(1, 2)

        expect (result).toBe(3)

    })
})
describe("Testando função subtrair", () => {
    const result = ServiceApi.Subtrair(2, 1)
        
    expect (result).toBe(1)
    
})