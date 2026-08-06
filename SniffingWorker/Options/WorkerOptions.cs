namespace SniffingWorker.Options
{
    public class WorkerOptions
    {
        public string CronExpression { get; set; } = "* * * * *";
        public int CommandTimeoutSeconds { get; set; } = 30;
        public int RetryCount { get; set; } = 3;
        public int RetryBaseDelaySeconds { get; set; } = 2;
    }
}
