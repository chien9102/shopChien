const urlTable = "http://localhost:3000/tables";
const urlFood = "http://localhost:3000/foods";
async function getAll(url, callback) {
    try{
        const response = await fetch(url);
        const data = await response.json();
        callback(data);
    } catch (error) {
        console.error( "lỗi:", error);
    }
}

// fetch , ajax , axios deu la lay du lieu 