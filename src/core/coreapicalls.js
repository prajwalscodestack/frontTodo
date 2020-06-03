import { API } from "../backend";

export const getAllTask = (userId,token) => {
  return fetch(`${API}/todo/getAllTask/${userId}`, { 
      method: "GET" ,
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
//create todo
export const createTodo = (token, userdata,todo) => {
   const{title,description,category,status,due}=todo;
   const user= userdata._id; 
   const task={title,description,category,status,due,user};
  return fetch(`${API}/createTodo`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(task)
  })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .catch(err => console.log(err));
};

export const getAllCategories=()=>{
  return fetch(`${API}/getAllCategories`, { 
    method: "GET"
  })
  .then(response => {
    console.log(response);
    return response.json();
  })
  .catch(err => console.log(err));
}
