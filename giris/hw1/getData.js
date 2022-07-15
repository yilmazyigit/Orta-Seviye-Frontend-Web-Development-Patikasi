import axios from "axios";

async function getData(userID){
    let URL = "https://jsonplaceholder.typicode.com/users/"+userID
    const data = await axios(URL)
    .then(result_ => result_.data);
    console.log(data);
    URL = "https://jsonplaceholder.typicode.com/posts?userId=" +userID;
    const posts = await axios(URL, {
        params: {
            _limit:1
        }
    }).then(result_ => result_.data);
    console.log(URL);

    return {
        data, posts
    }
}
export default getData;