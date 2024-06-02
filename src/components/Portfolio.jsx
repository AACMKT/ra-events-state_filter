import { Component } from "react"
import Toolbar from "./toolbar"
import ProjectList from "./ProjectList"

export default class Portfolio extends Component {
  state = {selected: "All"};
  filters = ["All", "Websites", "Flayers", "Business Cards"];
  onClick = (e) => {
    this.setState({ selected: e.target.textContent });
  };

    render() {
       let { data } = this.props;
        if (this.state.selected != "All") {
            console.log(this.state.selected)
            data = data.filter(el => el.category == this.state.selected)
        }

        return (
        <>
    
            < Toolbar   filters = { this.filters }
                        onSelectFilter = {this.onClick}
            />
            <div className="container"></div>
                <ProjectList  projects = { data }/>
            <div/>
      
        </>
        )

    }
}