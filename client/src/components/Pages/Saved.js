// import React from "react";
// import ResultsContainer from "../components/ResultsContainer";
// import API from "../utils/API";

// class Saved extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             savedBooks: []
//         }
//     }

//     componentWillMount() {
//         API.getBooks().then(
//             (response) => {
//                 this.setState({savedBooks: response.data});
//             }
//         ).catch(
//             (err) => {
//                 console.log(err);
//             }
//         );
//     }

//     render() {
//         console.log(this.state.savedBooks);
//         return(
//             <main>
//                 <ResultsContainer savedBooks={this.state.savedBooks} path={this.props.match.path}/>
//             </main>
//         );
//     }
// }

// export default Saved;

import React from "react";

function Saved() {
  return (
    <div>
      <h1>Saved</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
        varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
        Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
        imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
        ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
        elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
        consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
        malesuada fames ac ante ipsum primis in faucibus.
      </p>
    </div>
  );
}

export default Saved;