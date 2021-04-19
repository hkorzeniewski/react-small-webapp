const Activities = ({activities}) => {
    
  return (
    <>
    
      {activities.map((activity) => (
        <h3 key={activity.id}>{activity.text} {activity.number}</h3>
      ))}
    </>
  );
};

export default Activities;
