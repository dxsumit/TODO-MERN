
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({authState}) => {

    const navigate = useNavigate();
    const location = useLocation();

    const [counter, setCounter] = useState(0);
    const [allTasks, setAllTasks] = useState([]);
    const [pendingTasks, setPendingTasks] = useState(0)
    const baseURL = "http://localhost:4000";

    useEffect( () => {

        const getAllTasks = async () => {

            const response = await axios.get(`${baseURL}/api/task/get`);
            if(response.data.status === "successful"){
                setAllTasks(response.data.msg);
                setPendingTasks(response.data.pending);
            }
            else{
                alert(response.data.Error);
            }

        }
        
        if(!location.state){
            navigate('/');
        }
        
        getAllTasks();

    }, [counter])


    const cancelTask = async (i) => {
        
        const id = allTasks[i]._id
        if(!allTasks[i].cancelled){
            const response = await axios.patch(`${baseURL}/api/task/update/${id}`, {
                "cancelled": true
            })

            if(response.data.status === 'successful'){
                setCounter(counter+1)
            }
            else {
                alert(response.data.Error);
            }
        }
    }

    const completeTask = async (i) => {
        
        const id = allTasks[i]._id
        if(!allTasks[i].completed){
            const response = await axios.patch(`${baseURL}/api/task/update/${id}`, {
                "completed": true
            })

            if(response.data.status === 'successful'){
                setCounter(counter+1)
            }
            else {
                alert(response.data.Error);
            }
        }
    }


    const deleteTask = async (i) => {
        const id = allTasks[i]._id;

        const response = await axios.delete(`${baseURL}/api/task/delete/${id}`);
        if(response.data.status === 'successful'){
            setCounter(counter+1)
        }
        else{
            alert(response.data.Error);
        }

    }

    return (

        <div className="flex justify-center min-h-screen bg-gray-900">

            <div className="col-span-12">
                <div className="overflow-auto lg:overflow-visible ">

                <div className="flex justify-between pt-3 pb-1 px-3">
                    <h1 className="text-base md:text-xl text-white mt-5"> hello, <span className="font-bold text-teal-400"> {location.state ? location.state.email : ""} </span> <span className="text-sm ml-2"> pending tasks: {pendingTasks} </span>  </h1>

                    <button onClick={() => navigate('/add') } 
                        className="focus:outline-none text-white bg-teal-500 hover:bg-teal-400 font-medium rounded-lg text-xs px-1 md:px-4 md:text-sm">
                        ADD Task
                    </button>
                </div>
                
                

                    <table className="table text-gray-400 border-separate space-y-6 text-sm">
                        <thead className="bg-gray-800 text-gray-500">
                            <tr>
                                <th className="p-3 text-white text-left">S.N.</th>
                                <th className="p-3 text-white">Task</th>
                                <th className="p-3 text-white text-left">Priority</th>
                                <th className="p-3 text-white text-left">Status</th>
                                <th className="p-3 text-white">Action</th>
                            </tr>
                        </thead>


                        <tbody>

                            {

                                allTasks.map( (obj, i) => (
                                    
                                    <tr className="bg-gray-800" key={obj._id}>

                                        <td className="text-center">
                                            {i+1}
                                        </td>

                                        <td className="p-3">
                                            <div className="ml-3">
                                                <div>
                                                    {obj.task} 
                                                </div>
                                            </div>
                                        </td>

                                        <td className="text-center">
                                            {obj.priority}
                                        </td>
                                        
                                        <td className="p-3 text-xs">
                                            {
                                                ( () => {
                                                    if(obj.completed){
                                                        return (
                                                            <span>
                                                                <svg className="h-8 w-8 text-white bg-green-600 rounded px-1"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z"/>  
                                                                    <path d="M7 12l5 5l10 -10" />  
                                                                    <path d="M2 12l5 5m5 -5l5 -5" />
                                                                </svg>
                                                            </span>

                                                        )
                                                    }
                                                    else if(obj.cancelled){
                                                        return (
                                                            <span>
                                                                <svg className="h-8 w-8 text-white bg-yellow-600 rounded px-1"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12"/>
                                                                </svg>
                                                            </span>
                                                        )
                                                    }
                                                    else {
                                                        return (
                                                            <span>
                                                                <svg className="h-8 w-8 text-white bg-red-400 rounded px-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round">  
                                                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                                                </svg>
                                                            </span>
                                                        )
                                                    }
                                                })()
                                            }
                                            
                                        </td>


                                        <td className="p-3 pl-4">
                                            
                                            <button onClick={() => cancelTask(i)} className="bg-transparent hover:bg-gray-500 text-gray-600 font-semibold py-2 px-2 rounded-r ml-1">
                                                <svg className="h-5 w-5 text-yellow-600"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                                                </svg>
                                            </button>
                                            
                                            
                                            <button onClick={() => completeTask(i)} className="bg-transparent hover:bg-gray-500 text-gray-600 font-semibold py-2 px-2 rounded-r ml-1">
                                                <svg className="h-5 w-5 text-green-400"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                                                    <path stroke="none" d="M0 0h24v24H0z"/>  
                                                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />  
                                                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />  
                                                    <path d="M9 15l2 2l4 -4" />
                                                </svg>
                                            </button>

                                            

                                            <button onClick={() => deleteTask(i)} className="bg-transparent hover:bg-gray-500 text-gray-600 font-semibold py-2 px-2 rounded-r ml-1">
                                                <svg className="h-5 w-5 text-red-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  
                                                    <polyline points="3 6 5 6 21 6" />  
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  
                                                    <line x1="10" y1="11" x2="10" y2="17" />  
                                                    <line x1="14" y1="11" x2="14" y2="17" />
                                                </svg>
                                            </button>
                                        </td>

                                    </tr>

                                ))        
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    )
}

export default Home;

