const printProps = (Component) => {
  return (props) => {
    console.log(props);
    return <Component {...props} />;
  };
};

export default printProps;

//this is higher order component you can use this to log all th props passed to wrap component
