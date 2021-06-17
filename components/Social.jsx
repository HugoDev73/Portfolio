const Social = (props) => {
    return (
      <>
        <a href={props.url} className="mx-2">
          <div className="hover:text-secondary text-center text-sm p-2">
            <i className={`${props.icon} text-2xl`}></i>
            {/* <span className="text-base block">{props.name}</span> */}
          </div>
        </a>
      </>
    );
  };
  
  export default Social;
  