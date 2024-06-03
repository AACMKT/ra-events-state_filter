const Toolbar = (props) => {
    const { filters, selected, onSelectFilter } = props;
    return (
        <div>
            {
                filters.map((filter, index) => {return (
                    <button key= { index } className= { selected === filter? "btn-selected":null } onClick = { onSelectFilter } >{ filter }</button>
                )})
            }
        </div>
    )
};

export default Toolbar;