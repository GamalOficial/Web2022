import {collection, getDocs, QuerySnapshot} from "firebase/firestore"
import StudentTableRow from "../components/crud/student/StudentTableRow"

class FirebaseStudentService{
    static list = () => {
        const coll = collection(firestore, "student")
        getDocs(coll)
        then(
            (querySnapshot)=>{
                querySnapshot.forEach(
                    (document)=>{
                        students.push(
                            {
                                _id:document._id,
                                name:document.data().name,
                                course:document.data().course,
                                ira:document.data().ira
                            }
                        )
                    }
                )

            }

        )
        
        .catch(error=>console.log(error))
        
    }

    static update = () => {

    }

    static create = () => {

    }
}