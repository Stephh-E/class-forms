import React from "react";

export default class EditablePost extends React.Component {
	constructor(props){
		super(props);

	}


	render(){
		return(
            <div className="editablePostContainer">
            {/* Editable author field */}
            <label htmlFor="authorField">Author:</label>
            <input type="text" name="authorField" id="authorField" />
            {/* Editable location field */}
            <label htmlFor="locationField">Location:</label>
            <input type="text" name="locationField" id="locationField" />
            {/* Editable content field */}
            <label htmlFor="contentField">Post content:</label>
            <input type="text" name="contentField" id="contentField" />

        </div>
		)
	}
}