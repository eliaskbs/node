import axios from 'axios'

export const httpClientPlugin = {
    get: async ( url: string ) => {
        const { data } = await axios.get( url );
        return await data;
    },
    post: async(url: string, body: any) => {
        throw new Error('Not implement');
    },
    put: async(url: string, body: any) => {
        throw new Error('Not implement');
    },
    delete:  async(url: string, body: any ) => {
        throw new Error('Not implement');
    },
};
