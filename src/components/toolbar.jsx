const Toolbar = (props) => {
    const { filters, onSelectFilter } = props;
  
    return (
        <div>
            {
                filters.map((filter, index) => {return (
                    <button key={index} onClick = { onSelectFilter } >{ filter }</button>
                )})
            }
        </div>
    )
};

export default Toolbar;