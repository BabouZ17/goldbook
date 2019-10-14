import React from 'react';
import axios from 'axios';

class NotesComponent extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
			"loading": false,
			"notes": []
		}
	}

	async fetchNotes(){
		await axios.get('http://localhost:8001/api/notes')
			.then((response) => {
				console.log(response);
				const notes = response.data;
				this.setState({ notes });
			})
			.catch((error) => {
				console.log(error);
			})
	}

	handleClick(){
		console.log("Clicked!");
		this.fetchNotes();
	}

	componentDidMount(){
		console.log("Mounted");
		this.fetchNotes();
	}

  render(){
    return (
			<div>
				<button onClick={this.handleClick}>
					Click-me!
				</button>
        <table>
					<thead>
						<tr>
							<th>#</th>
							<th>Writer</th>
							<th>Content</th>
							<th>Created on</th>
						</tr>
					</thead>
					<tbody>
						{ this.state.notes.map((value, index) => {
							return (
								<tr key={index}>
									<th>{value.id}</th>
									<th>{value.writer}</th>
									<th>{value.content}</th>
									<th>{value.createdAt}</th>
								</tr>
							) 
						})}
					</tbody>
				</table>
      </div>
    )
  }
}

export default NotesComponent;