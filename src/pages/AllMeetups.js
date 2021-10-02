import { useState } from 'react';
import { useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';

function AllMeetups() {
    /** useState returns an array with two elements: the current state (isLoading)
     * and a function to change the state (setIsLoading)
     */
    const [isLoading, setIsLoading] = useState(true)
    // Use a second state to store the loaded meetups (always an array)
    const [loadedMeetups, setLoadedMeetups] = useState([])

    // useEffect allows to run the code only AFTER the DOM has been updated
    useEffect(() => {
        // Set current state to true before fetching data.
        setIsLoading(true);
        // Fetch meetups data from Firebase
        fetch(
            'https://react-meetup-api-2efe3-default-rtdb.firebaseio.com/meetups.json'
        ).then(response => {
            // The function json() return again a promise
            return response.json();
        }).then(data => {
            /** Create a new empty array, loop through the object fetched from Firebase
             *  and push a copy of every element in the new array.
             */
            const meetups = [];
            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup)
            }
            // When data is fetched set the current state to false
            setIsLoading(false);
            setLoadedMeetups(meetups);
        })
    }, [])

    // If useState is set to true (data is currently loading) return this JSX code
    if(isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups}/>
        </section>
    );
}

export default AllMeetups;