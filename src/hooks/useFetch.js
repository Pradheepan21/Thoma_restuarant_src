import { useEffect, useState } from 'react';
<<<<<<< HEAD
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../config/firebase'; // Import firestore from firebase.js
=======
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import initializeAuthentication from '../config/firebase'; // Adjust the path as needed
>>>>>>> 75852d355f4fadcada072ebaab96ce90b14c0433

const useFetch = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const fetchFoods = async () => {
            try {
<<<<<<< HEAD
                // Fetch data from Firestore
                const querySnapshot = await getDocs(collection(firestore, 'foods'));
                const foodItems = querySnapshot.docs.map((doc) => ({
                    _id: doc.id,
                    ...doc.data(),
                }));

                setFoods(foodItems); // Update state with fetched foods
=======
                // Initialize Firebase
                const app = initializeAuthentication();
                const db = getFirestore(app);

                // Fetch data from Firestore
                const querySnapshot = await getDocs(collection(db, 'foods'));
                const foodItems = querySnapshot.docs.map(doc => ({
                    _id: doc.id,
                    ...doc.data()
                }));

                setFoods(foodItems);
>>>>>>> 75852d355f4fadcada072ebaab96ce90b14c0433
            } catch (error) {
                console.error('Error fetching foods:', error);
            }
        };

<<<<<<< HEAD
        fetchFoods(); // Call the fetch function
    }, []);

    return [foods]; // Return the fetched foods
=======
        fetchFoods();
    }, []);

    return [foods];
>>>>>>> 75852d355f4fadcada072ebaab96ce90b14c0433
};

export default useFetch;