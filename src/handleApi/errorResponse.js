


export default function returnError(res) {
    if (res.status == 400 || 
        res.status == 401 || 
        res.status == 404  ) {
        return res.data.error;
    }  else {
        // return 'Check your internet connection'
    }
}