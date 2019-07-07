export default class RestoService {
    constructor() {
        this._db = 'http://localhost:3000/';    
    }
    async getResource() {
        const result = await fetch(this._db);
        if(!result.ok) {
            throw result.status;
        }

        return await result.json();
    }

    async getCoffee() {
        return await this.getResource('coffee/')
    }

    async getBestsellers() {
        return await this.getResource('bestsellers/')
    }

    async getGoods() {
        return await this.getResource('goods/')
    }
}