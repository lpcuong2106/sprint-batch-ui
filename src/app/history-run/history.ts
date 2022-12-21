export interface HistoryRun{
    jobName: String;
    jobInstanceId: Number;
    createTime: Date;
    startTime: Date;
    endTime: Date;
    status: String;
    reportFile: String;
}