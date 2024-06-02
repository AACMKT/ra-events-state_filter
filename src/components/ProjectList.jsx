const ProjectList = (props) => {
    const { projects } = props;
    return (
        <div className="cards-holder">
            {projects.map((el, index) => {
                return (
            
                    <img key={ index } className="card" src={ el.img }/>
              
                )
            })}
        </div>
    )


};

export default ProjectList;