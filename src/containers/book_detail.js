import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render() {
		if(!this.props.book) {
			return(
				<div className="bookDetail">
					<p>Please select a book to view</p>
				</div>
			);
		}

		return(
			<div className="bookDetail">
				<h3>{ this.props.book.title }</h3>
				<p>{this.props.book.under_title}</p>
				<h4>Product Details:</h4>
				<div>
					<span className="detailLabel">Edition:</span> {this.props.book.edition}
				</div>
				<div>
					<span className="detailLabel">ISBN-10:</span> {this.props.book.isbn10}
				</div>
				<div>
					<span className="detailLabel">Author:</span> {this.props.book.author}
				</div>
				<div>
					<span className="detailLabel">Series:</span> {this.props.book.series}
				</div>
				<div>
					<span className="detailLabel">Description:</span> {this.props.book.description}
				</div>

			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);