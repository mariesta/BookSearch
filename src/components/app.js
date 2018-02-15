import React, { Component } from 'react';

import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail';

export default class App extends Component {
  render() {
    return (
    	<div>
	        <h1>Book Application</h1>

	        <div>
	    		<p className="lead">Very basic Redux application displaying a list of book and their details.</p>
	    	</div>

	      	<div className="row">
	      		<div className="col-sm-4">
	      			<BookList />
	      		</div>
	      		<div className="col-sm-8">
	      			<BookDetail />
	      		</div>
	      	</div>
      	</div>
    );
  }
}