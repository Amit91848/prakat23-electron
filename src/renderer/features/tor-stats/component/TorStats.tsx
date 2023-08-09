import axios from 'axios';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Spinner,
  VStack,
} from '@chakra-ui/react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const countries = [
  { country: 'India', code: 'in' },
  { country: 'Germany', code: 'de' },
  { country: 'Netherlands', code: 'nl' },
  { country: 'China', code: 'cn' },
  { country: 'Pakistan', code: 'pk' },
  { country: 'United States', code: 'us' },
  { country: 'United Kingdom', code: 'uk' },
  { country: 'Australia', code: 'au' },
  { country: 'France', code: 'fr' },
];

export const TorStats = () => {
  const [chartData, setChartData] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [loading, setIsLoading] = useState<boolean>(false);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  // useEffect(() => {
  //   async function fetchTorStats() {
  //     try {
  //       const response = await axios.get('http://localhost:8000/tor_stats/');
  //       if (response.status === 200) {
  //         const data = await response.data;
  //         setChartData(data);
  //       } else {
  //         console.error('Failed to fetch image');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching image:', error);
  //     }
  //   }

  //   fetchTorStats();
  // }, []);

  const labels = chartData.map((entry) => entry.date);
  const usersData = chartData.map((entry) => entry.users);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Number of Users',
        data: usersData,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://localhost:8000/tor_stats/', {
        params: {
          start: startDate,
          end: endDate,
          country: selectedCountry,
        },
      });

      if (response.status === 200) {
        const data = await response.data;
        setChartData(data);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box padding="15">
      <Box padding="10">
        <Line data={data} />
      </Box>
      <Box
        display="flex"
        alignItems="end"
        justifyContent="center"
        gap={4}
        py="1"
      >
        <FormControl>
          <FormLabel>From Date</FormLabel>
          <Input
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>To Date</FormLabel>
          <Input type="date" value={endDate} onChange={handleEndDateChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Select Country</FormLabel>
          <Select value={selectedCountry} onChange={handleCountryChange}>
            <option value="">Select a country</option>
            {countries.map((country, index) => (
              <option key={index} value={country.code}>
                {country.country}
              </option>
            ))}
          </Select>
        </FormControl>
        <Box>
          <Button colorScheme="blue" onClick={handleSubmit} isLoading={loading}>
            {loading ? <Spinner color="white" /> : 'Submit'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
