

import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddTask = () => {

    const navigate = useNavigate();

    const baseURL = "http://localhost:4000";
    

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();


    const add = async (data) => {
        try {
            const response = await axios.post(`${baseURL}/api/task/add`, data);
            if(response.data.status === 'successful' ){
                navigate(-1);
            }
            else{
                alert(response.data.Error);
            }

        }
        catch(err){
            console.log(err);
        }
    }


    const onSubmit = async (data) => {

        await add(data);
        reset();
    };



    return (
        
        <div className="flex flex-col h-screen">
            <div className="flex justify-center sm:h-full">
                <div className='flex flex-col mt-24 w-11/12 md:w-2/3 lg:w-1/3'> 


                <h1 className='font-bold text-2xl mb-8 w-5/6 lg:text-2xl pt-2' > Add task to your list </h1>

                <form onSubmit={handleSubmit(onSubmit)} >

                    <div className="flex my-2 bg-gray-100 rounded-lg py-3 pl-4">
                    
                        <textarea id="task" name="task" className="appearance-none w-11/12 bg-transparent text-gray-700 focus:outline-none" placeholder="enter your task" {...register("task", {
                            required: "task is required.",
                            maxLength: {
                                value: 150,
                                message: "task should be max 150 characters."
                            }

                        })}/>


                        <div className="cut"></div>
                    
                    </div>

                    {errors.task && (
                        <p className="errorMsg" style={{color:'#f22952', fontSize:'13px'}} >{errors.task.message}</p>
                    )}


                    <div className="flex my-2 bg-gray-100 rounded-lg py-3 pl-4 mb-3">
                        <input id="priority" name="priority" type="number" className="appearance-none w-11/12 bg-transparent text-gray-700 focus:outline-none" placeholder="priority" {...register("priority", {
                            required: "priority is required.",
                            min: {value: 1, message: "priority must be at least 1"},
                            max: {value: 9, message: "priority must be no more than 9"},

                        })} />


                        <div className="cut"></div>
                    
                    </div>

                    {errors.priority && (
                        <p className="errorMsg" style={{color:'#f22952', fontSize:'13px'}} >{errors.priority.message}</p>
                    )}

                    

                    <div className="flex items-center py-3">
                        <input id="completed" type="checkbox" name="completed" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:none" {...register("completed")} />
                        <label htmlFor="disabled-radio-2" className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">Completed</label>

                        <div className="cut"></div>

                    </div>


                    <div className="flex items-center py-3">
                        <input id="cancelled" type="checkbox" name="cancelled" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:none" {...register("cancelled")} />
                        <label htmlFor="disabled-radio-2" className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500">Cancelled</label>

                        <div className="cut"></div>

                    </div>



                    <label></label>
                    <button type="text" className="w-full text-white bg-blue-700 p-3 rounded-md mt-6"> Create Task </button>
                    
                </form>

                <button onClick={() => navigate(-1)} type="text" className="w-full text-white bg-yellow-600 p-3 rounded-md mt-2"> Back </button>

                </div>

            </div>
        </div>

    )
}

export default AddTask;

