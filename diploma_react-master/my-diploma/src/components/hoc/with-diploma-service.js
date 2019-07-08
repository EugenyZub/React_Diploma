import React from 'react';
import DiplomaServiceContext from '../diploma-service-contex';

const WithDiplomaService = () => (Wrapped) => {
    return (props) => {
        return (
            <DiplomaServiceContext.Consumer>
                {
                    (DiplomaService) => {
                        return <Wrapped {...props} DiplomaService={DiplomaService}/>
                    }
                }
            </DiplomaServiceContext.Consumer>
        )
    };
};

export default WithDiplomaService;