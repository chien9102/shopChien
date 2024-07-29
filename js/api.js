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
function edit(url,id,object) {
    fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(object),
      })
      .then(response => response.json())
      .then(data => {
      })
      .catch(error => console.error('Lỗi khi cập nhật đơn hàng', error));
}

// fetch , ajax , axios deu la lay du lieu 