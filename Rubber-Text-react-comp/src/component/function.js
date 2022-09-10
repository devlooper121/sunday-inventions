
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";

export const getPostData = (starCountRef) => {
    let dataArr = []
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        for(let key in data){
            dataArr.push(data[key]);
        }
    });
    return dataArr;
}