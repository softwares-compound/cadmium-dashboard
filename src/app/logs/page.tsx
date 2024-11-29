import { fetchLatestLogs } from "@/lib/fetch-data";


const LogsPage = async () => {
    const reaponse = await fetchLatestLogs();

    console.log('reaponse', reaponse);
    return (
        <div>
            <h1>Latest Logs</h1>
        </div>
    );
};

export default LogsPage;
