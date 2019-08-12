import React, {Component} from 'react';
import searchingService from './searching-service';

function LinSearch(props) {

    const ticks = searchingService.linearSearchTicks(props.array, props.value);


    const message = props.value
        ? 
        <div>
            <h2>Linear Search Ticks</h2>
            <p>{ticks}</p>
        </div>
        :
        '';


    return(
        <div>
            {message}
        </div>
    )
}

export default LinSearch;