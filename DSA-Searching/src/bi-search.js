import React, {Component} from 'react';
import searchingService from './searching-service';

function BinarySearch(props) {
    
    const array = props.array;
    if (array) {
        array.sort();
    }

    const ticks = searchingService.binarySearchTicks(array, props.value);


    const message = props.value
        ? 
        <div>
            <h2>Binary Search Ticks</h2>
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

export default BinarySearch;