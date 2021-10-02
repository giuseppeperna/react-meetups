import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetup() {
    // Expose an history object to manipulate the browser history
    const history = useHistory();

    // Send POST request to Firebase to store new meetup
    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-meetup-api-2efe3-default-rtdb.firebaseio.com/meetups.json',
            {
                method:'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            // Redirect to homepage after the POST request
           history.replace('/')
        });
    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
}

export default NewMeetup;