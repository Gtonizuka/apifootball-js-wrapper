import { expect } from 'chai'
import * as sinon from 'sinon'

import { MainService } from '../index'
import { CountriesResponse } from '../types';
import { ENDPOINT } from '../static/endpoint';

const getRequest = require('../http/index')

describe('getCountries', () => {

    let getRequestStub: any

    let MAINSERVICE: any


    beforeEach(()=> {
        getRequestStub = sinon.stub(getRequest, 'getRequest')

        MAINSERVICE = new MainService('APIKEY')
    })

    afterEach(() => {
        getRequestStub.restore()
    })


    it('is a function', () => {
        expect(MAINSERVICE.getCountries).to.be.a('function')
    })

    it('should return a list of countries', async () => {
        const response: CountriesResponse = {
            countries: []
        }

        getRequestStub.resolves({
            data: response
        })

        const result = await MAINSERVICE.getCountries()

        expect(result).to.deep.equal(response)
    })

    it('should fail if there is something wrong with the request', async () => {
        getRequestStub.throws('400')

        try {
            await MAINSERVICE.getCountries()
            expect.fail('getCountries should be rejected')
        } catch (err) {
            expect(err.message).to.equal('400')
        }
    })
})