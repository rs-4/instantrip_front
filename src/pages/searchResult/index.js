import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../../components/global/footer';

const Index = () => {
  const [responseData, setResponseData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      const parsedFormData = JSON.parse(storedFormData);

      // Send the form data to the API
      axios
        .post('https://instantrip.onrender.com/api/flight/filter', parsedFormData)
        .then(response => {
          console.log(response.data);
          setResponseData(response.data);
          // Process the response from the API
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, []);

  const reserveFlight = flightId => {
    // Logic for reserving the flight goes here
    console.log(`Flight ${flightId} is reserved.`);
  };
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const currentItems = responseData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="min-h-screen py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 gap-8 px-4">
          {currentItems.map((data, index) => (
            <div
              key={index}
              className="bg-[#D9D9D9] rounded-lg shadow-md p-6 flex flex-col justify-between items-center"
            >
              <div className="flex flex-row justify-between items-center w-full">
                <img
                  src={data.thumbnail}
                  alt="Thumbnail"
                  className="w-32 h-32  object-cover mr-4"
                />

                <div className="flex-grow flex">
                  <div className="flex-1 mb-2">
                    <h4 className="text-md font-semibold">Depart:</h4>
                    <div>City: {data.airport_depart.city}</div>
                    <div>Airport: {data.airport_depart.name}</div>
                  </div>
                  <div className="flex-1 mb-2">
                    <h4 className="text-md font-semibold">Arrive:</h4>
                    <div>City: {data.airport_arrive.city}</div>
                    <div>Airport: {data.airport_arrive.name}</div>
                  </div>
                </div>

                <div className="ml-4">
                  <h2 className="mb-4">Prix: {data.prix}$</h2>
                  <div className="flex flex-col items-end">
                    <button
                      className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded mb-2"
                      onClick={() => reserveFlight(data.id)}
                      style={{ borderRadius: '10px' }}
                    >
                      Reserver
                    </button>
                    <a
                      href={`https://www.google.com/maps/search/${data.airport_arrive.city}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:underline italic self-center"
                    >
                      View Destination
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <div>
                  Date Depart:{' '}
                  {new Date(data.date_depart).toISOString().split('T')[0]} Date
                  Return:{' '}
                  {new Date(data.date_return).toISOString().split('T')[0]}
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-center mt-8">
            {currentPage > 1 && (
              <button
                onClick={previousPage}
                className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded mx-2"
              >
                Previous
              </button>
            )}
            {(currentPage - 1) * itemsPerPage + currentItems.length <
              responseData.length && (
              <button
                onClick={nextPage}
                className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded mx-2"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
