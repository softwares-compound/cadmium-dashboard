import axios from 'axios';

// Define the types for the response data to ensure type safety
interface Log {
    id: string;
    error: string;
    traceback: string;
    url: string;
    method: string;
    createdAt: string;
    updatedAt: string;
}

interface GraphQLResponse {
    data: {
        logs: Log[];
    };
    errors?: unknown;
}

export const fetchLatestLogs = async (): Promise<Log[] | null> => {
    const url = 'http://43.204.216.93/graphql';
    const headers = {
        'Content-Type': 'application/json',
        'CD-ID': '5c133a93-8dd4-4958-847a-ae81a5e11743',
        'CD-Secret': '2fb5be09-8dba-481c-aaaf-5efad1d0a59c',
        'Application-ID': '673d6733caa30090be5b410d',
    };

    const query = {
        query: `
      query GetLatestLogs {
        logs(page: 1, limit: 5) {
          id
          error
          traceback
          url
          method
          createdAt
          updatedAt
        }
      }
    `,
    };

    try {
        const response = await axios.post<GraphQLResponse>(url, query, { headers });
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
