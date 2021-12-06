import React from 'react'

const Body = () => {
    React.useEffect(() => {
        console.log("componentDidMount");
        return () => {
          console.log("componentDidUnmount");
        };
      }, []);
    

    return <div>Текст статьи</div>;
};

export default Body
