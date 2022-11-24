import { Endpoints } from '../../../config/Endpoints';
import { api } from '../apiaxs';

export class CountryServives {
    static async getCategory() {
        const response = await api.get(Endpoints.CATERORY)
        return response.data
    }
}