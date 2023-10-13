import axios from "axios";

const baseUrl = "";
const localUrl = "http://localhost:5000";

async function authUser(req){
    try{
        console.log(`${localUrl}/user/auth`);
        const response = await axios.post(`${localUrl}/user/auth`, req, {
            headers : {
                'Content-Type' : 'application/json',
            }
        })
        console.log("response: ",response)
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}

async function newUser(req){
    try{
        const response = await axios.post(`${localUrl}/user/add`, req, {
            headers : {
                'Content-Type' : 'application/json',
            }
        })
        console.log("response: ",response)
        return response.data;
    }
    catch(error){
        console.log(error);
    }
}

async function getTodos(req){
    try{
        const response = await axios.post(`${localUrl}/todos/get`,req,{
            headers : {
                'Content-Type' : 'application/json',
            }
        })
        return response.data.result;
    }catch(error){
        console.log(error);
    }
}

async function addTodo(req){
    try{
        const response = await axios.post(`${localUrl}/todos/add`,req,{
            headers : {
                'Content-Type' : 'application/json',
            }
        })
        return response.data;
    }catch(error){
        console.log(error);
    }
}


async function updateTodo(req){
    try{
        const response = await axios.post(`${localUrl}/todos/edit`,req, {
            headers : {
                'Content-Type' : 'application/json',
            }
        })
        console.log("response: ",response)
        return response.data;
    }catch(error){
        console.log(error);
    }
}

async function updateStatus(req){
    try{
        const response = await axios.post(`${localUrl}/todos/update-status`,req, {
            headers : {
                'Content-Type' : 'application/json',
            }
        })
        console.log("response: ",response)
        return response.data;
    }catch(error){
        console.log(error);
    }
}

const GeneralServices = {
    authUser,
    newUser,
    getTodos,
    addTodo,
    updateTodo,
    updateStatus
};

export default GeneralServices;
