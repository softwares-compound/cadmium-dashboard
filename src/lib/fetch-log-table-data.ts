import { AXIOS_INSTANCE } from '@/axios/axios';
import { LogTableEntry, RagResponse } from '@/types/type';

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
        ragInference
      }
    }
  `;

    const variables = {
        page: 1,
        limit: 10,
    };

    try {
        const response = await AXIOS_INSTANCE.post(
            '/graphql',
            { query, variables },
            { headers }
        );

        if (response.data.errors) {
            console.error('Error fetching logs:', response.data.errors);
            return null;
        }

        // Parse ragInference for each log entry
        const logs: LogTableEntry[] = response.data.data.logs.map((log: any) => ({
            ...log,
            ragInference: log.ragInference ? parseRagInference(log.ragInference) : null,
        }));

        return logs;
    } catch (error) {
        console.error('Error during the API request:', error);
        return null;
    }
};

const parseRagInference = (ragInference: string): RagResponse | null => {
    try {
        return JSON.parse(ragInference) as RagResponse;
    } catch (error) {
        console.error('Failed to parse ragInference:', error);
        return null;
    }
};
