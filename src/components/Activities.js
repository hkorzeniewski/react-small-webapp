import Activity from './Activity'

const Activities = ({activities}) => {
    
  return (
    <>
      {activities.map((activity, index) => (
        <Activity key={index} activity={activity} />
      ))}
    </>
  );
};

export default Activities;
