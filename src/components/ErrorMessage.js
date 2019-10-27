import React from 'react'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card } from 'react-bootstrap'

export default function ErrorMessage() {
    console.log('erro')
    return (
        
            <Card>
            <div className="error-message">
                <div className="error-content">
            <FontAwesomeIcon icon={faExclamationCircle}
            color="red"
            size="4x"
             />
            <h1> No results matched your search</h1>
            <p>All searchs must be made in the below format... </p>
            <h6>Owner/Repository-name e.g. Facebook/React</h6>
            <p>A search without both an owner and a repository name will always return no results</p>
                </div>
            </div>
            </Card>
        
    )
}
