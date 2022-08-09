import {
    createClient
} from 'next-sanity'

export const config ={
    datset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'PRODUCTION',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2021-03-25',
    useCdn: process.env.NODE_ENV == 'production',
}

export const sanityClient = createClient(config)