import { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom'


const useHealthCheck = (callback,network) => {
  const navigate = useNavigate()
  const [failureCount, setFailureCount] = useState(0);


  useEffect(() => {
    // Check if the network object is not empty
    if (network && Object.keys(network).length > 0) {
        const interval = setInterval(async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/network`);
            const data = await response.json();

            if (!data.running) {
            setFailureCount(prevCount => prevCount + 1);
            if (failureCount >= 2) { // 0, 1, 2 - three attempts
                await callback(data.msg);
                setFailureCount(0); // Reset the counter after the callback
            }
            } else {
                setFailureCount(0); // Reset the counter if it's running
            }
        } catch (error) {
            setFailureCount(prevCount => prevCount + 1);
            if (failureCount >= 2) {
                await callback('API did not respond.');
            setFailureCount(0); // Reset the counter after the callback
            navigate("/configure")
            }
        }
        }, 2000);

        return () => clearInterval(interval);
    }
  }, [callback, network,failureCount]);


};

export default useHealthCheck;
