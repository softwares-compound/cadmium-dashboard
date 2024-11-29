import { fetchLogTableData } from "@/lib/fetch-log-table-data";



const LogsPage = async () => {
    const reaponse = await fetchLogTableData();

    console.log('reaponse', reaponse);
    return (
        <div>
            <h1>Latest Logs</h1>
        </div>
    );
};

export default LogsPage;
