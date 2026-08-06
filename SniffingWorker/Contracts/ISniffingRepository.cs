using System.Threading.Tasks;

namespace SniffingWorker.Contracts
{
    public interface ISniffingRepository
    {
        Task CaptureAsync();
    }
}
