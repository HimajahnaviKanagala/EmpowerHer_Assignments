import MessageCard from './MessageCard';
function App(){
  return (
    <>
    <MessageCard title="welcome" message="This is first message card! "></MessageCard>
    <MessageCard title="Reminder" message="Don't forget to complete your assignment"></MessageCard>
    <MessageCard title="update" message="Your profile was updated successfully!"></MessageCard>
    <MessageCard title="Alert" message="Your session will expire in 5 minutes!"></MessageCard>
    </>
  )
}

export default App;