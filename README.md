# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



import React, { useEffect, useState } from 'react';
import { BsArrowUpRight, BsArrowDownLeft } from "react-icons/bs";
import Filter from './Sheet';
import { Button } from './ui/button';
import { GoDownload } from 'react-icons/go';

export default function Datatable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fe-task-api.mainstack.io/transactions');
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const formatDate = (dateString) => {
   const options = { year: 'numeric', month: 'short', day: 'numeric' };
   return new Date(dateString).toLocaleDateString('en-US', options);
 };

  return (
    <div className="px-4 sm:px-6 lg:px-36 mt-12">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl -tracking-[0.6px] font-bold text-[#131316]">Transactions</h1>
          <p className="text-sm font-medium !leading-4 -tracking-[0.2px] text-[#56616B]">
            Your transactions for the last 7 days 
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 gap-[12px] flex">
          <Filter/>
          <Button className=" w-[139px] h-[48px] rounded-[100px] py-[12px] pr-[10px] pl-[20px] bg-[#EFF1F6] hover:bg-[#EFF1F6] flex gap-[8px]">
            <span className="font-semibold text-base -tracking-[0.4px] text-[#131316] ">Export list</span>
            <GoDownload className="h-5 w-5 text-[#131316]" />
          </Button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0 sr-only">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sr-only">
                    Title
                  </th>
                </tr>
              </thead>
              <tbody className=" bg-white">
                {data.map((details, index) => (
                  <tr key={index} className="">
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="">
                          {details.metadata ? (
                            <div className="h-12 w-12 bg-[#E3FCF2] items-center flex justify-center rounded-full">
                              {/* <div className=' w-5 h-5 '> */}
                                 <BsArrowDownLeft className="h-[11.5px] w-[11.5px] text-[#075132] " />
                                 
                              {/* </div> */}
                            </div>
                          ) : (
                              <div className=" bg-[#F9E3E0] items-center flex justify-center rounded-full h-12 w-12">
                                 <BsArrowUpRight className="h-[11.5px] w-[11.5px] text-[#961100] " />
                              </div>
                          )}
                        </div>
                        <div className="ml-4">
                        {details.metadata && Object.keys(details.metadata).length > 0 ? (
                           <div className=''>
                              <div className="font-medium text-base -tracking-[0.2px] text-[#131316]">
                                    {
                                       !details.metadata.product_name ? (
                                          <span>{details.metadata.type}</span>
                                        ):(
                                          <>
                                             <span>{details.metadata.product_name}</span>
                                          </>
                                       )
                                    }
                                    
                              </div>
                              <span  className="text-[#56616B] font-medium text-sm !leading-4 -tracking-[0.2px]">{details.metadata.name}</span>
                           </div>
                        ) : (
                           <>
                              <span className="font-medium text-base -tracking-[0.2px] text-[#131316]">Cash {details.type}</span>
                              <div className=" text-[#0EA163] font-medium text-sm !leading-4 -tracking-[0.2px]">{details.status}</div>
                           </>
                        )}


                        </div>
                      </div>
                    </td>
                    <td className=" px-3 py-5 ">            
                          <div className="font-bold text-base text-right -tracking-[0.4px] text-[#131316]">USD {details.amount}</div>
                          <div className="mt-1 text-[#56616B] text-right font-medium text-sm !leading-4 -tracking-[0.2px]">{formatDate(details.date)}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

"# fe-task" 
