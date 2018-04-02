import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

class SongList extends Component {
	onSongDelete(id){
		this.props
			.mutate({
				variables: {id}			
			}).then(() => this.props.data.refetch());
	}

	renderSongs() {
		return this.props.data.songs.map(({id, title}) => {
			return (
				<li key={id} className="collection-item">
					<Link
					to={`song/${id}`}
					>
						{title}
					</Link>
					<i
						className="material-icons"
						onClick={() => this.onSongDelete(id)}
					>
						delete
					</i>
				</li>
			);
		});
	}
	render() {
		if (this.props.data.loading) {
			return <div> loading......</div>;
		}
		console.log(this.props);
		return (
			<div>
				<ul className="collection">{this.renderSongs()}</ul>
				<Link to="/song/new" className="btn-floating btn-large green right">
					<i className="material-icons">add</i>
				</Link>
			</div>
		);
	}
}

const mutation = gql`
	mutation DeleteSong($id: ID){
		deleteSong(id: $id){
			id
		}
	}
`;

export default graphql(mutation)(
 graphql(query)(SongList)
);
