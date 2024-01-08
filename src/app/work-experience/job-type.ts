export interface JobType {
    readonly jobId: string;
    readonly jobUrl: string;
    readonly jobName: string;
    readonly company: string;
    readonly duration: string;
    readonly description:string[];//bullet point job descriptions
    readonly picture?:string;

}