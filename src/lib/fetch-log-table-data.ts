import { AXIOS_INSTANCE } from '@/axios/axios';
import { LogTableEntry } from '@/types/type';
import axios from 'axios';

export const fetchLogTableData = async (): Promise<LogTableEntry[] | null> => {
    const headers = {
        'Content-Type': 'application/json',
        'CD-ID': '5c133a93-8dd4-4958-847a-ae81a5e11743',
        'CD-Secret': '2fb5be09-8dba-481c-aaaf-5efad1d0a59c',
        'Application-ID': '673d6733caa30090be5b410d',
    };

    const query = `
    query GetLogs($page: Int, $limit: Int) {
      logs(page: $page, limit: $limit) {
        id
        organizationId
        applicationId
        error
        url
        method
        createdAt
        updatedAt
      }
    }
  `;

    const variables = {
        page: 1, // Change this to the desired page number
        limit: 10, // Change this to the desired limit
    };
    try {
        const response = await AXIOS_INSTANCE.post(
            "/graphql",
            { query, variables }, // Sending query and variables as the request body
            { headers } // Attach headers
        );
        if (response.data.errors) {
            console.error('Error fetching logs:', response.data.errors);
            return null;
        }
        return response.data.data.logs;
    } catch (error) {
        console.error('Error during the API request:', error);
        return null;
    }
};
