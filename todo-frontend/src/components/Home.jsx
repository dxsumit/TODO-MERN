
import { useLocation } from "react-router-dom";

const Home = () => {

    const location = useLocation()

    return (
        // <div classNameName="flex flex-col items-center h-screen">

        //     <h1 classNameName="text-xl text-gray-800 mt-5"> hello, <span classNameName="font-bold text-blue-600"> {location.state.email}{location.state.domain} </span>  </h1>
        
        // </div>

        

        
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="col-span-12">
                <div className="overflow-auto lg:overflow-visible ">
                    <table className="table text-gray-400 border-separate space-y-6 text-sm">
                        <thead className="bg-gray-800 text-gray-500">
                            <tr>
                                <th className="p-3 text-white">Task</th>
                                <th className="p-3 text-white text-left">Status</th>
                                <th className="p-3 text-white text-left">Action</th>
                            </tr>
                        </thead>


                        <tbody>
                            <tr className="bg-gray-800">
                                <td className="p-3">
                                    <div className="ml-3">
                                        <div className="">Appple Appple Appple Appple Appple Appple Appple Appple Appple Appple </div>
                                        <div className="text-gray-500">mail@rgmail.com</div>
                                    </div>
                                </td>
                                
                                <td className="p-3">
                                    <span className="bg-green-600 text-gray-50 rounded-md px-2">available</span>
                                </td>


                                <td className="p-3 pl-4">
                                    
                                    <button className="bg-transparent hover:bg-gray-500 text-gray-600 font-semibold py-2 px-2 rounded-r ml-1">
                                        <svg className="h-5 w-5 text-yellow-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                                        </svg>
                                    </button>
                                    
                                    
                                    <button className="bg-transparent hover:bg-gray-500 text-gray-600 font-semibold py-2 px-2 rounded-r ml-1">
                                        <svg className="h-5 w-5 text-green-400"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                                            <path stroke="none" d="M0 0h24v24H0z"/>  
                                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />  
                                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />  
                                            <path d="M9 15l2 2l4 -4" />
                                        </svg>
                                    </button>

                                    

                                    <button className="bg-transparent hover:bg-gray-500 text-gray-600 font-semibold py-2 px-2 rounded-r ml-1">
                                        <svg className="h-5 w-5 text-red-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  
                                            <polyline points="3 6 5 6 21 6" />  
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  
                                            <line x1="10" y1="11" x2="10" y2="17" />  
                                            <line x1="14" y1="11" x2="14" y2="17" />
                                        </svg>
                                    </button>
                                </td>

                            </tr>

                            <tr className="bg-gray-800">
                                <td className="p-3">
                                    <div className="ml-3">
                                        <div className="">Realme</div>
                                        <div className="text-gray-500">mail@rgmail.com</div>
                                    </div>
                                
                                </td>
                                
                                <td className="p-3">
                                    <span className="bg-red-400 text-gray-50 rounded-md px-2">no stock</span>
                                </td>

                                <td className="p-3 pl-4">
                                    
                                    <button className="bg-transparent hover:bg-gray-500 text-gray-600 font-semibold py-2 px-2 rounded-r ml-1">
                                        <svg className="h-5 w-5 text-yellow-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                                        </svg>
                                    </button>
                                    
                                    
                                    <button className="bg-transparent hover:bg-gray-500 text-gray-600 font-semibold py-2 px-2 rounded-r ml-1">
                                        <svg className="h-5 w-5 text-green-400"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                                            <path stroke="none" d="M0 0h24v24H0z"/>  
                                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />  
                                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />  
                                            <path d="M9 15l2 2l4 -4" />
                                        </svg>
                                    </button>

                                    

                                    <button className="bg-transparent hover:bg-gray-500 text-gray-600 font-semibold py-2 px-2 rounded-r ml-1">
                                        <svg className="h-5 w-5 text-red-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  
                                            <polyline points="3 6 5 6 21 6" />  
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  
                                            <line x1="10" y1="11" x2="10" y2="17" />  
                                            <line x1="14" y1="11" x2="14" y2="17" />
                                        </svg>
                                    </button>
                                </td>
                                
                            </tr>

                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    )
}

export default Home;

